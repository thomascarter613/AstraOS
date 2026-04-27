# Astra Implementation Slices

## Status

Precode foundation document.

## Purpose

This document defines the recommended atomic implementation slices for Astra.

Each slice should generally correspond to one branch and one conventional commit.

## Completed Slices

### Slice 000 — Scaffold Astra SDLC Framework v0.1

Commit:

```text
feat: scaffold astra sdlc framework v0.1
```

Status:

```text
Done
```

### Slice 001 — Add Work Packet file I/O

Commit:

```text
feat(work-packet-engine): add work packet file io
```

Status:

```text
Done
```

## Phase 1 — Complete Work Packet Engine

### Slice 002 — Canonical Work Packet examples

Branch:

```text
feat/work-packet-examples
```

Commit:

```text
feat(work-packet-engine): add canonical work packet examples
```

Scope:

* add examples for all SDLC phases;
* validate all examples;
* ensure YAML examples match schema.

### Slice 003 — Lifecycle transition rules

Branch:

```text
feat/work-packet-lifecycle
```

Commit:

```text
feat(work-packet-engine): add lifecycle transition rules
```

Scope:

* transition matrix;
* transition validation;
* transition reason;
* tests for allowed and forbidden transitions.

### Slice 004 — Definition of Ready rule objects

Commit:

```text
feat(work-packet-engine): model definition of ready rules
```

Scope:

* rule ids;
* rule messages;
* severity;
* structured readiness results.

### Slice 005 — Definition of Done rule objects

Commit:

```text
feat(work-packet-engine): model definition of done rules
```

Scope:

* done rule ids;
* verification evidence requirements;
* handoff requirements;
* human review requirement.

### Slice 006 — Work Packet normalization

Commit:

```text
feat(work-packet-engine): add work packet normalization
```

Scope:

* trim strings;
* remove duplicate list items;
* normalize metadata;
* preserve explicit validation failures.

### Slice 007 — Work Packet diffing

Commit:

```text
feat(work-packet-engine): add work packet diffing
```

Scope:

* compare two packets;
* added fields;
* removed fields;
* changed fields;
* stable diff output.

### Slice 008 — Work Packet Markdown rendering

Commit:

```text
feat(work-packet-engine): render work packets as markdown
```

Scope:

* render core fields;
* render acceptance criteria;
* render risks;
* render verification;
* render handoff sections.

## Phase 2 — CLI MVP

### Slice 009 — CLI command framework

Commit:

```text
feat(cli): add command framework
```

### Slice 010 — Work Packet validate command

Commit:

```text
feat(cli): add work packet validation command
```

### Slice 011 — Work Packet ready command

Commit:

```text
feat(cli): add work packet readiness command
```

### Slice 012 — Work Packet done command

Commit:

```text
feat(cli): add work packet done command
```

### Slice 013 — Work Packet handoff command

Commit:

```text
feat(cli): add work packet handoff command
```

### Slice 014 — Work Packet create command

Commit:

```text
feat(cli): add work packet create command
```

### Slice 015 — CLI smoke tests

Commit:

```text
test(cli): add work packet command smoke tests
```

## Phase 3 — Artifact Model

### Slice 016

```text
feat(artifact-model): define canonical artifact types
```

### Slice 017

```text
feat(artifact-model): add artifact metadata model
```

### Slice 018

```text
feat(artifact-model): add artifact relationship graph
```

### Slice 019

```text
feat(artifact-model): add artifact file io
```

### Slice 020

```text
feat(work-packet-engine): link work packets to artifacts
```

## Phase 4 — SDLC Core

### Slice 021

```text
feat(sdlc-core): define phase registry
```

### Slice 022

```text
feat(sdlc-core): map phases to required artifacts
```

### Slice 023

```text
feat(sdlc-core): add request phase classifier
```

### Slice 024

```text
feat(work-packet-engine): validate sdlc phase artifact expectations
```

## Phase 5 — Agile and Scrum Core

### Slice 025

```text
feat(agile-core): define agile delivery model
```

### Slice 026

```text
feat(scrum-core): define scrum operating model
```

### Slice 027

```text
feat(scrum-core): add backlog readiness checks
```

### Slice 028

```text
feat(scrum-core): add sprint planning model
```

### Slice 029

```text
feat(work-packet-engine): validate scrum context
```

## Phase 6 — Workflow Engine

### Slice 030

```text
feat(workflow-engine): define workflow schema
```

### Slice 031

```text
feat(workflow-engine): load workflow definitions
```

### Slice 032

```text
feat(workflow-engine): add workflow dry run
```

### Slice 033

```text
feat(workflows): define implementation workflow
```

### Slice 034

```text
feat(workflows): define review workflow
```

### Slice 035

```text
feat(workflows): define release workflow
```

## Phase 7 — Policy Engine

