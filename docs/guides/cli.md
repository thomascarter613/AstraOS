# Astra CLI Guide

## Status

Initial user guide.

## Document Position

PFD-1103 — CLI guide

## Purpose

This guide explains how to use the Astra command-line interface.

At this stage, the CLI only supports help and version commands. Future slices will expand it with Work Packet commands.

## Current Commands

The initial CLI supports:

```bash
astra --help
astra help
astra --version
astra version
````

Empty arguments also show help.

```bash
astra
```

## Help

Use `--help` to print the help screen.

```bash
astra --help
```

Equivalent command:

```bash
astra help
```

Expected behavior:

```text
- exits with code 0
- prints available commands
- prints basic usage
```

## Version

Use `--version` to print the CLI version.

```bash
astra --version
```

Equivalent command:

```bash
astra version
```

Expected behavior:

```text
- exits with code 0
- prints the Astra CLI version
```

## Unknown Commands

Unknown commands return a usage error.

Example:

```bash
astra unknown
```

Expected behavior:

```text
- exits with code 2
- prints a helpful error message to stderr
```

## Exit Codes

| Exit Code | Meaning       |
| --------: | ------------- |
|       `0` | Success       |
|       `1` | Runtime error |
|       `2` | Usage error   |

## Current Limitations

The CLI does not yet support Work Packet commands.

The following commands are planned for later slices:

```bash
astra work-packet validate <file>
astra work-packet ready <file>
astra work-packet done <file>
astra work-packet handoff <file>
astra work-packet create
```

## Design Rule

The CLI is a user-facing shell.

It should call package APIs rather than duplicate domain logic.

For example, future Work Packet commands should call `packages/work-packet-engine` for validation, readiness, done checks, file I/O, rendering, and related behavior.