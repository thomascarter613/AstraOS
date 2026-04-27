import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(import.meta.dir, "../../..");

const requiredPaths = [
  "README.md",
  "package.json",
  "turbo.json",
  "biome.json",
  "tsconfig.base.json",
  "docs/specs/astra-sdlc-framework-v0.1.md",
  "packages/work-packet-engine/package.json",
  "packages/work-packet-engine/src/index.ts",
  "knowledge/sdlc/lifecycle-overview.md",
  "knowledge/scrum/scrum-overview.md",
  "workflows/implementation.yaml",
  "policies/authority-boundaries.yaml",
];

describe("repository contract", () => {
  for (const path of requiredPaths) {
    test(`${path} exists`, () => {
      expect(existsSync(resolve(repoRoot, path))).toBe(true);
    });
  }
});
