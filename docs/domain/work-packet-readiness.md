# Work Packet Readiness Rules

## Status

Precode foundation document.

## Purpose

This document defines the Definition of Ready model for Astra Work Packets.

A Work Packet may be schema-valid but still not ready for execution. Schema validity only means the packet has the required shape. Readiness means the packet contains enough process, product, risk, and verification information to begin work safely.

## Core Principle

A Work Packet is ready when a human engineer and AI collaborator can begin the work without guessing about objective, authority, constraints, acceptance criteria, risk, verification, or handoff.

## Validity vs Readiness

Validity answers:

```text
Does this object satisfy the Work Packet schema?
```

Readiness answers:

```text
Is this Work Packet sufficiently prepared for execution?
```

A packet may be valid but not ready.

For example, a packet can have every required field and still be not ready if:

* it has no authorizing source artifact;
* it has no acceptance criteria;
* it has no verification command;
* it has no forbidden actions;
* it does not require human review in the handoff;
* it has high risk but no risk explanation.

## Readiness Rule Requirements

Each readiness rule should have:

* stable rule id;
* human-readable description;
* field path;
* severity;
* evaluation logic;
* deterministic result.

Rule IDs should be stable so CLI output, docs, tests, and future workflow reports can refer to the same rule over time.

## Initial Readiness Rules

### `ready.source_artifacts.required`

A ready Work Packet must reference at least one source artifact.

Reason:

The AI should not perform meaningful work from conversational intent alone when an artifact should exist.

### `ready.acceptance_criteria.required`

A ready Work Packet must define acceptance criteria.

Reason:

Work cannot be safely implemented or reviewed without success conditions.

### `ready.definition_of_ready.required`

A ready Work Packet must define readiness criteria.

Reason:

The packet must explain what made it ready.

### `ready.definition_of_done.required`

A ready Work Packet must define done criteria.

Reason:

The packet must explain what completion means before execution begins.

### `ready.constraints.required`

A ready Work Packet must define constraints.

Reason:

The AI should know what boundaries apply before work starts.

### `ready.forbidden_actions.required`

A ready Work Packet must define forbidden actions.

Reason:

Authority boundaries must be explicit.

### `ready.verification.commands.required`

A ready Work Packet must define at least one verification command.

Reason:

Work should not begin without knowing how it will be checked.

### `ready.verification.evidence.required`

A ready Work Packet must define required evidence.

Reason:

Verification is not merely running commands. It is collecting evidence.

### `ready.handoff.human_review.required`

A ready Work Packet must require human review to be stated in the handoff.

Reason:

AI-assisted work remains human-accountable.

### `ready.high_risk.risks.required`

A Work Packet classified as high or critical risk must include at least one risk statement.

Reason:

High-risk work must not proceed without explicit risk disclosure.

## Readiness Result

The readiness engine should return a structured result:

```text
valid: boolean
issues: ValidationIssue[]
```

A readiness result is valid only when no error-severity readiness issues exist.

## Implementation Boundary

The Work Packet Engine owns readiness rule evaluation.

The CLI may display readiness results, but it must not duplicate readiness logic.

The workflow engine may consume readiness results, but it must not redefine readiness rules.

## Future Expansion

Future readiness rules may include:

* source artifact existence checks;
* policy reference checks;
* SDLC phase-specific readiness;
* Scrum context readiness;
* dependency readiness;
* risk-class-specific approval requirements;
* architecture decision requirements for architecture-sensitive work.