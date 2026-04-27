import { describe, expect, test } from "bun:test";
import { validWorkPacket } from "../fixtures";
import { renderWorkPacketMarkdown } from "../markdown";

describe("Work Packet Markdown rendering", () => {
  test("renders a Work Packet as Markdown", () => {
    const markdown = renderWorkPacketMarkdown(validWorkPacket);

    expect(markdown).toContain("# AUTH-014 — Implement password reset");
    expect(markdown).toContain("## Summary");
    expect(markdown).toContain("- Schema Version: 0.1.0");
    expect(markdown).toContain("- Status: verified");
    expect(markdown).toContain("- SDLC Phase: implementation");
    expect(markdown).toContain("- Role Mode: pair_engineer");
    expect(markdown).toContain("- Risk Class: high");
  });

  test("renders objective and acceptance criteria", () => {
    const markdown = renderWorkPacketMarkdown(validWorkPacket);

    expect(markdown).toContain("## Objective");
    expect(markdown).toContain("Implement a secure password reset flow.");
    expect(markdown).toContain("## Acceptance Criteria");
    expect(markdown).toContain("- User can request a password reset.");
    expect(markdown).toContain("- Token is single-use.");
  });

  test("renders verification plan", () => {
    const markdown = renderWorkPacketMarkdown(validWorkPacket);

    expect(markdown).toContain("## Verification Plan");
    expect(markdown).toContain("Status: passed");
    expect(markdown).toContain("### Commands");
    expect(markdown).toContain("- bun run typecheck");
    expect(markdown).toContain("- bun run test");
    expect(markdown).toContain("### Required Evidence");
  });

  test("renders metadata by default", () => {
    const markdown = renderWorkPacketMarkdown(validWorkPacket);

    expect(markdown).toContain("## Metadata");
    expect(markdown).toContain("- Owner: human_engineer");
    expect(markdown).toContain("- Source: fixture");
    expect(markdown).toContain("### Related Artifacts");
    expect(markdown).toContain("- AUTH-014");
  });

  test("can omit metadata", () => {
    const markdown = renderWorkPacketMarkdown(validWorkPacket, {
      includeMetadata: false,
    });

    expect(markdown).not.toContain("## Metadata");
    expect(markdown).not.toContain("### Related Artifacts");
  });

  test("renders empty lists as none recorded", () => {
    const markdown = renderWorkPacketMarkdown({
      ...validWorkPacket,
      assumptions: [],
    });

    expect(markdown).toContain("## Assumptions\n\n- None recorded.");
  });

  test("renders deterministically", () => {
    const first = renderWorkPacketMarkdown(validWorkPacket);
    const second = renderWorkPacketMarkdown(validWorkPacket);

    expect(first).toBe(second);
  });
});
