import type { ValidationIssue, WorkPacket, WorkPacketStatus } from "./types";

export interface WorkPacketTransition {
  fromStatus: WorkPacketStatus;
  toStatus: WorkPacketStatus;
  reason: string;
  actor?: string;
  timestamp: string;
}

export interface WorkPacketTransitionRequest {
  packet: WorkPacket;
  toStatus: WorkPacketStatus;
  reason: string;
  actor?: string;
  timestamp?: string;
}

export interface WorkPacketTransitionResult {
  allowed: boolean;
  issues: ValidationIssue[];
  transition?: WorkPacketTransition;
  packet?: WorkPacket;
}

export const WORK_PACKET_TRANSITION_MATRIX: Readonly<
  Record<WorkPacketStatus, readonly WorkPacketStatus[]>
> = {
  draft: ["not_ready", "ready", "rejected", "superseded"],
  not_ready: ["draft", "ready", "blocked", "rejected", "superseded"],
  ready: ["in_progress", "blocked", "rejected", "superseded"],
  in_progress: ["blocked", "in_review", "rejected", "superseded"],
  blocked: ["ready", "in_progress", "rejected", "superseded"],
  in_review: ["in_progress", "blocked", "verified", "rejected", "superseded"],
  verified: ["in_review", "done", "superseded"],
  done: ["released", "superseded"],
  released: ["superseded"],
  superseded: [],
  rejected: ["superseded"],
};

export function listAllowedWorkPacketTransitions(
  status: WorkPacketStatus,
): readonly WorkPacketStatus[] {
  return WORK_PACKET_TRANSITION_MATRIX[status];
}

export function isWorkPacketTransitionAllowed(
  fromStatus: WorkPacketStatus,
  toStatus: WorkPacketStatus,
): boolean {
  return WORK_PACKET_TRANSITION_MATRIX[fromStatus].includes(toStatus);
}

export function checkWorkPacketTransition(
  packet: WorkPacket,
  toStatus: WorkPacketStatus,
  reason: string,
): WorkPacketTransitionResult {
  const issues: ValidationIssue[] = [];
  const trimmedReason = reason.trim();

  if (packet.status === toStatus) {
    issues.push({
      field: "toStatus",
      message: `Work Packet is already in status '${toStatus}'.`,
      severity: "error",
    });
  }

  if (trimmedReason.length === 0) {
    issues.push({
      field: "reason",
      message: "A lifecycle transition requires a non-empty reason.",
      severity: "error",
    });
  }

  if (!isWorkPacketTransitionAllowed(packet.status, toStatus)) {
    issues.push({
      field: "toStatus",
      message: `Transition '${packet.status}' → '${toStatus}' is not allowed.`,
      severity: "error",
    });
  }

  return {
    allowed: issues.every((issue) => issue.severity !== "error"),
    issues,
  };
}

export function transitionWorkPacket(
  request: WorkPacketTransitionRequest,
): WorkPacketTransitionResult {
  const check = checkWorkPacketTransition(request.packet, request.toStatus, request.reason);

  if (!check.allowed) {
    return check;
  }

  const timestamp = request.timestamp ?? new Date().toISOString();
  const reason = request.reason.trim();

  const transition: WorkPacketTransition = {
    fromStatus: request.packet.status,
    toStatus: request.toStatus,
    reason,
    timestamp,
    ...(request.actor ? { actor: request.actor } : {}),
  };

  const packet: WorkPacket = {
    ...request.packet,
    status: request.toStatus,
    metadata: {
      ...request.packet.metadata,
      updatedAt: timestamp,
    },
  };

  return {
    allowed: true,
    issues: [],
    transition,
    packet,
  };
}
