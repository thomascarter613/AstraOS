import type { WorkPacket } from "./types";

export const validWorkPacket: WorkPacket = {
  schemaVersion: "0.1.0",
  id: "AUTH-014",
  title: "Implement password reset",
  status: "verified",
  sdlcPhase: "implementation",
  roleMode: "pair_engineer",
  scrumContext: {
    productGoal: "Improve account security and recovery",
    sprintGoal: "Complete account recovery foundation",
    sprint: "Sprint 6",
    backlogItemId: "AUTH-014",
  },
  sourceArtifacts: ["user-story-auth-014.md", "adr-0007-auth-token-policy.md"],
  objective: "Implement a secure password reset flow.",
  constraints: [
    "Do not reveal whether an email exists.",
    "Reset tokens must be single-use.",
    "Reset tokens must expire.",
  ],
  assumptions: ["Email delivery provider is configured outside this task."],
  risks: ["Incorrect token handling could create account takeover risk."],
  riskClass: "high",
  acceptanceCriteria: [
    "User can request a password reset.",
    "Token is single-use.",
    "Token expires.",
    "Audit event is recorded.",
  ],
  definitionOfReady: ["Acceptance criteria exist.", "Security constraints are known."],
  definitionOfDone: [
    "Code implemented.",
    "Unit tests added.",
    "Integration tests added.",
    "Documentation updated.",
    "Verification report produced.",
  ],
  allowedActions: ["edit_files", "run_tests", "produce_patch"],
  forbiddenActions: ["deploy_production", "modify_secrets"],
  verificationPlan: {
    commands: ["bun run typecheck", "bun run test"],
    requiredEvidence: ["typecheck result", "test result"],
    status: "passed",
  },
  handoffRequirements: [
    "summarize_changes",
    "map_acceptance_criteria",
    "list_risks",
    "list_assumptions",
    "list_unverified_items",
    "state_human_review_required",
  ],
  metadata: {
    owner: "human_engineer",
    source: "fixture",
    createdAt: "2026-04-27T00:00:00.000Z",
    updatedAt: "2026-04-27T00:00:00.000Z",
    relatedArtifacts: ["AUTH-014"],
  },
};

export const invalidWorkPacket = {
  schemaVersion: "0.1.0",
  id: "",
  title: "",
  status: "invalid_status",
};
