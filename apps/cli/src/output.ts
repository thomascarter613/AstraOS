import type { ValidationIssue, WorkPacketReadResult } from "@astra/work-packet-engine";

export const ASTRA_CLI_VERSION = "0.1.0";

export function renderCliHelp(): string {
  return [
    "Astra SDLC Framework CLI",
    "",
    "Usage:",
    "  astra [command]",
    "",
    "Commands:",
    "  help                              Show this help message.",
    "  version                           Show the Astra CLI version.",
    "  work-packet validate <file>        Validate a Work Packet file.",
    "",
    "Options:",
    "  --help                            Show this help message.",
    "  --version                         Show the Astra CLI version.",
    "",
  ].join("\n");
}

export function renderCliVersion(version = ASTRA_CLI_VERSION): string {
  return `astra ${version}\n`;
}

export function renderUnknownCommand(command: string): string {
  return [`Unknown command: ${command}`, "", "Run `astra --help` for usage information.", ""].join(
    "\n",
  );
}

export function renderUnknownWorkPacketCommand(command: string | undefined): string {
  if (command === undefined) {
    return [
      "Missing work-packet command.",
      "",
      "Usage:",
      "  astra work-packet validate <file>",
      "",
    ].join("\n");
  }

  return [
    `Unknown work-packet command: ${command}`,
    "",
    "Usage:",
    "  astra work-packet validate <file>",
    "",
  ].join("\n");
}

export function renderMissingWorkPacketFile(): string {
  return [
    "Missing Work Packet file path.",
    "",
    "Usage:",
    "  astra work-packet validate <file>",
    "",
  ].join("\n");
}

export function renderRuntimeError(error: unknown): string {
  const message = error instanceof Error ? error.message : "Unknown runtime error.";

  return [`Runtime error: ${message}`, ""].join("\n");
}

function renderValidationIssue(issue: ValidationIssue): string {
  return `- [${issue.severity}] ${issue.field}: ${issue.message}`;
}

export function renderValidWorkPacket(result: WorkPacketReadResult): string {
  const packet = result.value;

  if (!packet) {
    return [
      "Work Packet is valid.",
      "",
      `File: ${result.path}`,
      `Format: ${result.format}`,
      "",
    ].join("\n");
  }

  return [
    "Work Packet is valid.",
    "",
    `File: ${result.path}`,
    `Format: ${result.format}`,
    `ID: ${packet.id}`,
    `Title: ${packet.title}`,
    `Status: ${packet.status}`,
    `SDLC Phase: ${packet.sdlcPhase}`,
    `Role Mode: ${packet.roleMode}`,
    `Risk Class: ${packet.riskClass}`,
    "",
  ].join("\n");
}

export function renderInvalidWorkPacket(result: WorkPacketReadResult): string {
  return [
    "Work Packet is invalid.",
    "",
    `File: ${result.path}`,
    `Format: ${result.format}`,
    "",
    "Issues:",
    ...result.issues.map(renderValidationIssue),
    "",
  ].join("\n");
}
