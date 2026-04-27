import { describe, expect, test } from "bun:test";
import { checkDefinitionOfReady } from "../readiness";
import { parseWorkPacket } from "../schema";
import { validWorkPacket } from "../fixtures";
import { normalizeStringArray, normalizeWorkPacket } from "../normalization";

describe("Work Packet normalization", () => {
  test("normalizes string arrays by trimming, removing blanks, and removing duplicates", () => {
    expect(normalizeStringArray([" alpha ", "alpha", "", " beta ", "beta"])).toEqual([
      "alpha",
      "beta",
    ]);
  });

  test("trims top-level string fields", () => {
    const normalized = normalizeWorkPacket({
      ...validWorkPacket,
      id: "  WP-001  ",
      title: "  Implement normalization  ",
      objective: "  Normalize Work Packet representation.  ",
    });

    expect(normalized.id).toBe("WP-001");
    expect(normalized.title).toBe("Implement normalization");
    expect(normalized.objective).toBe("Normalize Work Packet representation.");
  });

  test("normalizes list fields", () => {
    const normalized = normalizeWorkPacket({
      ...validWorkPacket,
      sourceArtifacts: [
        " docs/domain/work-packet-schema.md ",
        "docs/domain/work-packet-schema.md",
        "",
      ],
      acceptanceCriteria: [" Examples validate. ", "Examples validate.", ""],
      forbiddenActions: [" deploy_production ", "deploy_production", ""],
    });

    expect(normalized.sourceArtifacts).toEqual(["docs/domain/work-packet-schema.md"]);
    expect(normalized.acceptanceCriteria).toEqual(["Examples validate."]);
    expect(normalized.forbiddenActions).toEqual(["deploy_production"]);
  });

  test("normalizes Scrum context without preserving blank optional values", () => {
    const normalized = normalizeWorkPacket({
      ...validWorkPacket,
      scrumContext: {
        productGoal: "  Make Work Packets reliable  ",
        sprintGoal: "   ",
        sprint: " Foundation Sprint ",
        backlogItemId: "",
      },
    });

    expect(normalized.scrumContext).toEqual({
      productGoal: "Make Work Packets reliable",
      sprint: "Foundation Sprint",
    });
  });

  test("normalizes verification plan arrays", () => {
    const normalized = normalizeWorkPacket({
      ...validWorkPacket,
      verificationPlan: {
        ...validWorkPacket.verificationPlan,
        commands: [" bun run verify ", "bun run verify", ""],
        requiredEvidence: [" Full verification passes. ", "Full verification passes.", ""],
      },
    });

    expect(normalized.verificationPlan.commands).toEqual(["bun run verify"]);
    expect(normalized.verificationPlan.requiredEvidence).toEqual([
      "Full verification passes.",
    ]);
  });

  test("normalizes metadata and allows explicit updatedAt override", () => {
    const normalized = normalizeWorkPacket(
      {
        ...validWorkPacket,
        metadata: {
          owner: " human_engineer ",
          source: " canonical_example ",
          createdAt: " 2026-04-27T00:00:00.000Z ",
          updatedAt: " 2026-04-27T00:00:00.000Z ",
          relatedArtifacts: [" ASTRA-001 ", "ASTRA-001", ""],
        },
      },
      {
        updatedAt: "2026-04-28T00:00:00.000Z",
      },
    );

    expect(normalized.metadata).toEqual({
      owner: "human_engineer",
      source: "canonical_example",
      createdAt: "2026-04-27T00:00:00.000Z",
      updatedAt: "2026-04-28T00:00:00.000Z",
      relatedArtifacts: ["ASTRA-001"],
    });
  });

  test("does not hide schema invalidity", () => {
    const normalized = normalizeWorkPacket({
      ...validWorkPacket,
      id: "   ",
    });

    const result = parseWorkPacket(normalized);

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "id")).toBe(true);
  });

  test("does not hide readiness failures", () => {
    const normalized = normalizeWorkPacket({
      ...validWorkPacket,
      sourceArtifacts: ["   "],
      acceptanceCriteria: ["   "],
    });

    const result = checkDefinitionOfReady(normalized);

    expect(result.valid).toBe(false);
    expect(result.issues.map((issue) => issue.field)).toEqual([
      "sourceArtifacts",
      "acceptanceCriteria",
    ]);
  });
});