import { describe, expect, test } from "bun:test";
import pkg from "../package.json";

describe(`${pkg.name} scaffold`, () => {
  test("workspace package metadata exists", () => {
    expect(typeof pkg.name).toBe("string");
    expect(pkg.name.length).toBeGreaterThan(0);
    expect(pkg.private).toBe(true);
  });
});
