
# Astra Domain Model Overview

## Status

Precode foundation document.

## Purpose

This document defines the conceptual domain of Astra SDLC Framework.

Astra is a software delivery framework. Its domain is not merely source code. Its domain is the structured movement of work through a lifecycle.

## Core Domain Objects

Astra is built around the following core objects:

```text
Artifact
Work Packet
Workflow
Policy
Verification Evidence
Context Pack
Memory Record
Audit Event
Handoff
```

## Artifact

An Artifact is a durable representation of product, process, technical, verification, release, or operational knowledge.

Examples:

* Product Goal;
* Epic;
* Feature;
* User Story;
* Acceptance Criteria;
* ADR;
* Technical Design;
* Test Plan;
* Release Note;
* Incident Report;
* Retrospective Item.

Artifacts are the durable backbone of the framework.

## Work Packet

A Work Packet is the central executable planning object.

It binds together:

* intent;
* SDLC phase;
* role mode;
* source artifacts;
* constraints;
* assumptions;
* risks;
* acceptance criteria;
* readiness rules;
* done rules;
* allowed actions;
* forbidden actions;
* verification;
* handoff.

Astra should not treat a complex engineering request as ready until it can be represented as a valid Work Packet.

## Workflow

A Workflow defines the process steps for a class of work.

Examples:

* backlog refinement;
* implementation;
* code review;
* security review;
* release;
* incident response;
* retrospective.

A workflow is the repeatable protocol for moving a Work Packet through action and evidence.

## Policy

A Policy defines what is allowed, denied, or requires approval.

Examples:

* authority boundaries;
* security-sensitive change rules;
* human approval gates;
* Definition of Ready;
* Definition of Done;
* traceability requirements.

Policies turn project values into enforceable checks.

## Verification Evidence

Verification Evidence records proof or attempted proof.

Examples:

* typecheck result;
* lint result;
* unit test result;
* integration test result;
* build result;
* security scan;
* review note;
* smoke test.

Astra must treat done claims as invalid unless they are supported by evidence or clearly marked unverified.

## Context Pack

A Context Pack is the selected set of information provided to the AI for a specific task.

It may include:

* Work Packet;
* source artifacts;
* relevant ADRs;
* repo files;
* policies;
* workflow steps;
* recent handoff;
* verification failures.

The Context Pack prevents the AI from relying on stale or irrelevant chat memory.

## Memory Record

A Memory Record captures durable project knowledge.

Examples:

* accepted decision;
* superseded decision;
* recurring blocker;
* sprint learning;
* process improvement;
* important project convention.

Memory must be governed by provenance, confidence, and supersession rules.

## Audit Event

An Audit Event records something meaningful that happened.

Examples:

* Work Packet created;
* validation failed;
* policy denied an action;
* verification passed;
* handoff generated;
* human approval recorded.

Auditability is a core value of Astra.

## Handoff

A Handoff is a structured summary that allows continuity across sessions, branches, and humans.

A handoff should include:

* what changed;
* what was verified;
* what failed;
* what remains open;
* what risks exist;
* what human action is required.

## Domain Flow

The preferred flow is:

```text
Product Goal
  → Artifact
  → Work Packet
  → Workflow
  → Policy Check
  → Execution
  → Verification Evidence
  → Handoff
  → Memory / Retrospective
```

## Domain Boundary

Astra’s core domain should remain independent from any one LLM provider, issue tracker, CI system, or UI framework.

Integrations should adapt external systems into Astra’s domain objects.

