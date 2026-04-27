import { describe, expect, test } from "bun:test";
import { validWorkPacket } from "../fixtures";
import {
  checkWorkPacketTransition,
  isWorkPacketTransitionAllowed,
  listAllowedWorkPacketTransitions,
  transitionWorkPacket,
} from "../lifecycle";

describe("Work Packet lifecycle transitions", () => {
  test("lists allowed transitions for ready packets", () => {
    expect(listAllowedWorkPacketTransitions("ready")).toEqual([
      "in_progress",
      "blocked",
      "rejected",
      "superseded",
    ]);
  });

  test("allows ready to in_progress", () => {
    expect(isWorkPacketTransitionAllowed("ready", "in_progress")).toBe(true);
  });

  test("forbids draft to done", () => {
    expect(isWorkPacketTransitionAllowed("draft", "done")).toBe(false);
  });

  test("forbids in_progress to released", () => {
    expect(isWorkPacketTransitionAllowed("in_progress", "released")).toBe(false);
  });

  test("requires a non-empty transition reason", () => {
    const result = checkWorkPacketTransition(
      {
        ...validWorkPacket,
        status: "ready",
      },
      "in_progress",
      "   ",
    );

    expect(result.allowed).toBe(false);
    expect(result.issues.some((issue) => issue.field === "reason")).toBe(true);
  });

  test("rejects transition to the same status", () => {
    const result = checkWorkPacketTransition(
      {
        ...validWorkPacket,
        status: "ready",
      },
      "ready",
      "No actual transition.",
    );

    expect(result.allowed).toBe(false);
    expect(result.issues.some((issue) => issue.field === "toStatus")).toBe(true);
  });

  test("transitions a packet when the transition is allowed", () => {
    const result = transitionWorkPacket({
      packet: {
        ...validWorkPacket,
        status: "ready",
      },
      toStatus: "in_progress",
      reason: "Begin implementation work.",
      actor: "human_engineer",
      timestamp: "2026-04-27T12:00:00.000Z",
    });

    expect(result.allowed).toBe(true);
    expect(result.packet?.status).toBe("in_progress");
    expect(result.packet?.metadata.updatedAt).toBe("2026-04-27T12:00:00.000Z");
    expect(result.transition?.fromStatus).toBe("ready");
    expect(result.transition?.toStatus).toBe("in_progress");
    expect(result.transition?.reason).toBe("Begin implementation work.");
    expect(result.transition?.actor).toBe("human_engineer");
  });

  test("does not transition a packet when the transition is forbidden", () => {
    const result = transitionWorkPacket({
      packet: {
        ...validWorkPacket,
        status: "draft",
      },
      toStatus: "done",
      reason: "Attempt to skip verification.",
      actor: "human_engineer",
      timestamp: "2026-04-27T12:00:00.000Z",
    });

    expect(result.allowed).toBe(false);
    expect(result.packet).toBeUndefined();
    expect(result.transition).toBeUndefined();
    expect(result.issues.some((issue) => issue.field === "toStatus")).toBe(true);
  });

  test("only allows released packets to become superseded", () => {
    expect(listAllowedWorkPacketTransitions("released")).toEqual(["superseded"]);
  });

  test("treats superseded as a terminal state", () => {
    expect(listAllowedWorkPacketTransitions("superseded")).toEqual([]);
  });
});
