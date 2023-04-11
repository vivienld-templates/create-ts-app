import { mkdirp } from "mkdirp";
import * as path from "path";
import * as fs from "fs";
import Generator from "./TemplateGenerator";
/**
 * Base of a Template Generator
 */
export default abstract class BaseGenerator implements Generator {
    private _name: string;
    private _rootDir: string;
    private _srcDir: string;
    private _testDir: string;
    private _assetsDir: string;

    constructor(name: string) {
        this.name = name;
        this.rootDir = path.join(this.name);
        this.srcDir = path.join(this.name, "src");
        this.testDir = path.join(this.name, "test");
        this.assetsDir = path.join("assets");
    }

    generateRootDir = (): void => {
        this.generateDir(this.rootDir);
    };

    generateSrcDir = (): void => {
        this.generateDir(this.srcDir);
    };

    generateTestDir = (): void => {
        this.generateDir(this.testDir);
    };

    copyGitIgnoreFile = (): void => {
        this.copyAsset(".gitignore", this.rootDir);
    };

    copyJestConfigFile = (): void => {
        this.copyAsset("jest.config.js", this.rootDir);
    };

    /**
     * Copies the `tsconfig.json` file in the project's root directory
     */
    copyTsConfigFile = (): void => {
        this.copyAsset("tsconfig.json", this.rootDir);
    };

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
     * Copies an asset into the given destination.
     * @param fileName The asset file name.
     * @param destination The copy destination.
     */
    private copyAsset = (fileName: string, destination: string): void => {
        console.log(
            `Copying ${path.join(
                this.assetsDir,
                fileName
            )} file to ${destination}`
        );
        fs.copyFileSync(
            path.join(this.assetsDir, fileName),
            path.join(destination, fileName)
        );
        console.log("ok");
    };

    /** Getters setters **/

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get rootDir(): string {
        return this._rootDir;
    }
    set rootDir(value: string) {
        this._rootDir = value;
    }

    get srcDir(): string {
        return this._srcDir;
    }
    set srcDir(value: string) {
        this._srcDir = value;
    }

    get testDir(): string {
        return this._testDir;
    }
    set testDir(value: string) {
        this._testDir = value;
    }

    get assetsDir(): string {
        return this._assetsDir;
    }
    set assetsDir(value: string) {
        this._assetsDir = value;
    }
}
