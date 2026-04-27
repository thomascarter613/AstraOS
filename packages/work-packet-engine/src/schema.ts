import {
  RISK_CLASSES,
  ROLE_MODES,
  SDLC_PHASES,
  VERIFICATION_STATUSES,
  WORK_PACKET_SCHEMA_VERSION,
  WORK_PACKET_STATUSES,
} from "./constants";
import type { ParsedWorkPacketResult, ValidationIssue, WorkPacket } from "./types";

export const WORK_PACKET_SCHEMA = {
  schemaVersion: WORK_PACKET_SCHEMA_VERSION,
  requiredStringFields: ["id", "title", "objective"] as const,
  requiredArrayFields: [
    "sourceArtifacts",
    "constraints",
    "acceptanceCriteria",
    "definitionOfReady",
    "definitionOfDone",
    "allowedActions",
    "forbiddenActions",
    "handoffRequirements",
  ] as const,
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isOneOf(value: unknown, allowed: readonly string[]): boolean {
  return typeof value === "string" && allowed.includes(value);
}

function actualType(value: unknown): string {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

function pushIssue(
  issues: ValidationIssue[],
  field: string,
  message: string,
  severity: ValidationIssue["severity"] = "error",
): void {
  issues.push({ field, message, severity });
}

export function parseWorkPacket(input: unknown): ParsedWorkPacketResult {
  const issues: ValidationIssue[] = [];

  if (!isRecord(input)) {
    return {
      valid: false,
      issues: [{ field: "$", message: "Work Packet must be an object.", severity: "error" }],
    };
  }

  const packet = input;

  if (packet.schemaVersion !== WORK_PACKET_SCHEMA_VERSION) {
    pushIssue(issues, "schemaVersion", `Expected schema version ${WORK_PACKET_SCHEMA_VERSION}.`);
  }

  for (const field of WORK_PACKET_SCHEMA.requiredStringFields) {
    const value = packet[field];

    if (!isNonEmptyString(value)) {
      pushIssue(issues, field, `Expected non-empty string, received ${actualType(value)}.`);
    }
  }

  for (const field of WORK_PACKET_SCHEMA.requiredArrayFields) {
    const value = packet[field];

    if (!isStringArray(value) || value.length === 0) {
      pushIssue(issues, field, `Expected non-empty string array, received ${actualType(value)}.`);
    }
  }

  const enumChecks = [
    ["status", packet.status, WORK_PACKET_STATUSES],
    ["sdlcPhase", packet.sdlcPhase, SDLC_PHASES],
    ["roleMode", packet.roleMode, ROLE_MODES],
    ["riskClass", packet.riskClass, RISK_CLASSES],
  ] as const;

  for (const [field, value, allowed] of enumChecks) {
    if (!isOneOf(value, allowed)) {
      pushIssue(issues, field, `Expected one of: ${allowed.join(", ")}.`);
    }
  }

  if (!isRecord(packet.scrumContext)) {
    pushIssue(issues, "scrumContext", "Expected Scrum context object.");
  }

  if (!isRecord(packet.verificationPlan)) {
    pushIssue(issues, "verificationPlan", "Expected verification plan object.");
  } else {
    if (!isStringArray(packet.verificationPlan.commands)) {
      pushIssue(
        issues,
        "verificationPlan.commands",
        "Expected verification commands to be a string array.",
      );
    }

    if (!isStringArray(packet.verificationPlan.requiredEvidence)) {
      pushIssue(
        issues,
        "verificationPlan.requiredEvidence",
        "Expected required evidence to be a string array.",
      );
    }

    if (!isOneOf(packet.verificationPlan.status, VERIFICATION_STATUSES)) {
      pushIssue(
        issues,
        "verificationPlan.status",
        `Expected one of: ${VERIFICATION_STATUSES.join(", ")}.`,
      );
    }
  }

  if (!isRecord(packet.metadata)) {
    pushIssue(issues, "metadata", "Expected metadata object.");
  } else if (
    packet.metadata.relatedArtifacts !== undefined &&
    !isStringArray(packet.metadata.relatedArtifacts)
  ) {
    pushIssue(
      issues,
      "metadata.relatedArtifacts",
      "Expected relatedArtifacts to be a string array when present.",
    );
  }

  const valid = issues.every((issue) => issue.severity !== "error");

  if (!valid) {
    return { valid, issues };
  }

  return {
    valid,
    issues,
    value: input as unknown as WorkPacket,
  };
}
