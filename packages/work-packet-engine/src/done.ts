import type { WorkPacket } from "./types";
import type { ValidationIssue, ValidationResult } from "./validation";

export function checkDefinitionOfDone(packet: WorkPacket): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (packet.definitionOfDone.length === 0) {
    issues.push({
      field: "definitionOfDone",
      message: "Definition of Done is empty.",
      severity: "error",
    });
  }

  if (packet.verificationPlan.status !== "passed") {
    issues.push({
      field: "verificationPlan.status",
      message: "Work cannot be considered done unless verification has passed.",
      severity: "error",
    });
  }

  if (!packet.handoffRequirements.includes("summarize_changes")) {
    issues.push({
      field: "handoffRequirements",
      message: "Done work should require a change summary handoff.",
      severity: "warning",
    });
  }

  return {
    valid: issues.every((issue) => issue.severity !== "error"),
    issues,
  };
}
