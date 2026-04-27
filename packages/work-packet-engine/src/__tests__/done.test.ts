import { describe, expect, test } from "bun:test";
import {
  checkDefinitionOfDone,
  evaluateWorkPacketDoneRules,
  WORK_PACKET_DONE_RULES,
} from "../done";
import { validWorkPacket } from "../fixtures";

describe("Definition of Done rules", () => {
  test("defines stable done rules", () => {
    expect(WORK_PACKET_DONE_RULES.map((rule) => rule.id)).toEqual([
      "done.status.terminal_required",
      "done.verification.passed_required",
      "done.verification.commands.required",
      "done.verification.evidence.required",
      "done.acceptance_criteria.required",
      "done.definition_of_done.required",
      "done.handoff.summary.required",
      "done.handoff.unverified_items.required",
      "done.handoff.human_review.required",
      "done.high_risk.risks.required",
    ]);
  });

  test("accepts a verified Work Packet with passed verification", () => {
    const result = checkDefinitionOfDone(validWorkPacket);

    expect(result.valid).toBe(true);
    expect(result.issues).toEqual([]);
  });

  test("returns schema validation issues before done issues", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      id: "",
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "id")).toBe(true);
  });

  test("rejects work that is still ready", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      status: "ready",
    });

    expect(result.valid).toBe(false);
    expect(result.issues).toEqual([
      {
        field: "status",
        message:
          "done.status.terminal_required: Work Packet status must be verified, done, or released.",
        severity: "error",
      },
    ]);
  });

  test("rejects work that has not passed verification", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      verificationPlan: {
        ...validWorkPacket.verificationPlan,
        status: "failed",
      },
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "verificationPlan.status")).toBe(true);
    expect(result.issues[0]?.message).toContain("done.verification.passed_required");
  });

  test("rejects done work without verification commands", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      verificationPlan: {
        ...validWorkPacket.verificationPlan,
        commands: [],
      },
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "verificationPlan.commands")).toBe(true);
  });

  test("rejects done work without required verification evidence", () => {
    const result = checkDefinitionOfDone({
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

  test("rejects done work without acceptance criteria", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      acceptanceCriteria: [],
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "acceptanceCriteria")).toBe(true);
    expect(result.issues[0]?.message).toContain("done.acceptance_criteria.required");
  });

  test("rejects done work without Definition of Done items", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      definitionOfDone: [],
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "definitionOfDone")).toBe(true);
  });

  test("rejects done work without summary handoff requirement", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      handoffRequirements: validWorkPacket.handoffRequirements.filter(
        (requirement) => requirement !== "summarize_changes",
      ),
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "handoffRequirements")).toBe(true);
    expect(result.issues[0]?.message).toContain("done.handoff.summary.required");
  });

  test("rejects done work without unverified items handoff requirement", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      handoffRequirements: validWorkPacket.handoffRequirements.filter(
        (requirement) => requirement !== "list_unverified_items",
      ),
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "handoffRequirements")).toBe(true);
    expect(result.issues[0]?.message).toContain("done.handoff.unverified_items.required");
  });

  test("rejects done work without human review handoff requirement", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      handoffRequirements: validWorkPacket.handoffRequirements.filter(
        (requirement) => requirement !== "state_human_review_required",
      ),
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "handoffRequirements")).toBe(true);
    expect(result.issues[0]?.message).toContain("done.handoff.human_review.required");
  });

  test("rejects high-risk done work without risk statements", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      riskClass: "high",
      risks: [],
    });

    expect(result.valid).toBe(false);
    expect(result.issues.some((issue) => issue.field === "risks")).toBe(true);
  });

  test("allows low-risk done work without risk statements", () => {
    const result = checkDefinitionOfDone({
      ...validWorkPacket,
      riskClass: "low",
      risks: [],
    });

    expect(result.valid).toBe(true);
  });

  test("evaluates done rules directly for valid packets", () => {
    const issues = evaluateWorkPacketDoneRules({
      ...validWorkPacket,
      status: "ready",
      acceptanceCriteria: [],
    });

    expect(issues.map((issue) => issue.field)).toEqual(["status", "acceptanceCriteria"]);
  });
});
