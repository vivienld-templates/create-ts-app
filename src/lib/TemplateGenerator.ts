import { mkdirp } from "mkdirp";
import * as path from "path";
import * as fs from "fs";

/**
 * Class to create a template directory.
 */
class TemplateGenerator {
    /** The project name. */
    private _name: string;
    /** The root directory path. */
    private _rootDir: string;
    /** The source directory path. */
    private _srcDir: string;
    /** The test directory path. */
    private _testDir: string;
    /** The assets directory path. */
    private _assetsDir: string;

    constructor(name: string) {
        this.name = name;
        this.rootDir = path.join(this.name);
        this.srcDir = path.join(this.name, "src");
        this.testDir = path.join(this.name, "test");
        this.assetsDir = path.join("assets");
    }

    /**
     * Generates the root directory.
     */
    generateRootDir = (): void => {
        this.generateDir(this.rootDir);
    };

    /**
     * Generates the src directory.
     */
    generateSrcDir = (): void => {
        this.generateDir(this.srcDir);
    };

    /**
     * Generates the test directory.
     */
    generateTestDir = (): void => {
        this.generateDir(this.testDir);
    };

    /**
     * Copies the `.gitignore` file in the project's root directory
     */
    copyGitIgnoreFile = (): void => {
        console;
        this.copyAsset(".gitignore", this.rootDir);
    };

    /**
     * Copies the `jest.config.js` file in the project's root directory
     */
    copyJestConfigFile = (): void => {
        console;
        this.copyAsset("jest.config.js", this.rootDir);
    };

    /**
     * Copies the `tsconfig.json` file in the project's root directory
     */
    copyTsConfigFile = (): void => {
        console;
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

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get rootDir(): string {
        return this._rootDir;
    }
    public set rootDir(value: string) {
        this._rootDir = value;
    }

    public get srcDir(): string {
        return this._srcDir;
    }
    public set srcDir(value: string) {
        this._srcDir = value;
    }

    public get testDir(): string {
        return this._testDir;
    }
    public set testDir(value: string) {
        this._testDir = value;
    }

    public get assetsDir(): string {
        return this._assetsDir;
    }
    public set assetsDir(value: string) {
        this._assetsDir = value;
    }
}

export default TemplateGenerator;
