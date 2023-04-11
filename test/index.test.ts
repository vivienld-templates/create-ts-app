import * as fs from "fs";
import * as path from "path";
import SimpleTemplateGenerator from "../src/lib/SimpleTemplateGenerator";

const name = "project";
const generator = new SimpleTemplateGenerator(name);

/**
 * Tests root directory creation
 */
it("should be able to generate the root directory", () => {
    generator.generateRootDir();
    expect(fs.existsSync(generator.rootDir)).toBeTruthy();
});

/**
 * Tests source directory creation
 */
it("should be able to generate the source directory", () => {
    generator.generateSrcDir();
    expect(fs.existsSync(generator.srcDir)).toBeTruthy();
});

/**
 * Tests test directory creation
 */
it("should be able to generate the test directory", () => {
    generator.generateTestDir();
    expect(fs.existsSync(generator.testDir)).toBeTruthy();
});

/**
 * Tests copying the gitignore file
 */
it("should be able to copy the gitignore file", () => {
    generator.copyGitIgnoreFile();
    expect(
        fs.existsSync(path.join(generator.rootDir, ".gitignore"))
    ).toBeTruthy();
});

/**
 * Tests copying the jest config file
 */
it("should be able to copy the jest config file", () => {
    generator.copyJestConfigFile();
    expect(
        fs.existsSync(path.join(generator.rootDir, "jest.config.js"))
    ).toBeTruthy();
});

/**
 * Tests copying the TS config file
 */
it("should be able to copy the TS config file", () => {
    generator.copyTsConfigFile();
    expect(
        fs.existsSync(path.join(generator.rootDir, "tsconfig.json"))
    ).toBeTruthy();
});
