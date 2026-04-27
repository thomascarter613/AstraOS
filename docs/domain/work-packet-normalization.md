# Work Packet Normalization

## Status

Precode foundation document.

## Purpose

This document defines the normalization model for Astra Work Packets.

Normalization prepares manually authored or machine-generated Work Packets for stable validation, comparison, storage, and review.

## Core Principle

Normalization may clean representation, but it must not invent meaning.

Astra may trim whitespace, remove duplicate list entries, remove blank list entries, and normalize metadata shape. Astra must not fabricate acceptance criteria, risks, verification evidence, source artifacts, or done evidence.

## Validity, Readiness, Done, and Normalization

Normalization is separate from schema validation, readiness checking, and done checking.

Normalization answers:

```text
Can this Work Packet be represented in a cleaner, more deterministic form?
```

Validation answers:

```text
Does this object satisfy the Work Packet schema?
```

Readiness answers:

```text
Is this Work Packet prepared for execution?
```

Done answers:

```text
Has this Work Packet been completed, verified, and handed off?
```

## Allowed Normalization

The Work Packet Engine may:

1. trim leading and trailing whitespace from string fields;
2. trim string values inside arrays;
3. remove empty strings from arrays;
4. remove duplicate array entries while preserving original order;
5. normalize optional Scrum context fields;
6. normalize optional metadata fields;
7. set `metadata.updatedAt` when explicitly requested.

## Forbidden Normalization

The Work Packet Engine must not:

1. generate fake acceptance criteria;
2. generate fake source artifacts;
3. generate fake verification commands;
4. generate fake verification evidence;
5. change risk class automatically;
6. mark verification as passed;
7. change lifecycle status;
8. hide invalid schema fields;
9. hide readiness failures;
10. hide done failures.

## Example

Input:

```yaml
title: "  Implement lifecycle rules  "
sourceArtifacts:
  - "docs/domain/work-packet-lifecycle.md"
  - " docs/domain/work-packet-lifecycle.md "
  - ""
```

Normalized output:

```yaml
title: "Implement lifecycle rules"
sourceArtifacts:
  - "docs/domain/work-packet-lifecycle.md"
```

## Duplicate Handling

Duplicate list entries should be removed after trimming.

For example:

```text
"docs/a.md"
" docs/a.md "
```

should become one entry:

```text
"docs/a.md"
```

## Blank Entry Handling

Blank strings should be removed from arrays.

For example:

```yaml
acceptanceCriteria:
  - ""
  - "Verification passes."
```

should become:

```yaml
acceptanceCriteria:
  - "Verification passes."
```

If the array becomes empty, readiness or done rules should report that. Normalization should not replace the missing content.

## Metadata Handling

Normalization may trim metadata fields and normalize `relatedArtifacts`.

Normalization should preserve existing timestamps unless the caller explicitly provides an updated timestamp.

## Implementation Boundary

The Work Packet Engine owns normalization.

The CLI may expose normalization later, but it must call the Work Packet Engine rather than reimplementing normalization behavior.

## Future Expansion

Future normalization may include:

* deterministic key ordering for serialization;
* schema migration from older versions;
* canonical ID casing rules;
* artifact path normalization;
* policy-aware normalization warnings.