import { describe, expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { readWorkPacketFile } from "../io";
import type { SdlcPhase } from "../types";

const examplesDir = resolve(import.meta.dir, "../../../../artifacts/work-packets/examples");

const expectedExamples = new Map<string, SdlcPhase>([
  ["architecture-and-design.example.yaml", "architecture_and_design"],
  ["continuous-improvement.example.yaml", "continuous_improvement"],
  ["discovery.example.yaml", "discovery"],
  ["implementation.example.yaml", "implementation"],
  ["operations.example.yaml", "operations"],
  ["release.example.yaml", "release"],
  ["requirements.example.yaml", "requirements"],
  ["review.example.yaml", "review"],
  ["testing-and-verification.example.yaml", "testing_and_verification"],
]);

describe("canonical Work Packet examples", () => {
  test("the expected example files exist", async () => {
    const files = await readdir(examplesDir);
    const yamlFiles = files.filter((file) => file.endsWith(".yaml")).sort();

    expect(yamlFiles).toEqual([...expectedExamples.keys()].sort());
  });

  test("every canonical example validates and has the expected SDLC phase", async () => {
    for (const [file, expectedPhase] of expectedExamples) {
      const path = resolve(examplesDir, file);
      const result = await readWorkPacketFile(path);

      expect(result.issues, `${file} should not have validation issues`).toEqual([]);
      expect(result.valid, `${file} should be valid`).toBe(true);
      expect(result.value?.schemaVersion).toBe("0.1.0");
      expect(result.value?.sdlcPhase).toBe(expectedPhase);
      expect(result.value?.metadata.source).toBe("canonical_example");
      expect(basename(path)).toBe(file);
    }
  });
});
