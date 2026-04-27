import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validWorkPacket } from "../fixtures";
import {
  parseWorkPacketContent,
  readWorkPacketFile,
  serializeWorkPacket,
  writeWorkPacketFile,
} from "../io";

describe("work packet file I/O", () => {
  test("parses JSON work packet content", () => {
    const result = parseWorkPacketContent(JSON.stringify(validWorkPacket), "json");

    expect(result.valid).toBe(true);
    expect(result.value?.id).toBe("AUTH-014");
  });

  test("parses YAML work packet content", () => {
    const content = serializeWorkPacket(validWorkPacket, "yaml");
    const result = parseWorkPacketContent(content, "yaml");

    expect(result.valid).toBe(true);
    expect(result.value?.id).toBe("AUTH-014");
  });

  test("returns validation failure for malformed JSON content", () => {
    const result = parseWorkPacketContent("{", "json");

    expect(result.valid).toBe(false);
    expect(result.issues[0]?.field).toBe("$");
  });

  test("writes and reads a JSON work packet file", async () => {
    const dir = await mkdtemp(join(tmpdir(), "astra-work-packet-"));

    try {
      const path = join(dir, "AUTH-014.json");

      await writeWorkPacketFile(path, validWorkPacket);

      const raw = await readFile(path, "utf8");
      expect(raw).toContain('"schemaVersion": "0.1.0"');

      const result = await readWorkPacketFile(path);

      expect(result.valid).toBe(true);
      expect(result.format).toBe("json");
      expect(result.value?.id).toBe("AUTH-014");
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  test("writes and reads a YAML work packet file", async () => {
    const dir = await mkdtemp(join(tmpdir(), "astra-work-packet-"));

    try {
      const path = join(dir, "AUTH-014.yaml");

      await writeWorkPacketFile(path, validWorkPacket);

      const raw = await readFile(path, "utf8");
      expect(raw).toContain("schemaVersion: 0.1.0");

      const result = await readWorkPacketFile(path);

      expect(result.valid).toBe(true);
      expect(result.format).toBe("yaml");
      expect(result.value?.id).toBe("AUTH-014");
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  test("rejects unsupported file extensions", async () => {
    await expect(readWorkPacketFile("AUTH-014.txt")).rejects.toThrow(
      "Unsupported Work Packet file extension",
    );
  });

  test("refuses to write invalid work packets", async () => {
    const dir = await mkdtemp(join(tmpdir(), "astra-work-packet-"));

    try {
      const path = join(dir, "invalid.json");

      await expect(
        writeWorkPacketFile(path, {
          ...validWorkPacket,
          id: "",
        }),
      ).rejects.toThrow("Cannot write invalid Work Packet");
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
});
