/**
 * An app generator.
 */
export default interface AppGenerator {
    /**
     * Is the App a CLI app?
     */
    isCLI: boolean;

    /**
     * The project name.
     */
    name: string;

    /**
     * Generates the Application.
     */
    generate(): void;

    /**
     * Generates the root directory.
     */
    generateRootDir(): void;

    /**
     * Generates the src directory.
     */
    generateSrcDir(): void;

    /**
     * Generates the test directory.
     */
    generateTestDir(): void;

    /**
     * Generates the index.ts file.
     */
    generateIndexFile(): void;

    /**
     * Generates the index.test.ts file.
     */
    generateIndexTestFile(): void;

    /**
     * Copies the `.gitignore` file in the project's root directory
     */
    copyGitIgnoreFile(): void;

    /**
     * Copies the `jest.config.js` file in the project's root directory
     */
    copyJestConfigFile(): void;

    /**
     * Copies the `tsconfig.json` file in the project's root directory
     */
    copyTsConfigFile(): void;

    /**
     * Copies the `package.json` file in the project's root directory
     */
    copyPackageJsonFile(): void;
}
