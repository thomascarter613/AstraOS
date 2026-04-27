# Work Packet Done Rules

## Status

Precode foundation document.

## Purpose

This document defines the Definition of Done model for Astra Work Packets.

A Work Packet may be schema-valid and ready for execution, but that does not mean the work is complete. Done requires evidence.

## Core Principle

A Work Packet is done only when the scoped objective has been addressed, verification has passed, required handoff information exists, and human review remains explicit.

The AI must not treat generated code, edited files, or completed local actions as sufficient proof of completion.

## Validity vs Readiness vs Done

Validity answers:

```text
Does this object satisfy the Work Packet schema?
```

Readiness answers:

```text
Is this Work Packet prepared for execution?
```

Done answers:

```text
Has the work been completed, verified, and handed off with enough evidence for human review?
```

A packet may be valid and ready but not done.

## Done Rule Requirements

Each done rule should have:

* stable rule id;
* human-readable description;
* field path;
* severity;
* evaluation logic;
* deterministic result.

Stable rule IDs allow CLI output, workflow reports, test assertions, and future policy integrations to refer to the same completion requirements over time.

## Initial Done Rules

### `done.status.terminal_required`

A done Work Packet must be in one of these statuses:

```text
verified
done
released
```

Reason:

Work that is still draft, ready, in progress, blocked, or merely in review cannot be considered done.

### `done.verification.passed_required`

A done Work Packet must have verification status `passed`.

Reason:

Astra is evidence-based. Done cannot mean “the AI thinks it is finished.”

### `done.verification.commands.required`

A done Work Packet must include at least one verification command.

Reason:

There must be a known verification path.

### `done.verification.evidence.required`

A done Work Packet must include required evidence.

Reason:

Verification is not merely command execution. It must identify what evidence matters.

### `done.acceptance_criteria.required`

A done Work Packet must include acceptance criteria.

Reason:

Completion cannot be assessed without success conditions.

### `done.definition_of_done.required`

A done Work Packet must include Definition of Done items.

Reason:

Completion standards must be explicit.

### `done.handoff.summary.required`

A done Work Packet must require a change summary handoff.

Reason:

Completed work must be explainable to the human reviewer.

### `done.handoff.unverified_items.required`

A done Work Packet must require unverified items to be listed.

Reason:

Unknowns must not be hidden.

### `done.handoff.human_review.required`

A done Work Packet must require human review to be stated.

Reason:

AI-assisted work remains human-accountable.

### `done.high_risk.risks.required`

A high or critical risk Work Packet must include at least one risk statement.

Reason:

High-risk work must not be completed without explicit risk disclosure.

## Done Result

The done engine should return:

```text
valid: boolean
issues: ValidationIssue[]
```

A done result is valid only when no error-severity done issues exist.

## Implementation Boundary

The Work Packet Engine owns done rule evaluation.

The CLI may display done results, but it must not duplicate done logic.

The workflow engine may consume done results, but it must not redefine done rules.

## Future Expansion

Future done rules may include:

* acceptance criteria evidence mapping;
* verification report attachment checks;
* human approval record checks;
* release-specific done checks;
* security review evidence for high-risk work;
* traceability checks from Work Packet to changed files and tests.
