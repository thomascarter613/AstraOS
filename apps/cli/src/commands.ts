import { readWorkPacketFile } from "@astra/work-packet-engine";
import { CLI_EXIT_CODES, type CliExitCode } from "./exit-codes";
import {
  renderCliHelp,
  renderCliVersion,
  renderInvalidWorkPacket,
  renderMissingWorkPacketFile,
  renderRuntimeError,
  renderUnknownCommand,
  renderUnknownWorkPacketCommand,
  renderValidWorkPacket,
} from "./output";

export interface CliCommandResult {
  exitCode: CliExitCode;
  stdout: string;
  stderr: string;
}

function success(stdout: string): CliCommandResult {
  return {
    exitCode: CLI_EXIT_CODES.success,
    stdout,
    stderr: "",
  };
}

function usageError(stderr: string): CliCommandResult {
  return {
    exitCode: CLI_EXIT_CODES.usageError,
    stdout: "",
    stderr,
  };
}

function runtimeError(stderr: string): CliCommandResult {
  return {
    exitCode: CLI_EXIT_CODES.runtimeError,
    stdout: "",
    stderr,
  };
}

function validationError(stdout: string): CliCommandResult {
  return {
    exitCode: CLI_EXIT_CODES.validationError,
    stdout,
    stderr: "",
  };
}

async function runWorkPacketValidateCommand(args: readonly string[]): Promise<CliCommandResult> {
  const [filePath] = args;

  if (filePath === undefined) {
    return usageError(renderMissingWorkPacketFile());
  }

  try {
    const result = await readWorkPacketFile(filePath);

    if (result.valid) {
      return success(renderValidWorkPacket(result));
    }

    return validationError(renderInvalidWorkPacket(result));
  } catch (error) {
    return runtimeError(renderRuntimeError(error));
  }
}

async function runWorkPacketCommand(args: readonly string[]): Promise<CliCommandResult> {
  const [command, ...rest] = args;

  switch (command) {
    case "validate":
      return runWorkPacketValidateCommand(rest);

    default:
      return usageError(renderUnknownWorkPacketCommand(command));
  }
}

export async function runCliCommand(args: readonly string[]): Promise<CliCommandResult> {
  const [command, ...rest] = args;

  if (command === undefined) {
    return success(renderCliHelp());
  }

  switch (command) {
    case "--help":
    case "-h":
    case "help":
      return success(renderCliHelp());

    case "--version":
    case "-v":
    case "version":
      return success(renderCliVersion());

    case "work-packet":
      return runWorkPacketCommand(rest);

    default:
      return usageError(renderUnknownCommand(command));
  }
}
