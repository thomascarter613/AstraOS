import type { ScrumContext, WorkPacket, WorkPacketMetadata } from "./types";

export interface WorkPacketNormalizationOptions {
  updatedAt?: string;
}

function trimString(value: string): string {
  return value.trim();
}

export function normalizeStringArray(values: readonly string[]): string[] {
  const normalized: string[] = [];
  const seen = new Set<string>();

  for (const value of values) {
    const trimmed = trimString(value);

    if (trimmed.length === 0 || seen.has(trimmed)) {
      continue;
    }

    seen.add(trimmed);
    normalized.push(trimmed);
  }

  return normalized;
}

function normalizeOptionalString(value: string | undefined): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  const trimmed = trimString(value);

  return trimmed.length > 0 ? trimmed : undefined;
}

function normalizeScrumContext(context: ScrumContext): ScrumContext {
  const normalized: ScrumContext = {};

  const productGoal = normalizeOptionalString(context.productGoal);
  const sprintGoal = normalizeOptionalString(context.sprintGoal);
  const sprint = normalizeOptionalString(context.sprint);
  const backlogItemId = normalizeOptionalString(context.backlogItemId);

  if (productGoal !== undefined) {
    normalized.productGoal = productGoal;
  }

  if (sprintGoal !== undefined) {
    normalized.sprintGoal = sprintGoal;
  }

  if (sprint !== undefined) {
    normalized.sprint = sprint;
  }

  if (backlogItemId !== undefined) {
    normalized.backlogItemId = backlogItemId;
  }

  return normalized;
}

function normalizeMetadata(
  metadata: WorkPacketMetadata,
  options: WorkPacketNormalizationOptions,
): WorkPacketMetadata {
  const normalized: WorkPacketMetadata = {};

  const owner = normalizeOptionalString(metadata.owner);
  const source = normalizeOptionalString(metadata.source);
  const createdAt = normalizeOptionalString(metadata.createdAt);
  const updatedAt = normalizeOptionalString(options.updatedAt ?? metadata.updatedAt);

  if (owner !== undefined) {
    normalized.owner = owner;
  }

  if (source !== undefined) {
    normalized.source = source;
  }

  if (createdAt !== undefined) {
    normalized.createdAt = createdAt;
  }

  if (updatedAt !== undefined) {
    normalized.updatedAt = updatedAt;
  }

  if (metadata.relatedArtifacts !== undefined) {
    normalized.relatedArtifacts = normalizeStringArray(metadata.relatedArtifacts);
  }

  return normalized;
}

export function normalizeWorkPacket(
  packet: WorkPacket,
  options: WorkPacketNormalizationOptions = {},
): WorkPacket {
  return {
    ...packet,
    id: trimString(packet.id),
    title: trimString(packet.title),
    scrumContext: normalizeScrumContext(packet.scrumContext),
    sourceArtifacts: normalizeStringArray(packet.sourceArtifacts),
    objective: trimString(packet.objective),
    constraints: normalizeStringArray(packet.constraints),
    assumptions: normalizeStringArray(packet.assumptions),
    risks: normalizeStringArray(packet.risks),
    acceptanceCriteria: normalizeStringArray(packet.acceptanceCriteria),
    definitionOfReady: normalizeStringArray(packet.definitionOfReady),
    definitionOfDone: normalizeStringArray(packet.definitionOfDone),
    allowedActions: normalizeStringArray(packet.allowedActions),
    forbiddenActions: normalizeStringArray(packet.forbiddenActions),
    verificationPlan: {
      ...packet.verificationPlan,
      commands: normalizeStringArray(packet.verificationPlan.commands),
      requiredEvidence: normalizeStringArray(packet.verificationPlan.requiredEvidence),
    },
    handoffRequirements: normalizeStringArray(packet.handoffRequirements),
    metadata: normalizeMetadata(packet.metadata, options),
  };
}