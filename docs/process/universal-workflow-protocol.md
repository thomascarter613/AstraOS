# Universal Astra Workflow Protocol

## Status

Precode foundation document.

## Purpose

This document defines the common workflow protocol for Astra-assisted work.

Every specific workflow should follow this universal shape unless a documented exception exists.

## Universal Protocol

```text
1. Identify request.
2. Classify SDLC phase.
3. Determine role mode.
4. Determine Scrum / Agile context.
5. Load relevant artifacts.
6. Identify missing artifacts.
7. Create or update Work Packet.
8. Check validity.
9. Check readiness.
10. Propose execution plan.
11. Execute allowed actions.
12. Collect verification evidence.
13. Check Definition of Done.
14. Generate handoff.
15. Record follow-up or retrospective learning.
```

## Step 1 — Identify Request

The system should restate the user’s request in operational terms.

Example:

```text
User asked to implement Work Packet lifecycle transitions.
```

## Step 2 — Classify SDLC Phase

The request should be mapped to one or more SDLC phases.

Examples:

* discovery;
* requirements;
* architecture_and_design;
* implementation;
* testing_and_verification;
* review;
* release;
* operations;
* continuous_improvement.

## Step 3 — Determine Role Mode

The system should identify the role mode.

Examples:

* product_analyst;
* technical_architect;
* pair_engineer;
* reviewer.

## Step 4 — Determine Scrum / Agile Context

If applicable, identify:

* product goal;
* sprint goal;
* backlog item;
* sprint;
* increment;
* retrospective action.

## Step 5 — Load Relevant Artifacts

Relevant artifacts may include:

* Work Packet;
* product docs;
* architecture docs;
* ADRs;
* policies;
* workflows;
* test evidence;
* current repository state.

## Step 6 — Identify Missing Artifacts

If important artifacts are missing, the system should say so.

Missing artifacts do not always block work, but they should be explicit.

## Step 7 — Create or Update Work Packet

If the work is meaningful, create or update a Work Packet.

The Work Packet becomes the immediate source of truth for the unit of work.

## Step 8 — Check Validity

A valid packet satisfies the schema.

Invalid packets must not proceed to execution.

## Step 9 — Check Readiness

A ready packet satisfies Definition of Ready.

Readiness is not the same as schema validity.

## Step 10 — Propose Execution Plan

The plan should be small, ordered, and reviewable.

A plan should identify:

* files likely to change;
* tests likely to change;
* expected verification;
* risks;
* human decisions required.

## Step 11 — Execute Allowed Actions

Only actions allowed by the Work Packet and project policy should be executed.

Forbidden actions must be rejected or escalated.

## Step 12 — Collect Verification Evidence

Verification evidence may include:

* typecheck;
* lint;
* tests;
* build;
* contract checks;
* manual review;
* generated reports.

## Step 13 — Check Definition of Done

Done requires evidence.

The system must not confuse “code was written” with “work is done.”

## Step 14 — Generate Handoff

The handoff should include:

* summary;
* changed files;
* acceptance criteria mapping;
* verification results;
* risks;
* assumptions;
* unverified items;
* required human review.

## Step 15 — Record Learning

If the work reveals process gaps, missing policies, recurring failures, or useful conventions, record follow-up items.

## Workflow Invariant

Every Astra workflow should preserve this invariant:

```text
No meaningful AI-assisted engineering work should move from intent to completion without traceable artifacts and verification evidence.
```

