
# Human/AI Authority Model

## Status

Precode foundation document.

## Purpose

This document defines the authority boundary between the human engineer and the AI collaborator in Astra.

Astra exists to make AI assistance more useful, but it must not confuse assistance with accountability.

## Core Principle

The human remains accountable.

The AI may assist, propose, draft, analyze, classify, generate, validate, and summarize. The AI may not silently become the final authority over product, architecture, security, release, or operational decisions.

## Authority Classes

Astra recognizes four authority classes:

```text
Informational
Advisory
Executable
Consequential
```

## Informational Authority

The AI may explain concepts, summarize documents, describe options, and compare trade-offs.

Examples:

* explain a workflow;
* summarize a Work Packet;
* describe an SDLC phase;
* explain a validation error.

Human approval is not normally required.

## Advisory Authority

The AI may recommend actions, propose designs, draft artifacts, and identify risks.

Examples:

* propose backlog items;
* draft acceptance criteria;
* recommend a slice order;
* suggest a commit message;
* identify missing tests;
* recommend a safer architecture.

The human must remain free to accept, reject, or modify recommendations.

## Executable Authority

The AI may perform local actions if the human has granted permission or the project policy allows it.

Examples:

* edit files;
* generate tests;
* run local verification commands;
* create draft artifacts;
* generate handoff summaries.

Executable authority must be bounded by Work Packet allowed actions and forbidden actions.

## Consequential Authority

The AI may not perform consequential actions without explicit human approval.

Consequential actions include:

* committing code;
* pushing branches;
* merging pull requests;
* deploying to production;
* modifying secrets;
* deleting data;
* changing security policy;
* changing architecture decisions;
* changing release status;
* closing incidents;
* marking work complete.

## Human-Only Decisions

The following decisions are human-only:

1. accepting product scope;
2. approving sprint commitment;
3. approving architecture decisions;
4. accepting security risk;
5. approving release;
6. closing production incidents;
7. approving policy changes;
8. deciding whether work is truly done.

## AI Must Disclose

The AI must disclose:

* assumptions;
* uncertainty;
* missing artifacts;
* skipped checks;
* failed checks;
* risk classifications;
* policy conflicts;
* architecture drift;
* security-sensitive changes;
* human approvals required.

## AI Must Not

The AI must not:

1. hide uncertainty;
2. invent missing approval;
3. silently change scope;
4. silently change architecture;
5. mark failed verification as success;
6. bury security risks;
7. modify secrets;
8. delete user data;
9. deploy production changes;
10. claim work is done without evidence.

## Work Packet Enforcement

Each Work Packet should include:

* allowed actions;
* forbidden actions;
* risk class;
* verification plan;
* handoff requirements.

The Work Packet is the immediate authority boundary for a unit of work.

## Policy Enforcement

Future policy engine behavior should evaluate:

```text
requested action
  + current Work Packet
  + risk class
  + human approval state
  + repository policy
  = allow / deny / require approval
```

## Escalation

When a request exceeds AI authority, the AI should produce an escalation note.

An escalation note should include:

* requested action;
* reason approval is required;
* risk class;
* suggested human decision;
* consequences of proceeding;
* safer alternative if available.

## Governance Rule

No Astra component should be designed in a way that makes AI authority implicit.

Every authority escalation should be explicit, inspectable, and testable.

