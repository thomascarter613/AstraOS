export const WORK_PACKET_SCHEMA_VERSION = "0.1.0";

export const WORK_PACKET_STATUSES = [
  "draft",
  "not_ready",
  "ready",
  "in_progress",
  "blocked",
  "in_review",
  "verified",
  "done",
  "released",
  "superseded",
  "rejected",
] as const;

export const SDLC_PHASES = [
  "discovery",
  "requirements",
  "architecture_and_design",
  "implementation",
  "testing_and_verification",
  "review",
  "release",
  "operations",
  "continuous_improvement",
] as const;

export const ROLE_MODES = [
  "product_analyst",
  "scrum_facilitator",
  "technical_architect",
  "pair_engineer",
  "reviewer",
  "release_engineer",
  "operations_analyst",
] as const;

export const RISK_CLASSES = ["low", "medium", "high", "critical"] as const;

export const VERIFICATION_STATUSES = [
  "not_started",
  "planned",
  "running",
  "passed",
  "failed",
  "skipped",
  "blocked",
  "partially_verified",
] as const;
