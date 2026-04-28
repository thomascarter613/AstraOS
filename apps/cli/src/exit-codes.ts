export const CLI_EXIT_CODES = {
  success: 0,
  runtimeError: 1,
  usageError: 2,
  validationError: 3,
} as const;

export type CliExitCode = (typeof CLI_EXIT_CODES)[keyof typeof CLI_EXIT_CODES];
