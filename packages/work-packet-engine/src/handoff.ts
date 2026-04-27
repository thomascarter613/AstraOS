import type { WorkPacket } from "./types";

export function generateHandoffSummary(packet: WorkPacket): string {
  return [
    `# Work Packet Handoff: ${packet.id} — ${packet.title}`,
    "",
    `Status: ${packet.status}`,
    `SDLC Phase: ${packet.sdlcPhase}`,
    `Role Mode: ${packet.roleMode}`,
    `Risk Class: ${packet.riskClass}`,
    "",
    "## Objective",
    packet.objective,
    "",
    "## Acceptance Criteria",
    ...packet.acceptanceCriteria.map((item) => `- ${item}`),
    "",
    "## Risks",
    ...(packet.risks.length > 0 ? packet.risks.map((item) => `- ${item}`) : ["- None recorded."]),
    "",
    "## Verification",
    `Status: ${packet.verificationPlan.status}`,
    ...packet.verificationPlan.commands.map((command) => `- ${command}`),
    "",
    "## Human Review Required",
    "- Review all generated changes before merge.",
    "- Confirm all unverified assumptions before release.",
  ].join("\n");
}
