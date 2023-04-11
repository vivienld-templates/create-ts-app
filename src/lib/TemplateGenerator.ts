/**
 * The model of a project template generator.
 */
export default interface TemplateGenerator {
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
}
