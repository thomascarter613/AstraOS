import { parseWorkPacket } from "./schema";
import type { ValidationIssue, ValidationResult, WorkPacket } from "./types";

export interface WorkPacketDoneRule {
  id: string;
  description: string;
  field: string;
  severity: ValidationIssue["severity"];
  evaluate: (packet: WorkPacket) => ValidationIssue | undefined;
}

function hasItems(values: readonly string[]): boolean {
  return values.length > 0;
}

function createIssue(
  rule: Pick<WorkPacketDoneRule, "id" | "field" | "severity">,
  message: string,
): ValidationIssue {
  return {
    field: rule.field,
    message: `${rule.id}: ${message}`,
    severity: rule.severity,
  };
}

export const WORK_PACKET_DONE_RULES: readonly WorkPacketDoneRule[] = [
  {
    id: "done.status.terminal_required",
    description: "Done Work Packets must be verified, done, or released.",
    field: "status",
    severity: "error",
    evaluate(packet) {
      return ["verified", "done", "released"].includes(packet.status)
        ? undefined
        : createIssue(this, "Work Packet status must be verified, done, or released.");
    },
  },
  {
    id: "done.verification.passed_required",
    description: "Done Work Packets must have passed verification.",
    field: "verificationPlan.status",
    severity: "error",
    evaluate(packet) {
      return packet.verificationPlan.status === "passed"
        ? undefined
        : createIssue(this, "Verification status must be passed.");
    },
  },
  {
    id: "done.verification.commands.required",
    description: "Done Work Packets must include verification commands.",
    field: "verificationPlan.commands",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.verificationPlan.commands)
        ? undefined
        : createIssue(this, "At least one verification command is required.");
    },
  },
  {
    id: "done.verification.evidence.required",
    description: "Done Work Packets must include required verification evidence.",
    field: "verificationPlan.requiredEvidence",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.verificationPlan.requiredEvidence)
        ? undefined
        : createIssue(this, "At least one required evidence item is required.");
    },
  },
  {
    id: "done.acceptance_criteria.required",
    description: "Done Work Packets must include acceptance criteria.",
    field: "acceptanceCriteria",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.acceptanceCriteria)
        ? undefined
        : createIssue(this, "At least one acceptance criterion is required.");
    },
  },
  {
    id: "done.definition_of_done.required",
    description: "Done Work Packets must include Definition of Done items.",
    field: "definitionOfDone",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.definitionOfDone)
        ? undefined
        : createIssue(this, "At least one Definition of Done item is required.");
    },
  },
  {
    id: "done.handoff.summary.required",
    description: "Done Work Packets must require a change summary handoff.",
    field: "handoffRequirements",
    severity: "error",
    evaluate(packet) {
      return packet.handoffRequirements.includes("summarize_changes")
        ? undefined
        : createIssue(this, "Handoff must require a change summary.");
    },
  },
  {
    id: "done.handoff.unverified_items.required",
    description: "Done Work Packets must require unverified items to be listed.",
    field: "handoffRequirements",
    severity: "error",
    evaluate(packet) {
      return packet.handoffRequirements.includes("list_unverified_items")
        ? undefined
        : createIssue(this, "Handoff must require unverified items to be listed.");
    },
  },
  {
    id: "done.handoff.human_review.required",
    description: "Done Work Packets must require human review to be stated.",
    field: "handoffRequirements",
    severity: "error",
    evaluate(packet) {
      return packet.handoffRequirements.includes("state_human_review_required")
        ? undefined
        : createIssue(this, "Handoff must require human review to be stated.");
    },
  },
  {
    id: "done.high_risk.risks.required",
    description: "High and critical risk Done Work Packets must include explicit risk statements.",
    field: "risks",
    severity: "error",
    evaluate(packet) {
      const requiresRiskDisclosure = packet.riskClass === "high" || packet.riskClass === "critical";

      return requiresRiskDisclosure && !hasItems(packet.risks)
        ? createIssue(this, "High and critical risk Work Packets require at least one risk.")
        : undefined;
    },
  },
];

export function evaluateWorkPacketDoneRules(packet: WorkPacket): ValidationIssue[] {
  return WORK_PACKET_DONE_RULES.flatMap((rule) => {
    const issue = rule.evaluate(packet);
    return issue ? [issue] : [];
  });
}

export function checkDefinitionOfDone(packet: unknown): ValidationResult {
  const parsed = parseWorkPacket(packet);

  if (!parsed.valid || !parsed.value) {
    return {
      valid: false,
      issues: parsed.issues,
    };
  }

  const issues = evaluateWorkPacketDoneRules(parsed.value);

  return {
    valid: issues.every((issue) => issue.severity !== "error"),
    issues,
  };
}
