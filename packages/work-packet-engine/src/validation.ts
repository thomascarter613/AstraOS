import type { WorkPacket } from "./types";

export interface ValidationIssue {
  field: string;
  message: string;
  severity: "error" | "warning";
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

const requiredStringFields: Array<keyof WorkPacket> = [
  "id",
  "title",
  "status",
  "sdlcPhase",
  "roleMode",
  "objective",
  "riskClass",
];

const requiredArrayFields: Array<keyof WorkPacket> = [
  "sourceArtifacts",
  "constraints",
  "acceptanceCriteria",
  "definitionOfReady",
  "definitionOfDone",
  "allowedActions",
  "forbiddenActions",
  "handoffRequirements",
];

export function validateWorkPacket(packet: WorkPacket): ValidationResult {
  const issues: ValidationIssue[] = [];

  for (const field of requiredStringFields) {
    const value = packet[field];

    if (typeof value !== "string" || value.trim().length === 0) {
      issues.push({
        field,
        message: "Required string field is missing or empty.",
        severity: "error",
      });
    }
  }

  for (const field of requiredArrayFields) {
    const value = packet[field];

    if (!Array.isArray(value) || value.length === 0) {
      issues.push({
        field,
        message: "Required array field is missing or empty.",
        severity: "error",
      });
    }
  }

  if (!packet.verificationPlan || packet.verificationPlan.commands.length === 0) {
    issues.push({
      field: "verificationPlan.commands",
      message: "At least one verification command should be defined.",
      severity: "warning",
    });
  }

  return {
    valid: issues.every((issue) => issue.severity !== "error"),
    issues,
  };
}
