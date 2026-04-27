# Work Packet Diffing

## Status

Precode foundation document.

## Purpose

This document defines the Work Packet diffing model for Astra.

Diffing allows Astra to compare two Work Packets and report what changed in a deterministic, reviewable way.

## Core Principle

A Work Packet diff should describe representational and semantic changes without interpreting whether those changes are good, bad, allowed, or safe.

Diffing answers:

```text
What changed?
```

It does not answer:

```text
Is this change allowed?
Is this change ready?
Is this change done?
Is this change safe?
```

Those questions belong to lifecycle, readiness, done, policy, and review layers.

## Diff Categories

The initial diff engine should support three categories:

```text
added
removed
changed
```

## Added

A value is added when it exists in the next packet but not in the previous packet.

## Removed

A value is removed when it exists in the previous packet but not in the next packet.

## Changed

A value is changed when it exists in both packets but has different values.

## Determinism

Diff output must be deterministic.

The same two packets should always produce the same ordered diff result.

## Scope

The initial implementation should compare Work Packets field-by-field using stable JSON-compatible paths.

Examples:

```text
status
riskClass
verificationPlan.status
metadata.updatedAt
acceptanceCriteria
handoffRequirements
```

## Non-Goals

The initial diff engine should not:

1. evaluate lifecycle legality;
2. evaluate readiness;
3. evaluate done status;
4. infer risk;
5. perform semantic natural-language comparison;
6. understand moved array items as moves;
7. produce human prose review findings.

## Future Expansion

Future diffing may support:

* JSON Patch output;
* Markdown diff rendering;
* risk-sensitive diff summaries;
* artifact graph impact analysis;
* policy-aware diff classification;
* acceptance criteria evidence mapping.