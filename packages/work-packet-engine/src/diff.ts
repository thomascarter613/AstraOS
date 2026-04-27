import type { WorkPacket } from "./types";

export type WorkPacketDiffKind = "added" | "removed" | "changed";

export interface WorkPacketDiffEntry {
  kind: WorkPacketDiffKind;
  path: string;
  before?: unknown;
  after?: unknown;
}

export interface WorkPacketDiffResult {
  changed: boolean;
  entries: WorkPacketDiffEntry[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

function valuesEqual(left: unknown, right: unknown): boolean {
  return stableStringify(left) === stableStringify(right);
}

function joinPath(parent: string, key: string): string {
  return parent.length > 0 ? `${parent}.${key}` : key;
}

function diffValues(
  before: unknown,
  after: unknown,
  path: string,
  entries: WorkPacketDiffEntry[],
): void {
  if (valuesEqual(before, after)) {
    return;
  }

  if (isRecord(before) && isRecord(after)) {
    const keys = [...new Set([...Object.keys(before), ...Object.keys(after)])].sort();

    for (const key of keys) {
      const childPath = joinPath(path, key);
      const beforeHasKey = Object.hasOwn(before, key);
      const afterHasKey = Object.hasOwn(after, key);

      if (!beforeHasKey && afterHasKey) {
        entries.push({
          kind: "added",
          path: childPath,
          after: after[key],
        });
        continue;
      }

      if (beforeHasKey && !afterHasKey) {
        entries.push({
          kind: "removed",
          path: childPath,
          before: before[key],
        });
        continue;
      }

      diffValues(before[key], after[key], childPath, entries);
    }

    return;
  }

  entries.push({
    kind: "changed",
    path,
    before,
    after,
  });
}

export function diffWorkPackets(before: WorkPacket, after: WorkPacket): WorkPacketDiffResult {
  const entries: WorkPacketDiffEntry[] = [];

  diffValues(before, after, "", entries);

  return {
    changed: entries.length > 0,
    entries,
  };
}
