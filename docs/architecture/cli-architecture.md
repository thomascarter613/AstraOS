# CLI Architecture

## Status

Precode foundation document.

## Document Position

PFD-0709 — CLI architecture

## Purpose

This document defines the architectural boundary for the Astra command-line interface.

The Astra CLI is a user-facing application surface. It is not a domain engine. It should expose Astra capabilities to humans through deterministic commands, predictable output, and stable exit codes while delegating domain behavior to packages.

## Architectural Role

The CLI belongs in:

```text
apps/cli
```

It is an application because it is a runnable interface for users.

The CLI should depend on packages such as:

```text
packages/work-packet-engine
packages/artifact-model
packages/workflow-engine
packages/policy-engine
packages/verification-engine
packages/context-engine
```

The CLI should not own the domain logic contained in those packages.

## Core Boundary Rule

The CLI owns:

1. argument parsing;
2. command routing;
3. help output;
4. version output;
5. terminal-friendly formatting;
6. stdout and stderr behavior;
7. deterministic exit codes;
8. mapping package results into user-facing messages.

The CLI does not own:

1. Work Packet schema validation;
2. Work Packet readiness rules;
3. Work Packet done rules;
4. lifecycle transition rules;
5. normalization behavior;
6. diffing behavior;
7. Markdown rendering behavior;
8. policy evaluation;
9. workflow execution rules;
10. verification evidence semantics.

Those behaviors belong in packages.

## CLI as a Thin Shell

The CLI should be a thin shell around package APIs.

For example, a future command such as:

```bash
astra work-packet validate artifacts/work-packets/examples/implementation.example.yaml
```

should:

1. parse the command and file path;
2. call the Work Packet Engine file I/O and validation APIs;
3. format the result for a human;
4. exit with a deterministic exit code.

It should not duplicate Work Packet validation logic.

## Command Routing

Command routing should be implemented as testable application logic.

The preferred shape is:

```ts
runCliCommand(args: readonly string[]): CliCommandResult
```

This allows command behavior to be tested directly without spawning a child process.

The executable entrypoint should remain thin:

```text
process.argv
  → runCliCommand()
  → stdout/stderr
  → process.exitCode
```

## Output Model

A command should return a structured result:

```ts
interface CliCommandResult {
  exitCode: CliExitCode;
  stdout: string;
  stderr: string;
}
```

This keeps command behavior predictable and easy to test.

## Exit Code Model

The CLI must use deterministic exit codes.

Initial exit codes:

```text
0 — success
1 — runtime error
2 — usage error
```

Expected usage:

| Exit Code | Name         | Meaning                                          |
| --------: | ------------ | ------------------------------------------------ |
|       `0` | success      | The command completed successfully.              |
|       `1` | runtimeError | The command was valid, but execution failed.     |
|       `2` | usageError   | The user supplied an unknown or invalid command. |

Future commands may add more specific meanings, but the initial model should remain simple.

## Help and Version Commands

The initial CLI framework supports:

```bash
astra --help
astra help
astra --version
astra version
```

Empty arguments should show help and exit successfully.

Unknown commands should print an error and exit with a usage error.

## Determinism Requirements

CLI output should be deterministic.

The same command with the same inputs should produce the same result unless it depends on explicit external state.

For Slice 009, all CLI commands are deterministic because they only render static help and version information.

## Error Handling

Unknown commands should not throw unhandled exceptions.

They should return:

```text
exitCode: usageError
stdout: ""
stderr: helpful error message
```

Runtime errors should eventually return:

```text
exitCode: runtimeError
```

However, Slice 009 only needs usage-error handling.

## Testing Strategy

The CLI should be tested through `runCliCommand()` directly.

Initial tests should prove:

1. `--help` returns success;
2. `help` returns success;
3. `--version` returns success;
4. `version` returns success;
5. unknown commands return usage error;
6. empty arguments show help.

## Future Expansion

Future slices will add:

```text
astra work-packet validate
astra work-packet ready
astra work-packet done
astra work-packet handoff
astra work-packet create
astra doctor
```

Those commands should continue to follow the same boundary rule:

```text
CLI parses and presents.
Packages own domain behavior.
```

## Architectural Invariant

The CLI must never become the place where domain rules are secretly implemented.

If a command needs to validate, normalize, diff, render, transition, or evaluate a Work Packet, it must call the Work Packet Engine.
