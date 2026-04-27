import { CLI_EXIT_CODES, type CliExitCode } from "./exit-codes";
import { renderCliHelp, renderCliVersion, renderUnknownCommand } from "./output";

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

export function runCliCommand(args: readonly string[]): CliCommandResult {
  const [command] = args;

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

    default:
      return usageError(renderUnknownCommand(command));
  }
}