### Slice 036

```text
feat(policy-engine): define policy model
```

### Slice 037

```text
feat(policy-engine): add approval gate evaluation
```

### Slice 038

```text
feat(policy-engine): enforce forbidden actions
```

### Slice 039

```text
feat(policy-engine): classify security sensitive changes
```

### Slice 040

```text
feat(workflow-engine): integrate policy gates
```

## Phase 8 — Verification Engine

### Slice 041

```text
feat(verification-engine): define verification evidence model
```

### Slice 042

```text
feat(verification-engine): add command runner abstraction
```

### Slice 043

```text
feat(verification-engine): generate verification reports
```

### Slice 044

```text
feat(verification-engine): execute work packet verification plans
```

### Slice 045

```text
feat(work-packet-engine): consume verification evidence
```

## Phase 9 — Repo and Git Awareness

### Slice 046

```text
feat(repo-analyzer): add repository inventory
```

### Slice 047

```text
feat(repo-analyzer): detect workspaces
```

### Slice 048

```text
feat(repo-analyzer): check workspace boundaries
```

### Slice 049

```text
feat(git-adapter): read git status
```

### Slice 050

```text
feat(git-adapter): read git diffs
```

### Slice 051

```text
feat(git-adapter): generate commit plans
```

## Phase 10 — Context and Memory

### Slice 052

```text
feat(context-engine): define context source model
```

### Slice 053

```text
feat(context-engine): load project context
```

### Slice 054

```text
feat(context-engine): define context packs
```

### Slice 055

```text
feat(context-engine): assemble context packs
```

### Slice 056

```text
feat(memory-engine): define memory record model
```

### Slice 057

```text
feat(memory-engine): add decision log memory
```

### Slice 058

```text
feat(memory-engine): add session chronicles
```

## Phase 11 — Orchestration and Prompt Kernel

### Slice 059

```text
feat(orchestration-engine): define request model
```

### Slice 060

```text
feat(orchestration-engine): add planning skeleton
```

### Slice 061

```text
feat(orchestration-engine): create work packets from requests
```

### Slice 062

```text
feat(prompt-kernel): define prompt contract model
```

### Slice 063

```text
feat(prompt-kernel): add role mode templates
```

### Slice 064

```text
feat(prompt-kernel): assemble prompts from work packets
```

## Phase 12 — API and Services

### Slice 065

```text
feat(api): add health route
```

### Slice 066

```text
feat(api): add work packet validation endpoint
```

### Slice 067

```text
feat(api): add work packet handoff endpoint
```

### Slice 068

```text
feat(artifact-service): add service skeleton
```

### Slice 069

```text
feat(policy-service): add service skeleton
```

### Slice 070

```text
feat(verification-service): add service skeleton
```

### Slice 071

```text
feat(orchestrator): add service skeleton
```

## Phase 13 — Workbench UI

### Slice 072

```text
feat(workbench): add application shell
```

### Slice 073

```text
feat(workbench): add work packet viewer
```

### Slice 074

```text
feat(workbench): add work packet editor
```

### Slice 075

```text
feat(workbench): add workflow run viewer
```

### Slice 076

```text
feat(workbench): add verification report viewer
```

## Phase 14 — Documentation

### Slice 077

```text
docs: expand astra sdlc framework specification
```

### Slice 078

```text
docs(work-packet-engine): add user guide
```

### Slice 079

```text
docs(cli): add command guide
```

### Slice 080

```text
docs(architecture): add system overview
```

### Slice 081

```text
docs(workflows): add authoring guide
```

### Slice 082

```text
docs(policy): add authoring guide
```

## Phase 15 — Telemetry and Audit

### Slice 083

```text
feat(telemetry): define audit event model
```

### Slice 084

```text
feat(telemetry): add work session audit log
```

### Slice 085

```text
feat(telemetry): add correlation ids
```

### Slice 086

```text
feat(workflow-engine): emit audit events
```

## Phase 16 — Level 5 Delivery OS

### Slice 087

```text
feat(artifact-model): add artifact graph traversal
```

### Slice 088

```text
feat(artifact-model): detect traceability gaps
```

### Slice 089

```text
feat(telemetry): add delivery metrics model
```

### Slice 090

```text
feat(memory-engine): detect retrospective patterns
```

### Slice 091

```text
feat(orchestration-engine): recommend process improvements
```

## Phase 17 — Release and Packaging

### Slice 092

```text
build: verify package outputs
```

### Slice 093

```text
feat(cli): package astra executable
```

### Slice 094

```text
docs: add changelog process
```

### Slice 095

```text
docs(release): add release checklist
```

### Slice 096

```text
chore(release): prepare v0.1.0
```

## Immediate Next Slice

After this precode foundation batch is committed, continue with:

```text
feat(work-packet-engine): add canonical work packet examples
```

