import * as fs from "fs";
import * as path from "path";
import SimpleAppGenerator from "../src/lib/SimpleAppGenerator";

const name = "project";
const generator = new SimpleAppGenerator(name, true);

/**
 * Tests root directory creation
 */
it("should be able to generate the root directory", () => {
    generator.generateRootDir();
    expect(fs.existsSync(generator.name)).toBeTruthy();
});

/**
 * Tests source directory creation
 */
it("should be able to generate the source directory", () => {
    generator.generateSrcDir();
    expect(fs.existsSync(path.join(generator.name, "src"))).toBeTruthy();
});

/**
 * Tests test directory creation
 */
it("should be able to generate the test directory", () => {
    generator.generateTestDir();
    expect(fs.existsSync(path.join(generator.name, "test"))).toBeTruthy();
});

/**
 * Tests copying the gitignore file
 */
it("should be able to copy the gitignore file", () => {
    generator.copyGitIgnoreFile();
    expect(fs.existsSync(path.join(generator.name, ".gitignore"))).toBeTruthy();
});

/**
 * Tests copying the jest config file
 */
it("should be able to copy the jest config file", () => {
    generator.copyJestConfigFile();
    expect(fs.existsSync(path.join(generator.name, "jest.config.js"))).toBeTruthy();
});

/**
 * Tests copying the TS config file
 */
it("should be able to copy the TS config file", () => {
    generator.copyTsConfigFile();
    expect(fs.existsSync(path.join(generator.name, "tsconfig.json"))).toBeTruthy();
});

/**
 * Tests copying the package.json file
 */
it("should be able to copy the package.json file", () => {
    generator.copyPackageJsonFile();
    expect(fs.existsSync(path.join(generator.name, "package.json"))).toBeTruthy();
});

/**
 * Tests generating the index.ts file
 */
it("should be able to generate the index.ts file", () => {
    generator.generateIndexFile();
    expect(fs.existsSync(path.join(generator.name, "src", "index.ts"))).toBeTruthy();
});

/**
 * Tests generating the index.ts file
 */
it("should be able to generate the index.test.ts file", () => {
    generator.generateIndexTestFile();
    expect(fs.existsSync(path.join(generator.name, "test", "index.test.ts"))).toBeTruthy();
});
