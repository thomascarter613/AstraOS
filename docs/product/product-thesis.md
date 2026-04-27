
# Astra SDLC Framework — Product Thesis

## Status

Precode foundation document.

## Thesis

Modern AI coding assistants are useful but incomplete because they are usually optimized around code generation rather than software delivery.

A serious engineering assistant must understand not only code, but the process around code:

* why the work exists;
* what lifecycle phase it belongs to;
* what artifact authorizes it;
* what constraints govern it;
* what acceptance criteria define success;
* what verification evidence is required;
* what risks must be surfaced;
* what human approvals are necessary;
* what handoff is needed for continuity.

Astra’s thesis is that AI assistance becomes dramatically more reliable when it is bound to SDLC, Agile, Scrum, and engineering governance artifacts.

## Problem With Ordinary AI Coding Assistance

Ordinary AI coding assistance often fails in predictable ways:

1. It treats all requests as implementation requests.
2. It generates code before requirements are ready.
3. It makes architectural assumptions silently.
4. It does not preserve traceability.
5. It claims success without verification.
6. It loses context between sessions.
7. It does not distinguish low-risk from high-risk work.
8. It does not understand sprint goals or delivery commitments.
9. It does not produce durable artifacts.
10. It does not know when a human must decide.

These failures are not merely prompt-quality problems. They are process-integration problems.

## Astra’s Core Answer

Astra’s core answer is the Work Packet.

A Work Packet is a structured unit of AI-assisted work. It defines:

* objective;
* SDLC phase;
* role mode;
* Scrum context;
* source artifacts;
* constraints;
* assumptions;
* risks;
* acceptance criteria;
* Definition of Ready;
* Definition of Done;
* allowed actions;
* forbidden actions;
* verification plan;
* handoff requirements;
* metadata.

The Work Packet turns a vague prompt into a governed unit of work.

## Product Claim

Astra should make an AI collaborator more useful by making it more constrained.

The system does not become better by giving the AI unlimited freedom. It becomes better by giving the AI the right context, the right artifacts, the right policies, the right workflow, and the right verification requirements.

## Intended Outcome

Astra should help a human engineer:

* move from idea to backlog item;
* refine backlog items into ready work;
* produce technical plans;
* implement changes in small slices;
* verify work locally;
* generate handoff summaries;
* preserve traceability;
* improve the process over time.

## Strategic Differentiator

The differentiator is not that Astra can call an LLM.

The differentiator is that Astra models software delivery itself as a first-class domain.

That domain includes:

```text
SDLC phases
Scrum concepts
artifacts
work packets
workflows
policies
verification evidence
context packs
memory records
audit events
handoffs
retrospective learning
```

## Design Implication

Because Astra’s domain is software delivery, the codebase must be built around explicit models and package boundaries.

The project must avoid becoming a pile of scripts around an LLM API.

The framework should be useful even before model integration because the underlying process models, artifact validation, CLI checks, and verification logic are valuable on their own.

## First Product Bet

The first product bet is:

> If a Work Packet is precise, validated, traceable, and verifiable, then AI-assisted engineering becomes safer, clearer, and more repeatable.

That is why the Work Packet Engine comes first.

