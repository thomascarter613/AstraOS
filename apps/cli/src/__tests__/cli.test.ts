import { describe, expect, test } from "bun:test";
import { runCliCommand } from "../commands";
import { CLI_EXIT_CODES } from "../exit-codes";

describe("Astra CLI command framework", () => {
  test("--help returns success", () => {
    const result = runCliCommand(["--help"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toContain("Astra SDLC Framework CLI");
    expect(result.stdout).toContain("Usage:");
  });

  test("help returns success", () => {
    const result = runCliCommand(["help"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toContain("Commands:");
  });

  test("--version returns success", () => {
    const result = runCliCommand(["--version"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toBe("astra 0.1.0\n");
  });

  test("version returns success", () => {
    const result = runCliCommand(["version"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toBe("astra 0.1.0\n");
  });

  test("unknown command returns usage error", () => {
    const result = runCliCommand(["unknown"]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.usageError);
    expect(result.stdout).toBe("");
    expect(result.stderr).toContain("Unknown command: unknown");
    expect(result.stderr).toContain("Run `astra --help` for usage information.");
  });

  test("empty args show help", () => {
    const result = runCliCommand([]);

    expect(result.exitCode).toBe(CLI_EXIT_CODES.success);
    expect(result.stderr).toBe("");
    expect(result.stdout).toContain("Astra SDLC Framework CLI");
    expect(result.stdout).toContain("Usage:");
  });
});
