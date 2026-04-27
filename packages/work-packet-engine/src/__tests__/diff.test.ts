import { describe, expect, test } from "bun:test";
import { validWorkPacket } from "../fixtures";
import { diffWorkPackets } from "../diff";

describe("Work Packet diffing", () => {
  test("returns unchanged result for identical packets", () => {
    const result = diffWorkPackets(validWorkPacket, validWorkPacket);

    expect(result.changed).toBe(false);
    expect(result.entries).toEqual([]);
  });

  test("detects changed scalar fields", () => {
    const result = diffWorkPackets(validWorkPacket, {
      ...validWorkPacket,
      status: "in_progress",
    });

    expect(result.changed).toBe(true);
    expect(result.entries).toEqual([
      {
        kind: "changed",
        path: "status",
        before: "verified",
        after: "in_progress",
      },
    ]);
  });

  test("detects changed nested fields", () => {
    const result = diffWorkPackets(validWorkPacket, {
      ...validWorkPacket,
      verificationPlan: {
        ...validWorkPacket.verificationPlan,
        status: "failed",
      },
    });

    expect(result.entries).toEqual([
      {
        kind: "changed",
        path: "verificationPlan.status",
        before: "passed",
        after: "failed",
      },
    ]);
  });

  test("detects changed arrays", () => {
    const result = diffWorkPackets(validWorkPacket, {
      ...validWorkPacket,
      acceptanceCriteria: [...validWorkPacket.acceptanceCriteria, "New criterion added."],
    });

    expect(result.changed).toBe(true);
    expect(result.entries).toEqual([
      {
        kind: "changed",
        path: "acceptanceCriteria",
        before: validWorkPacket.acceptanceCriteria,
        after: [...validWorkPacket.acceptanceCriteria, "New criterion added."],
      },
    ]);
  });

  test("detects added optional nested fields", () => {
    const before = {
      ...validWorkPacket,
      metadata: {
        ...validWorkPacket.metadata,
      },
    };

    delete before.metadata.source;

    const result = diffWorkPackets(before, validWorkPacket);

    expect(result.entries).toEqual([
      {
        kind: "added",
        path: "metadata.source",
        after: validWorkPacket.metadata.source,
      },
    ]);
  });

  test("detects removed optional nested fields", () => {
    const after = {
      ...validWorkPacket,
      metadata: {
        ...validWorkPacket.metadata,
      },
    };

    delete after.metadata.source;

    const result = diffWorkPackets(validWorkPacket, after);

    expect(result.entries).toEqual([
      {
        kind: "removed",
        path: "metadata.source",
        before: validWorkPacket.metadata.source,
      },
    ]);
  });

  test("orders object-key diffs deterministically", () => {
    const result = diffWorkPackets(validWorkPacket, {
      ...validWorkPacket,
      title: "Changed title",
      id: "WP-CHANGED",
    });

    expect(result.entries.map((entry) => entry.path)).toEqual(["id", "title"]);
  });
});
```

Potential TypeScript note: the `delete before.metadata.source` line may complain depending on exact optional property settings. If it does, replace that test object setup with explicit object construction:

```ts
const before = {
  ...validWorkPacket,
  metadata: {
    owner: validWorkPacket.metadata.owner,
    createdAt: validWorkPacket.metadata.createdAt,
    updatedAt: validWorkPacket.metadata.updatedAt,
    relatedArtifacts: validWorkPacket.metadata.relatedArtifacts,
  },
};