import { mkdirp } from "mkdirp";
import * as path from "path";

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

    constructor(name: string) {
        this.name = name;
        this.rootDir = path.join(this.name);
        this.srcDir = path.join(this.name, "src");
        this.testDir = path.join(this.name, "test");
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
     * Recursively generates the directories.
     * @param path The directories path
     */
    private generateDir(path: string): void {
        console.log(`Generating ${path} dir(s)`);
        mkdirp.sync(path);
    }

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
}

export default TemplateGenerator;
