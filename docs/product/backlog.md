
# Astra Product Backlog

## Status

Precode foundation document.

## Purpose

This document is the canonical product backlog for Astra SDLC Framework.

It summarizes the implementation roadmap from the current green baseline toward the Level 5 AI Delivery Operating System target.

## Completed

### DONE-001 — Scaffold Astra SDLC Framework v0.1

Commit:

```text
feat: scaffold astra sdlc framework v0.1
```

Outcome:

* monorepo scaffold;
* Bun workspace;
* TypeScript baseline;
* Biome baseline;
* deterministic verification;
* repo contract test.

### DONE-002 — Add Work Packet file I/O

Commit:

```text
feat(work-packet-engine): add work packet file io
```

Outcome:

* Work Packet schema files;
* JSON/YAML parsing;
* JSON/YAML writing;
* validation on write;
* file I/O tests.

## Epics

### EPIC-001 — Project Foundation and Governance

Purpose:

Establish repository rules, contribution rules, security posture, ADRs, and verification discipline.

Key backlog items:

* add CONTRIBUTING.md;
* add SECURITY.md;
* document local verification;
* document branching strategy;
* add ADR template;
* expand repo contract tests.

### EPIC-002 — Work Packet Engine

Purpose:

Make the Work Packet Engine the canonical core of the framework.

Key backlog items:

* canonical examples;
* lifecycle transitions;
* readiness rule objects;
* done rule objects;
* risk classifier;
* handoff generator;
* normalization;
* diffing;
* Markdown rendering.

### EPIC-003 — CLI

Purpose:

Expose core behavior through local commands.

Key backlog items:

* command framework;
* validate command;
* ready command;
* done command;
* handoff command;
* create command;
* doctor command.

### EPIC-004 — Artifact Model

Purpose:

Define all durable project artifact types and relationships.

Key backlog items:

* artifact core types;
* metadata model;
* relationship graph;
* artifact file I/O;
* traceability checks.

### EPIC-005 — SDLC Core

Purpose:

Model lifecycle phases and phase expectations.

Key backlog items:

* phase registry;
* phase classifier;
* phase artifact expectations;
* phase readiness rules.

### EPIC-006 — Agile and Scrum Core

Purpose:

Model Agile and Scrum concepts used by Astra.

Key backlog items:

* Agile delivery model;
* Scrum concept model;
* Scrum event model;
* backlog readiness checks;
* sprint planning support.

### EPIC-007 — Workflow Engine

Purpose:

Define and run repeatable delivery workflows.

Key backlog items:

* workflow schema;
* workflow loader;
* dry-runner;
* implementation workflow;
* review workflow;
* release workflow.

### EPIC-008 — Policy Engine

Purpose:

Evaluate authority, risk, approval, and forbidden action rules.

Key backlog items:

* policy model;
* approval gates;
* forbidden action checks;
* security-sensitive change detection.

### EPIC-009 — Verification Engine

Purpose:

Represent and execute verification plans.

Key backlog items:

* evidence model;
* command runner abstraction;
* verification reports;
* Work Packet verification execution.

### EPIC-010 — Context Engine

Purpose:

Select and assemble task-relevant context.

Key backlog items:

* context source model;
* project context loader;
* context pack model;
* context assembler.

### EPIC-011 — Memory Engine

Purpose:

Capture durable learning, decisions, and session continuity.

Key backlog items:

* memory record model;
* decision log memory;
* session chronicles;
* supersession handling.

### EPIC-012 — Repo Analyzer

Purpose:

Understand repository structure and package boundaries.

Key backlog items:

* file inventory;
* workspace detector;
* boundary checker.

### EPIC-013 — Git Adapter

Purpose:

Expose safe Git state and diff information.

Key backlog items:

* status reader;
* diff reader;
* commit plan generator.

### EPIC-014 — Issue Tracker Adapter

Purpose:

Connect external backlog systems to Astra artifacts.

Key backlog items:

* adapter interface;
* GitHub Issues adapter skeleton;
* project field mapping.

### EPIC-015 — CI Adapter

Purpose:

Map CI results into verification evidence.

Key backlog items:

* CI result model;
* GitHub Actions reader skeleton;
* failed check mapping.

### EPIC-016 — Orchestration Engine

Purpose:

Coordinate request classification, context, Work Packets, workflows, policy, and verification.

Key backlog items:

* request model;
* planning skeleton;
* Work Packet creation from requests.

### EPIC-017 — Prompt Kernel

Purpose:

Define structured prompt contracts for AI role modes.

Key backlog items:

* prompt contract model;
* role prompt templates;
* Work Packet prompt assembler.

### EPIC-018 — API

Purpose:

Expose Astra behavior over HTTP.

Key backlog items:

* health route;
* Work Packet validation endpoint;
* Work Packet handoff endpoint.

### EPIC-019 — Services

Purpose:

Create service boundaries for later runtime deployment.

Key backlog items:

* artifact service skeleton;
* policy service skeleton;
* verification service skeleton;
* orchestrator service skeleton.

### EPIC-020 — Workbench UI

Purpose:

Provide an interactive workbench for Work Packets, workflows, and verification.

Key backlog items:

* application shell;
* Work Packet viewer;
* Work Packet editor;
* workflow run viewer.

### EPIC-021 — Documentation System

Purpose:

Make Astra understandable, teachable, and maintainable.

Key backlog items:

* expand framework specification;
* Work Packet Engine guide;
* CLI guide;
* architecture overview;
* workflow authoring guide;
* policy authoring guide.

### EPIC-022 — Telemetry and Audit

Purpose:

Record meaningful actions and evidence.

Key backlog items:

* audit event model;
* work session audit log;
* correlation ids;
* workflow audit events.

### EPIC-023 — Level 5 Delivery OS Capabilities

Purpose:

Move Astra toward a full AI Delivery Operating System.

Key backlog items:

* artifact graph traversal;
* traceability gap detection;
* delivery metrics;
* retrospective pattern detection;
* process improvement recommender.

### EPIC-024 — Release, Packaging, and Distribution

Purpose:

Prepare Astra for internal and eventual external releases.

Key backlog items:

* package build verification;
* CLI packaging;
* changelog process;
* release checklist;
* v0.1.0 release preparation.

## Immediate Priority

The next implementation target is still:

```text
feat(work-packet-engine): add canonical work packet examples
```

But this should happen after the precode foundation batch is committed.

