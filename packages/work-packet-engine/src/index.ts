export {
  RISK_CLASSES,
  ROLE_MODES,
  SDLC_PHASES,
  VERIFICATION_STATUSES,
  WORK_PACKET_SCHEMA_VERSION,
  WORK_PACKET_STATUSES,
} from "./constants";
export type { WorkPacketDiffEntry, WorkPacketDiffKind, WorkPacketDiffResult } from "./diff";
export { diffWorkPackets } from "./diff";
export type { WorkPacketDoneRule } from "./done";
export {
  checkDefinitionOfDone,
  evaluateWorkPacketDoneRules,
  WORK_PACKET_DONE_RULES,
} from "./done";

export { invalidWorkPacket, validWorkPacket } from "./fixtures";

export { generateHandoffSummary } from "./handoff";
export type { WorkPacketFileFormat, WorkPacketReadResult, WorkPacketWriteOptions } from "./io";
export {
  parseWorkPacketContent,
  readWorkPacketFile,
  serializeWorkPacket,
  writeWorkPacketFile,
} from "./io";
export type {
  WorkPacketTransition,
  WorkPacketTransitionRequest,
  WorkPacketTransitionResult,
} from "./lifecycle";
export {
  checkWorkPacketTransition,
  isWorkPacketTransitionAllowed,
  listAllowedWorkPacketTransitions,
  transitionWorkPacket,
  WORK_PACKET_TRANSITION_MATRIX,
} from "./lifecycle";
export type { WorkPacketMarkdownOptions } from "./markdown";
export { renderWorkPacketMarkdown } from "./markdown";
export type { WorkPacketNormalizationOptions } from "./normalization";
export { normalizeStringArray, normalizeWorkPacket } from "./normalization";
export type { WorkPacketReadinessRule } from "./readiness";
export {
  checkDefinitionOfReady,
  evaluateWorkPacketReadinessRules,
  WORK_PACKET_READINESS_RULES,
} from "./readiness";

export { parseWorkPacket, WORK_PACKET_SCHEMA } from "./schema";

export type {
  ParsedWorkPacketResult,
  RiskClass,
  RoleMode,
  ScrumContext,
  SdlcPhase,
  ValidationIssue,
  ValidationResult,
  VerificationPlan,
  VerificationStatus,
  WorkPacket,
  WorkPacketMetadata,
  WorkPacketSchemaVersion,
  WorkPacketStatus,
} from "./types";

export { validateWorkPacket } from "./validation";
