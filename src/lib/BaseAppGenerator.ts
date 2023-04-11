import { mkdirp } from "mkdirp";
import * as path from "path";
import * as fs from "fs";
import Generator from "./AppGenerator";
/**
 * Abstract App Generator
 */
export default abstract class BaseAppGenerator implements Generator {
    /**
     * Constructor
     * @param name The app name
     * @param isCLI Is the app a cli app?
     */
    constructor(private _name: string, private _isCLI?: boolean) {}

    generate(): void {
        //generate mandatory dirs
        this.generateRootDir();
        this.generateSrcDir();
        this.generateTestDir();
        this.generateIndexFile();
        this.generateIndexTestFile();

        //copy mandatory files
        this.copyGitIgnoreFile();
        this.copyJestConfigFile();
        this.copyTsConfigFile();
        this.copyPackageJsonFile();
    }

    generateRootDir = () => this.generateDir(this.name);
    generateSrcDir = () => this.generateDir(path.join(this.name, "src"));
    generateTestDir = () => this.generateDir(path.join(this.name, "test"));

    generateIndexFile = (): void => this.generateFile(path.join(this.name, "src", "index.ts"), this.isCLI ? "#!/usr/bin/env node" : "");
    generateIndexTestFile = (): void => this.generateFile(path.join(this.name, "test", "index.test.ts"));

    copyGitIgnoreFile = () => this.copyAsset(".gitignore", this.name);
    copyJestConfigFile = () => this.copyAsset("jest.config.js", this.name);
    copyTsConfigFile = () => this.copyAsset("tsconfig.json", this.name);
    copyPackageJsonFile = () => this.copyAsset("package.json", this.name);

    /**
     * Recursively generates the directories.
     * @param path The directories path.
     */
    private generateDir(path: string): void {
        console.log(`Generating ${path} dir(s)`);
        mkdirp.sync(path);
        console.log("ok");
    }

    /**
     * Generates a file with its content.
     * @param path The file path.
     * @param content The file content.
     */
    private generateFile(path: string, content?: string): void {
        console.log(`Generating ${path} file`);
        fs.writeFileSync(path, content ? content : "", { encoding: "utf8" });
        console.log("ok");
    }

    /**
     * Copies an asset into the given destination.
     * @param fileName The input asset file name.
     * @param destination The copy destination.
     * @param newName The output asset file name.
     */
    private copyAsset(fileName: string, destination: string, newFile?: string): void {
        console.log(`Copying ${path.join("assets", fileName)} file to ${destination}`);
        fs.copyFileSync(path.join("assets", fileName), path.join(destination, newFile ? newFile : fileName));
        console.log("ok");
    }

    /** Getters setters **/

    public get isCLI(): boolean {
        return this._isCLI;
    }
    public set isCLI(value: boolean) {
        this._isCLI = value;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}
