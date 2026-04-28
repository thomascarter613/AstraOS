import { describe, expect, test } from "bun:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validWorkPacket } from "@astra/work-packet-engine";
import { runCliCommand } from "../commands";
import { CLI_EXIT_CODES } from "../exit-codes";

describe("Astra CLI command framework", () => {
  test("--help returns success", async () => {
    const result = await runCliCommand(["--help"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toContain("Astra SDLC Framework CLI");
    expect(result.stdout).toContain("Usage:");
  });

  test("help returns success", async () => {
    const result = await runCliCommand(["help"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toContain("Commands:");
  });

  test("--version returns success", async () => {
    const result = await runCliCommand(["--version"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toBe("astra 0.1.0\n");
  });

  test("version returns success", async () => {
    const result = await runCliCommand(["version"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toBe("astra 0.1.0\n");
  });

  test("unknown command returns usage error", async () => {
    const result = await runCliCommand(["unknown"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.usageError);
    expect(result.stdout).toBe("");
    expect(result.stderr).toContain("Unknown command: unknown");
    expect(result.stderr).toContain("Run `astra --help` for usage information.");
  });

  test("empty args show help", async () => {
    const result = await runCliCommand([]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toContain("Astra SDLC Framework CLI");
    expect(result.stdout).toContain("Usage:");
  });
});

describe("Astra CLI Work Packet validation", () => {
  test("work-packet validate returns success for a valid JSON Work Packet", async () => {
    const dir = await mkdtemp(join(tmpdir(), "astra-cli-"));

    try {
      const filePath = join(dir, "valid-work-packet.json");
      await writeFile(filePath, JSON.stringify(validWorkPacket, null, 2), "utf8");

      const result = await runCliCommand(["work-packet", "validate", filePath]);

      expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
      expect(result.stderr).toBe("");
      expect(result.stdout).toContain("Work Packet is valid.");
      expect(result.stdout).toContain(`File: ${filePath}`);
      expect(result.stdout).toContain("Format: json");
      expect(result.stdout).toContain("ID: AUTH-014");
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  test("work-packet validate returns validation error for an invalid JSON Work Packet", async () => {
    const dir = await mkdtemp(join(tmpdir(), "astra-cli-"));

    try {
      const filePath = join(dir, "invalid-work-packet.json");
      await writeFile(
        filePath,
        JSON.stringify(
          {
            ...validWorkPacket,
            id: "",
          },
          null,
          2,
        ),
        "utf8",
      );

      const result = await runCliCommand(["work-packet", "validate", filePath]);

      expect(result.exitCode).toBe(CLI_EXIT_CODES.validationError);
      expect(result.stderr).toBe("");
      expect(result.stdout).toContain("Work Packet is invalid.");
      expect(result.stdout).toContain(`File: ${filePath}`);
      expect(result.stdout).toContain("Issues:");
      expect(result.stdout).toContain("id");
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  test("work-packet validate returns usage error when file path is missing", async () => {
    const result = await runCliCommand(["work-packet", "validate"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.usageError);
    expect(result.stdout).toBe("");
    expect(result.stderr).toContain("Missing Work Packet file path.");
  });

  test("unknown work-packet command returns usage error", async () => {
    const result = await runCliCommand(["work-packet", "unknown"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.usageError);
    expect(result.stdout).toBe("");
    expect(result.stderr).toContain("Unknown work-packet command: unknown");
  });
});
