import { describe, expect, test } from "bun:test";
import { validWorkPacket } from "../fixtures";
import {
  checkDefinitionOfReady,
  evaluateWorkPacketReadinessRules,
  WORK_PACKET_READINESS_RULES,
} from "../readiness";

describe("Definition of Ready rules", () => {
  test("defines stable readiness rules", () => {
    expect(WORK_PACKET_READINESS_RULES.map((rule) => rule.id)).toEqual([
      "ready.source_artifacts.required",
      "ready.acceptance_criteria.required",
      "ready.definition_of_ready.required",
      "ready.definition_of_done.required",
      "ready.constraints.required",
      "ready.forbidden_actions.required",
      "ready.verification.commands.required",
      "ready.verification.evidence.required",
      "ready.handoff.human_review.required",
      "ready.high_risk.risks.required",
    ]);
  });

  test("accepts a ready Work Packet", () => {
    const result = checkDefinitionOfReady(validWorkPacket);

    expect(result.valid).toBe(true);
    expect(result.issues).toEqual([]);
  });

  test("returns schema validation issues before readiness issues", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      id: "",
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "id")).toBe(true);
  });

  test("rejects a Work Packet without source artifacts", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      sourceArtifacts: [],
    });

    expect(result.valid).toBe(false);
    expect(result.issues).toEqual([
      {
        field: "sourceArtifacts",
        message: "ready.source_artifacts.required: At least one source artifact is required.",
        severity: "error",
      },
    ]);
  });

  test("rejects a Work Packet without acceptance criteria", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      acceptanceCriteria: [],
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "acceptanceCriteria")).toBe(true);
    expect(result.issues[0]?.message).toContain("ready.acceptance_criteria.required");
  });

  test("rejects a Work Packet without verification commands", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      verificationPlan: {
        ...validWorkPacket.verificationPlan,
        commands: [],
      },
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "verificationPlan.commands")).toBe(true);
  });

  test("rejects a Work Packet without required verification evidence", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      verificationPlan: {
        ...validWorkPacket.verificationPlan,
        requiredEvidence: [],
      },
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "verificationPlan.requiredEvidence")).toBe(
      true,
    );
  });

  test("rejects a Work Packet without human review handoff requirement", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      handoffRequirements: validWorkPacket.handoffRequirements.filter(
        (requirement) => requirement !== "state_human_review_required",
      ),
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "handoffRequirements")).toBe(true);
    expect(result.issues[0]?.message).toContain("ready.handoff.human_review.required");
  });

  test("rejects high-risk Work Packets without risk statements", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      riskClass: "high",
      risks: [],
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "risks")).toBe(true);
  });

  test("allows low-risk Work Packets without risk statements", () => {
    const result = checkDefinitionOfReady({
      ...validWorkPacket,
      riskClass: "low",
      risks: [],
    });

    expect(result.valid).toBe(true);
  });

  test("evaluates readiness rules directly for valid packets", () => {
    const issues = evaluateWorkPacketReadinessRules({
      ...validWorkPacket,
      sourceArtifacts: [],
      acceptanceCriteria: [],
    });

    expect(issues.map((issue) => issue.field)).toEqual(["sourceArtifacts", "acceptanceCriteria"]);
  });
});
