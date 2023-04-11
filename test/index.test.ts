import TemplateGenerator from "../src/lib/TemplateGenerator";
import * as fs from "fs";
import * as path from "path";

const name = "project";
const generator = new TemplateGenerator(name);

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
