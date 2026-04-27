import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname } from "node:path";
import { parse, stringify } from "yaml";
import { parseWorkPacket } from "./schema";
import type { ParsedWorkPacketResult, WorkPacket } from "./types";

export type WorkPacketFileFormat = "json" | "yaml";

export interface WorkPacketReadResult extends ParsedWorkPacketResult {
  path: string;
  format: WorkPacketFileFormat;
}

export interface WorkPacketWriteOptions {
  format?: WorkPacketFileFormat;
  createParentDirectories?: boolean;
}

function detectFormat(path: string): WorkPacketFileFormat {
  const extension = extname(path).toLowerCase();

  if (extension === ".json") {
    return "json";
  }

  if (extension === ".yaml" || extension === ".yml") {
    return "yaml";
  }

  throw new Error(`Unsupported Work Packet file extension: ${extension || "(none)"}`);
}

export function parseWorkPacketContent(
  content: string,
  format: WorkPacketFileFormat,
): ParsedWorkPacketResult {
  try {
    const raw = format === "json" ? JSON.parse(content) : parse(content);
    return parseWorkPacket(raw);
  } catch (error) {
    return {
      valid: false,
      issues: [
        {
          field: "$",
          message: error instanceof Error ? error.message : "Unable to parse Work Packet content.",
          severity: "error",
        },
      ],
    };
  }
}

export async function readWorkPacketFile(path: string): Promise<WorkPacketReadResult> {
  const format = detectFormat(path);
  const content = await readFile(path, "utf8");
  const result = parseWorkPacketContent(content, format);

  return {
    ...result,
    path,
    format,
  };
}

export function serializeWorkPacket(packet: WorkPacket, format: WorkPacketFileFormat): string {
  if (format === "json") {
    return `${JSON.stringify(packet, null, 2)}\n`;
  }

  return stringify(packet);
}

export async function writeWorkPacketFile(
  path: string,
  packet: WorkPacket,
  options: WorkPacketWriteOptions = {},
): Promise<void> {
  const format = options.format ?? detectFormat(path);

  if (options.createParentDirectories ?? true) {
    await mkdir(dirname(path), { recursive: true });
  }

  const validation = parseWorkPacket(packet);

  if (!validation.valid) {
    const summary = validation.issues
      .map((issue) => `${issue.severity.toUpperCase()} ${issue.field}: ${issue.message}`)
      .join("\n");

    throw new Error(`Cannot write invalid Work Packet.\n${summary}`);
  }

  await writeFile(path, serializeWorkPacket(packet, format), "utf8");
}
