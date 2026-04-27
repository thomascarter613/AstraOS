export const ASTRA_CLI_VERSION = "0.1.0";

export function renderCliHelp(): string {
  return [
    "Astra SDLC Framework CLI",
    "",
    "Usage:",
    "  astra [command]",
    "",
    "Commands:",
    "  help          Show this help message.",
    "  version       Show the Astra CLI version.",
    "",
    "Options:",
    "  --help        Show this help message.",
    "  --version     Show the Astra CLI version.",
    "",
    "Planned command groups:",
    "  work-packet   Validate, inspect, render, and manage Work Packets.",
    "",
  ].join("\n");
}

export function renderCliVersion(version = ASTRA_CLI_VERSION): string {
  return `astra ${version}\n`;
}

export function renderUnknownCommand(command: string): string {
  return [`Unknown command: ${command}`, "", "Run `astra --help` for usage information.", ""].join(
    "\n",
  );
}
