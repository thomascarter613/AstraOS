# Work Packet Markdown Rendering

## Status

Precode foundation document.

## Purpose

This document defines the Markdown rendering model for Astra Work Packets.

Markdown rendering allows a structured Work Packet to be presented in a deterministic, human-readable form.

## Core Principle

Markdown rendering is presentation, not validation.

Rendering answers:

```text
How should this Work Packet be displayed to a human?
```

It does not answer:

```text
Is this packet valid?
Is this packet ready?
Is this packet done?
Is this packet safe?
```

Those questions belong to schema validation, readiness rules, done rules, policy, and review.

## Rendering Requirements

A rendered Work Packet should include:

1. title and identifier;
2. schema version;
3. status;
4. SDLC phase;
5. role mode;
6. risk class;
7. Scrum context;
8. objective;
9. source artifacts;
10. constraints;
11. assumptions;
12. risks;
13. acceptance criteria;
14. Definition of Ready;
15. Definition of Done;
16. allowed actions;
17. forbidden actions;
18. verification plan;
19. handoff requirements;
20. metadata.

## Determinism

Rendering must be deterministic.

The same Work Packet should always produce the same Markdown output.

## Non-Goals

The initial Markdown renderer should not:

1. validate the packet;
2. infer readiness;
3. infer done status;
4. generate prose not present in the packet;
5. call an LLM;
6. mutate the packet;
7. render rich HTML.

## Future Expansion

Future rendering may support:

* compact mode;
* checklist mode;
* review mode;
* handoff mode;
* Markdown tables;
* links to artifact files;
* diff-aware rendering;
* CLI output themes.
