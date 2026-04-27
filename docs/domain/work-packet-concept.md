# Work Packet Concept

## Status

Precode foundation document.

## Purpose

This document explains the central concept of Astra: the Work Packet.

## Definition

A Work Packet is a structured unit of AI-assisted software delivery work.

It transforms a human request from an informal prompt into a governed, inspectable, verifiable unit of work.

## Why Work Packets Exist

Without Work Packets, AI assistance tends to operate from conversational ambiguity.

A user may say:

```text
Implement password reset.
```

That request is not enough.

A serious implementation requires answers to questions such as:

* What user story authorizes this?
* What acceptance criteria define success?
* What security constraints apply?
* What architecture decisions are relevant?
* What is the risk class?
* What files may be edited?
* What actions are forbidden?
* What verification commands must pass?
* What handoff is required?

The Work Packet captures those answers.

## Work Packet Responsibilities

A Work Packet should:

1. identify the objective;
2. identify the SDLC phase;
3. identify the AI role mode;
4. link source artifacts;
5. define constraints;
6. document assumptions;
7. document risks;
8. define acceptance criteria;
9. define readiness criteria;
10. define done criteria;
11. define allowed and forbidden actions;
12. define verification requirements;
13. define handoff requirements;
14. provide metadata for traceability.

## What a Work Packet Is Not

A Work Packet is not:

* a random task description;
* a prompt template;
* a ticket replacement;
* a full project plan;
* a hidden instruction block;
* a substitute for human judgment.

It may connect to a ticket, prompt, project plan, or AI context pack, but it is its own domain object.

## Work Packet Lifecycle

A Work Packet moves through states.

Initial states:

```text
draft
not_ready
ready
in_progress
blocked
in_review
verified
done
released
superseded
rejected
```

The lifecycle should be explicitly enforced by the Work Packet Engine.

## Relationship to SDLC

The Work Packet has an SDLC phase.

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

The phase determines which artifacts, checks, and workflows apply.

## Relationship to Scrum

The Work Packet may include Scrum context:

* Product Goal;
* Sprint Goal;
* Sprint;
* backlog item id.

This allows AI work to remain aligned with sprint and product objectives.

## Relationship to AI Role Modes

A Work Packet identifies the role mode the AI should operate in.

Examples:

* product_analyst;
* scrum_facilitator;
* technical_architect;
* pair_engineer;
* reviewer;
* release_engineer;
* operations_analyst.

Role modes constrain behavior and expected outputs.

## Relationship to Verification

A Work Packet must include a verification plan.

The verification plan defines:

* commands to run;
* required evidence;
* current verification status.

Astra should not consider a Work Packet done unless verification requirements are satisfied or explicitly waived by a human.

## Relationship to Handoff

A Work Packet must define handoff requirements.

A handoff is necessary because AI-assisted work often spans:

* multiple commands;
* multiple commits;
* multiple sessions;
* multiple humans;
* multiple review cycles.

The handoff preserves continuity.

## Design Principle

The Work Packet is the smallest unit of governed AI-assisted engineering work.

