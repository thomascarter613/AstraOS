# Package Responsibility Matrix

## Status

Precode foundation document.

## Purpose

This document defines responsibility boundaries for Astra packages, apps, services, and tools.

The goal is to prevent architectural drift as the monorepo grows.

## Monorepo Categories

```text
apps/       deployable or runnable user-facing surfaces
packages/   shared libraries and domain engines
services/   independently runnable backend services
tools/      repository and developer tooling
knowledge/  durable SDLC, Agile, Scrum, and engineering knowledge
workflows/  machine-readable workflow definitions
policies/   machine-readable governance policies
artifacts/  example and project artifacts
docs/       human-readable documentation
```

## Apps

| Path               | Responsibility                     | Should Not Own                                |
| ------------------ | ---------------------------------- | --------------------------------------------- |
| `apps/cli`         | User-facing command-line interface | Core domain rules                             |
| `apps/api`         | HTTP API surface                   | Business logic that belongs in packages       |
| `apps/workbench`   | Interactive UI                     | Validation and policy rules                   |
| `apps/docs`        | Documentation site                 | Canonical docs content if docs are file-based |
| `apps/admin`       | Future administrative surface      | Core engines                                  |
| `apps/ops-console` | Future operations UI               | Verification engine internals                 |

## Services

| Path                            | Responsibility                   | Should Not Own                   |
| ------------------------------- | -------------------------------- | -------------------------------- |
| `services/orchestrator`         | Runtime orchestration service    | Package-level domain definitions |
| `services/context-indexer`      | Context indexing service         | Context source truth             |
| `services/artifact-service`     | Artifact persistence/API service | Artifact type definitions        |
| `services/policy-service`       | Policy evaluation service        | Policy type definitions          |
| `services/verification-service` | Verification execution service   | Work Packet domain logic         |
| `services/telemetry-service`    | Telemetry/audit event service    | Domain event definitions         |

## Packages

| Path                             | Responsibility                                                                   | Should Not Own                        |
| -------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| `packages/work-packet-engine`    | Work Packet schema, validation, readiness, done, file I/O, lifecycle, handoff    | CLI output formatting, HTTP transport |
| `packages/artifact-model`        | Canonical artifact types, metadata, relationships, traceability                  | Work Packet execution rules           |
| `packages/sdlc-core`             | SDLC phase registry, phase classification, phase artifact expectations           | Scrum-specific models                 |
| `packages/agile-core`            | Agile concepts and iterative delivery models                                     | Scrum event implementation details    |
| `packages/scrum-core`            | Scrum concepts, events, artifacts, commitments                                   | Generic SDLC model                    |
| `packages/workflow-engine`       | Workflow schema, loading, validation, dry-run, execution planning                | Policy rule definitions               |
| `packages/policy-engine`         | Policy model, verdicts, approval gates, forbidden action checks                  | Workflow step sequencing              |
| `packages/verification-engine`   | Verification evidence, command runner abstraction, verification reports          | Work Packet schema ownership          |
| `packages/context-engine`        | Context source model, context pack assembly, provenance                          | Long-term memory semantics            |
| `packages/memory-engine`         | Memory records, decision memory, session chronicles, supersession                | Prompt templates                      |
| `packages/orchestration-engine`  | Request classification, planning, role/phase selection, Work Packet coordination | Low-level CLI or HTTP details         |
| `packages/prompt-kernel`         | Prompt contracts, role prompts, prompt assembly                                  | Domain validation rules               |
| `packages/repo-analyzer`         | Repo inventory, workspace detection, boundary checks                             | Git command execution                 |
| `packages/git-adapter`           | Git status, diffs, commit plan support                                           | Repo architecture rules               |
| `packages/issue-tracker-adapter` | Issue tracker abstraction and vendor adapters                                    | Artifact core model                   |
| `packages/ci-adapter`            | CI result abstraction and vendor adapters                                        | Verification rule ownership           |
| `packages/telemetry`             | Audit event and telemetry types                                                  | Service transport                     |
| `packages/contracts`             | Shared API/CLI/schema contracts                                                  | Implementation logic                  |
| `packages/config`                | Shared configuration loading and validation                                      | Domain rules                          |
| `packages/shared`                | Truly generic utilities                                                          | Domain-specific behavior              |
| `packages/ui`                    | Shared UI components                                                             | Domain logic                          |

## Dependency Direction

Preferred dependency flow:

```text
apps/services
  → packages/orchestration-engine
  → packages/workflow-engine
  → packages/policy-engine
  → packages/work-packet-engine
  → packages/artifact-model
  → packages/shared
```

This is not absolute for every package, but dependencies should move from surfaces toward domain engines, not the reverse.

## Forbidden Patterns

Avoid:

1. apps importing private package internals;
2. packages importing apps;
3. core packages depending on UI;
4. domain packages depending on a specific LLM provider;
5. policy rules scattered through CLI commands;
6. Work Packet validation duplicated outside the Work Packet Engine;
7. transport concerns embedded in domain packages.

## Work Packet Engine Boundary

The Work Packet Engine owns:

* Work Packet schema;
* Work Packet constants;
* runtime parsing;
* validation;
* file I/O;
* readiness checks;
* done checks;
* lifecycle transitions;
* risk classification;
* handoff generation.

It does not own:

* CLI command parsing;
* HTTP routes;
* UI rendering;
* issue tracker synchronization;
* long-term memory;
* workflow execution.

## CLI Boundary

The CLI should call package APIs.

The CLI may format output and exit with status codes.

The CLI should not duplicate validation logic.

## Architecture Rule

If two packages need the same domain concept, move the concept into the correct lower-level package instead of duplicating it.

