import type {
  RISK_CLASSES,
  ROLE_MODES,
  SDLC_PHASES,
  VERIFICATION_STATUSES,
  WORK_PACKET_STATUSES,
} from "./constants";

export type WorkPacketSchemaVersion = "0.1.0";
export type WorkPacketStatus = (typeof WORK_PACKET_STATUSES)[number];
export type SdlcPhase = (typeof SDLC_PHASES)[number];
export type RoleMode = (typeof ROLE_MODES)[number];
export type RiskClass = (typeof RISK_CLASSES)[number];
export type VerificationStatus = (typeof VERIFICATION_STATUSES)[number];

export type ValidationSeverity = "error" | "warning";

export interface ValidationIssue {
  field: string;
  message: string;
  severity: ValidationSeverity;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

export interface ParsedWorkPacketResult extends ValidationResult {
  value?: WorkPacket;
}

export interface ScrumContext {
  productGoal?: string;
  sprintGoal?: string;
  sprint?: string;
  backlogItemId?: string;
}

export interface VerificationPlan {
  commands: string[];
  requiredEvidence: string[];
  status: VerificationStatus;
}

export interface WorkPacketMetadata {
  owner?: string;
  source?: string;
  createdAt?: string;
  updatedAt?: string;
  relatedArtifacts?: string[];
}

export interface WorkPacket {
  schemaVersion: WorkPacketSchemaVersion;
  id: string;
  title: string;
  status: WorkPacketStatus;
  sdlcPhase: SdlcPhase;
  roleMode: RoleMode;
  scrumContext: ScrumContext;
  sourceArtifacts: string[];
  objective: string;
  constraints: string[];
  assumptions: string[];
  risks: string[];
  riskClass: RiskClass;
  acceptanceCriteria: string[];
  definitionOfReady: string[];
  definitionOfDone: string[];
  allowedActions: string[];
  forbiddenActions: string[];
  verificationPlan: VerificationPlan;
  handoffRequirements: string[];
  metadata: WorkPacketMetadata;
}
