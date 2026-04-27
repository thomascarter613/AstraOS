import type { WorkPacket } from "./types";
import type { ValidationIssue, ValidationResult } from "./validation";
import { validateWorkPacket } from "./validation";

export function checkDefinitionOfReady(packet: WorkPacket): ValidationResult {
  const base = validateWorkPacket(packet);
  const issues: ValidationIssue[] = [...base.issues];

  if (packet.acceptanceCriteria.length === 0) {
    issues.push({
      field: "acceptanceCriteria",
      message: "A ready Work Packet must have acceptance criteria.",
      severity: "error",
    });
  }

  if (packet.definitionOfReady.length === 0) {
    issues.push({
      field: "definitionOfReady",
      message: "A ready Work Packet must define readiness criteria.",
      severity: "error",
    });
  }

  if (packet.forbiddenActions.length === 0) {
    issues.push({
      field: "forbiddenActions",
      message: "A ready Work Packet must define forbidden actions.",
      severity: "error",
    });
  }

  return {
    valid: issues.every((issue) => issue.severity !== "error"),
    issues,
  };
}
