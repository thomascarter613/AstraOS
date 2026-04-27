import { parseWorkPacket } from "./schema";
import type { ValidationIssue, ValidationResult, WorkPacket } from "./types";

export interface WorkPacketReadinessRule {
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
  rule: Pick<WorkPacketReadinessRule, "id" | "field" | "severity">,
  message: string,
): ValidationIssue {
  return {
    field: rule.field,
    message: `${rule.id}: ${message}`,
    severity: rule.severity,
  };
}

export const WORK_PACKET_READINESS_RULES: readonly WorkPacketReadinessRule[] = [
  {
    id: "ready.source_artifacts.required",
    description: "A ready Work Packet must reference at least one source artifact.",
    field: "sourceArtifacts",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.sourceArtifacts)
        ? undefined
        : createIssue(this, "At least one source artifact is required.");
    },
  },
  {
    id: "ready.acceptance_criteria.required",
    description: "A ready Work Packet must define acceptance criteria.",
    field: "acceptanceCriteria",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.acceptanceCriteria)
        ? undefined
        : createIssue(this, "At least one acceptance criterion is required.");
    },
  },
  {
    id: "ready.definition_of_ready.required",
    description: "A ready Work Packet must define readiness criteria.",
    field: "definitionOfReady",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.definitionOfReady)
        ? undefined
        : createIssue(this, "At least one Definition of Ready item is required.");
    },
  },
  {
    id: "ready.definition_of_done.required",
    description: "A ready Work Packet must define done criteria.",
    field: "definitionOfDone",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.definitionOfDone)
        ? undefined
        : createIssue(this, "At least one Definition of Done item is required.");
    },
  },
  {
    id: "ready.constraints.required",
    description: "A ready Work Packet must define constraints.",
    field: "constraints",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.constraints)
        ? undefined
        : createIssue(this, "At least one constraint is required.");
    },
  },
  {
    id: "ready.forbidden_actions.required",
    description: "A ready Work Packet must define forbidden actions.",
    field: "forbiddenActions",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.forbiddenActions)
        ? undefined
        : createIssue(this, "At least one forbidden action is required.");
    },
  },
  {
    id: "ready.verification.commands.required",
    description: "A ready Work Packet must define verification commands.",
    field: "verificationPlan.commands",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.verificationPlan.commands)
        ? undefined
        : createIssue(this, "At least one verification command is required.");
    },
  },
  {
    id: "ready.verification.evidence.required",
    description: "A ready Work Packet must define required verification evidence.",
    field: "verificationPlan.requiredEvidence",
    severity: "error",
    evaluate(packet) {
      return hasItems(packet.verificationPlan.requiredEvidence)
        ? undefined
        : createIssue(this, "At least one required evidence item is required.");
    },
  },
  {
    id: "ready.handoff.human_review.required",
    description: "A ready Work Packet must require human review to be stated in handoff.",
    field: "handoffRequirements",
    severity: "error",
    evaluate(packet) {
      return packet.handoffRequirements.includes("state_human_review_required")
        ? undefined
        : createIssue(this, "Handoff must require human review to be stated.");
    },
  },
  {
    id: "ready.high_risk.risks.required",
    description: "High and critical risk Work Packets must include explicit risk statements.",
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

export function evaluateWorkPacketReadinessRules(packet: WorkPacket): ValidationIssue[] {
  return WORK_PACKET_READINESS_RULES.flatMap((rule) => {
    const issue = rule.evaluate(packet);
    return issue ? [issue] : [];
  });
}

export function checkDefinitionOfReady(packet: unknown): ValidationResult {
  const parsed = parseWorkPacket(packet);

  if (!parsed.valid || !parsed.value) {
    return {
      valid: false,
      issues: parsed.issues,
    };
  }

  const issues = evaluateWorkPacketReadinessRules(parsed.value);

  return {
    valid: issues.every((issue) => issue.severity !== "error"),
    issues,
  };
}
