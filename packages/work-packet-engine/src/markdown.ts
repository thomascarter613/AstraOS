import type { ScrumContext, VerificationPlan, WorkPacket, WorkPacketMetadata } from "./types";

export interface WorkPacketMarkdownOptions {
  includeMetadata?: boolean;
}

function renderList(items: readonly string[]): string {
  if (items.length === 0) {
    return "- None recorded.";
  }

  return items.map((item) => `- ${item}`).join("\n");
}

function renderOptionalField(label: string, value: string | undefined): string | undefined {
  if (value === undefined || value.trim().length === 0) {
    return undefined;
  }

  return `- ${label}: ${value}`;
}

function renderScrumContext(context: ScrumContext): string {
  const lines = [
    renderOptionalField("Product Goal", context.productGoal),
    renderOptionalField("Sprint Goal", context.sprintGoal),
    renderOptionalField("Sprint", context.sprint),
    renderOptionalField("Backlog Item ID", context.backlogItemId),
  ].filter((line): line is string => line !== undefined);

  return lines.length > 0 ? lines.join("\n") : "- None recorded.";
}

function renderVerificationPlan(plan: VerificationPlan): string {
  return [
    `Status: ${plan.status}`,
    "",
    "### Commands",
    "",
    renderList(plan.commands),
    "",
    "### Required Evidence",
    "",
    renderList(plan.requiredEvidence),
  ].join("\n");
}

function renderMetadata(metadata: WorkPacketMetadata): string {
  const lines = [
    renderOptionalField("Owner", metadata.owner),
    renderOptionalField("Source", metadata.source),
    renderOptionalField("Created At", metadata.createdAt),
    renderOptionalField("Updated At", metadata.updatedAt),
  ].filter((line): line is string => line !== undefined);

  const relatedArtifacts = metadata.relatedArtifacts ?? [];

  return [
    ...(lines.length > 0 ? lines : ["- None recorded."]),
    "",
    "### Related Artifacts",
    "",
    renderList(relatedArtifacts),
  ].join("\n");
}

export function renderWorkPacketMarkdown(
  packet: WorkPacket,
  options: WorkPacketMarkdownOptions = {},
): string {
  const includeMetadata = options.includeMetadata ?? true;

  const sections = [
    `# ${packet.id} — ${packet.title}`,
    "",
    "## Summary",
    "",
    `- Schema Version: ${packet.schemaVersion}`,
    `- Status: ${packet.status}`,
    `- SDLC Phase: ${packet.sdlcPhase}`,
    `- Role Mode: ${packet.roleMode}`,
    `- Risk Class: ${packet.riskClass}`,
    "",
    "## Scrum Context",
    "",
    renderScrumContext(packet.scrumContext),
    "",
    "## Objective",
    "",
    packet.objective,
    "",
    "## Source Artifacts",
    "",
    renderList(packet.sourceArtifacts),
    "",
    "## Constraints",
    "",
    renderList(packet.constraints),
    "",
    "## Assumptions",
    "",
    renderList(packet.assumptions),
    "",
    "## Risks",
    "",
    renderList(packet.risks),
    "",
    "## Acceptance Criteria",
    "",
    renderList(packet.acceptanceCriteria),
    "",
    "## Definition of Ready",
    "",
    renderList(packet.definitionOfReady),
    "",
    "## Definition of Done",
    "",
    renderList(packet.definitionOfDone),
    "",
    "## Allowed Actions",
    "",
    renderList(packet.allowedActions),
    "",
    "## Forbidden Actions",
    "",
    renderList(packet.forbiddenActions),
    "",
    "## Verification Plan",
    "",
    renderVerificationPlan(packet.verificationPlan),
    "",
    "## Handoff Requirements",
    "",
    renderList(packet.handoffRequirements),
  ];

  if (includeMetadata) {
    sections.push("", "## Metadata", "", renderMetadata(packet.metadata));
  }

  return `${sections.join("\n")}\n`;
}
