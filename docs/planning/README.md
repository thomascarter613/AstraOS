# Astra SDLC Framework Precode Foundation Catalog v0.1

All projects need a **precode foundation layer** including all documents, policies, specifications, examples, templates, architectural maps, operating agreements, etc. that make the later code work coherent.

While a backlog says **what to build**, the precode foundation says:

```text
Why this exists.
What the system is allowed to be.
What the system is forbidden to become.
What each concept means.
What each package owns.
What every workflow must prove.
What every AI-assisted action must respect.
What “ready,” “done,” “verified,” and “safe” mean.
```

Below is the organized catalog of those materials, in the order they should be produced.

Legend:

```text
Status:
- Existing: file should already exist with real content
- Placeholder: scaffold likely created it, but it needs real content
- New: should be created

Priority:
- M: Must-have before serious implementation
- S: Should-have before Level 2/3 maturity
- C: Could-have before Level 5 maturity
```

---

# 0. Production Order Overview

Produce the precode foundation in this order:

```text
Phase 0  Repository orientation and governance shell
Phase 1  Constitutional project foundation
Phase 2  SDLC, Agile, and Scrum operating doctrine
Phase 3  Core domain and artifact model
Phase 4  Work Packet doctrine
Phase 5  Workflow protocols
Phase 6  Governance, authority, and policy controls
Phase 7  Architecture and package boundary design
Phase 8  Verification, evidence, and quality model
Phase 9  Context, memory, and prompt-kernel doctrine
Phase 10 Implementation planning and slice control
Phase 11 User-facing docs and operator guides
Phase 12 Operations, release, and lifecycle management
```

Because those directly govern the next engineering slices, the immediate next precode work should focus on **Phases 1–5**.

---

# Phase 0 — Repository Orientation and Governance Shell

Make the repository understandable and safe to work in.

| Order | ID       | Artifact                      | Location                                            | Type                    | Status               | Priority | Purpose                                                                         |
| ----: | -------- | ----------------------------- | --------------------------------------------------- | ----------------------- | -------------------- | -------- | ------------------------------------------------------------------------------- |
|  0.01 | PFD-0001 | Root README                   | `README.md`                                         | Orientation             | Existing             | M        | Explains what Astra is, current status, and where to start.                     |
|  0.02 | PFD-0002 | Repository contribution guide | `CONTRIBUTING.md`                                   | Governance              | New                  | M        | Defines branch names, commits, PR expectations, verification before push.       |
|  0.03 | PFD-0003 | Security policy               | `SECURITY.md`                                       | Governance              | New or Placeholder   | M        | Defines vulnerability reporting, secret handling, security-sensitive changes.   |
|  0.04 | PFD-0004 | License decision note         | `LICENSE.md` or `docs/governance/license-policy.md` | Governance              | Existing placeholder | S        | Captures whether this remains private, source-available, or open source.        |
|  0.05 | PFD-0005 | Repository contract policy    | `docs/process/repository-contract.md`               | Process                 | New                  | M        | Explains what the repo contract test enforces and why.                          |
|  0.06 | PFD-0006 | Local verification guide      | `docs/process/local-verification.md`                | Process                 | New                  | M        | Defines `bun run verify`, `repo:contract`, and expected green-state discipline. |
|  0.07 | PFD-0007 | Conventional Commits guide    | `docs/process/conventional-commits.md`              | Process                 | New                  | M        | Defines atomic commit style for this project.                                   |
|  0.08 | PFD-0008 | Branching strategy            | `docs/process/branching-strategy.md`                | Process                 | New                  | M        | Defines feature/fix/docs/test branches and merge expectations.                  |
|  0.09 | PFD-0009 | ADR index                     | `docs/adr/README.md`                                | Architecture governance | Placeholder          | M        | Lists all architecture decisions and their status.                              |
|  0.10 | PFD-0010 | ADR template                  | `docs/adr/0000-template.md`                         | Template                | New                  | M        | Standardizes future decisions.                                                  |

---

# Phase 1 — Constitutional Project Foundation

The highest-level documents that define what Astra is.

| Order | ID       | Artifact                                | Location                                      | Type               | Status   | Priority | Purpose                                                                           |
| ----: | -------- | --------------------------------------- | --------------------------------------------- | ------------------ | -------- | -------- | --------------------------------------------------------------------------------- |
|  1.01 | PFD-0101 | Astra SDLC Framework v0.1 Specification | `docs/specs/astra-sdlc-framework-v0.1.md`     | Constitution       | Existing | M        | The primary constitutional document for the system.                               |
|  1.02 | PFD-0102 | Vision and operating model              | `docs/product/vision-and-operating-model.md`  | Product foundation | New      | M        | Defines the project’s reason for existence and operating posture.                 |
|  1.03 | PFD-0103 | Product thesis                          | `docs/product/product-thesis.md`              | Product foundation | New      | M        | States the core thesis: AI must operate inside SDLC/Scrum artifacts.              |
|  1.04 | PFD-0104 | Problem statement                       | `docs/product/problem-statement.md`           | Product foundation | New      | M        | Defines the problem with ordinary AI coding assistants.                           |
|  1.05 | PFD-0105 | Target users and personas               | `docs/product/personas.md`                    | Product foundation | New      | S        | Defines solo engineer, team engineer, tech lead, Scrum facilitator, reviewer.     |
|  1.06 | PFD-0106 | Product principles                      | `docs/product/principles.md`                  | Product doctrine   | New      | M        | Artifact-first, verification-first, human-accountable, small-reviewable-changes.  |
|  1.07 | PFD-0107 | Non-goals                               | `docs/product/non-goals.md`                   | Scope control      | New      | M        | Defines what Astra v0.1 is not trying to do.                                      |
|  1.08 | PFD-0108 | Human/AI authority doctrine             | `docs/governance/human-ai-authority-model.md` | Governance         | New      | M        | Defines what AI may do, may suggest, and may never do without approval.           |
|  1.09 | PFD-0109 | Maturity model                          | `docs/product/maturity-model.md`              | Product roadmap    | New      | M        | Expands Level 0 through Level 5.                                                  |
|  1.10 | PFD-0110 | Glossary                                | `docs/reference/glossary.md`                  | Reference          | New      | M        | Canonical definitions for Work Packet, artifact, workflow, policy, evidence, etc. |

---

# Phase 2 — SDLC, Agile, and Scrum Operating Doctrine

Teach the framework how to think about software delivery.

## 2A. SDLC doctrine

| Order | ID       | Artifact                         | Location                                         | Type      | Status      | Priority | Purpose                                                        |
| ----: | -------- | -------------------------------- | ------------------------------------------------ | --------- | ----------- | -------- | -------------------------------------------------------------- |
|  2.01 | PFD-0201 | SDLC lifecycle overview          | `knowledge/sdlc/lifecycle-overview.md`           | Knowledge | Placeholder | M        | Defines Astra’s SDLC phase model.                              |
|  2.02 | PFD-0202 | Discovery phase doctrine         | `knowledge/sdlc/discovery.md`                    | Knowledge | Placeholder | M        | Defines discovery inputs, outputs, AI roles, exit criteria.    |
|  2.03 | PFD-0203 | Requirements phase doctrine      | `knowledge/sdlc/requirements.md`                 | Knowledge | Placeholder | M        | Defines requirements, acceptance criteria, NFRs.               |
|  2.04 | PFD-0204 | Architecture and design doctrine | `knowledge/sdlc/architecture-and-design.md`      | Knowledge | Placeholder | M        | Defines design reviews, ADRs, tradeoffs.                       |
|  2.05 | PFD-0205 | Implementation doctrine          | `knowledge/sdlc/implementation.md`               | Knowledge | Placeholder | M        | Defines implementation readiness and execution expectations.   |
|  2.06 | PFD-0206 | Testing and quality doctrine     | `knowledge/sdlc/testing-and-quality.md`          | Knowledge | Placeholder | M        | Defines evidence, tests, and verification gates.               |
|  2.07 | PFD-0207 | Security review doctrine         | `knowledge/sdlc/security-review.md`              | Knowledge | Placeholder | M        | Defines security-sensitive work and required controls.         |
|  2.08 | PFD-0208 | Release management doctrine      | `knowledge/sdlc/release-management.md`           | Knowledge | Placeholder | S        | Defines release notes, rollback, smoke tests.                  |
|  2.09 | PFD-0209 | Operations doctrine              | `knowledge/sdlc/operations-and-observability.md` | Knowledge | Placeholder | S        | Defines incident, logs, telemetry, postmortems.                |
|  2.10 | PFD-0210 | Maintenance doctrine             | `knowledge/sdlc/maintenance.md`                  | Knowledge | Placeholder | S        | Defines bugfixes, refactors, dependency updates.               |
|  2.11 | PFD-0211 | Continuous improvement doctrine  | `knowledge/sdlc/continuous-improvement.md`       | Knowledge | Placeholder | S        | Defines retrospectives and process improvement feedback loops. |

## 2B. Agile and Scrum doctrine

| Order | ID       | Artifact                            | Location                                        | Type      | Status      | Priority | Purpose                                                        |
| ----: | -------- | ----------------------------------- | ----------------------------------------------- | --------- | ----------- | -------- | -------------------------------------------------------------- |
|  2.12 | PFD-0212 | Agile values interpretation         | `knowledge/agile/agile-values.md`               | Knowledge | Placeholder | M        | Explains Agile values as applied to AI-assisted engineering.   |
|  2.13 | PFD-0213 | Agile principles interpretation     | `knowledge/agile/agile-principles.md`           | Knowledge | Placeholder | M        | Maps Agile principles to Astra behavior.                       |
|  2.14 | PFD-0214 | Empirical process control           | `knowledge/agile/empirical-process-control.md`  | Knowledge | Placeholder | S        | Defines transparency, inspection, adaptation.                  |
|  2.15 | PFD-0215 | Scrum overview                      | `knowledge/scrum/scrum-overview.md`             | Knowledge | Placeholder | M        | Canonical Scrum orientation.                                   |
|  2.16 | PFD-0216 | Product Goal doctrine               | `knowledge/scrum/product-goal.md`               | Knowledge | Placeholder | M        | Defines product goal as alignment anchor.                      |
|  2.17 | PFD-0217 | Product Backlog doctrine            | `knowledge/scrum/product-backlog.md`            | Knowledge | Placeholder | M        | Defines backlog items and refinement expectations.             |
|  2.18 | PFD-0218 | Product Backlog Refinement protocol | `knowledge/scrum/product-backlog-refinement.md` | Knowledge | Placeholder | M        | Defines refinement behavior and readiness.                     |
|  2.19 | PFD-0219 | Sprint Planning protocol            | `knowledge/scrum/sprint-planning.md`            | Knowledge | Placeholder | M        | Defines how AI assists planning without committing for humans. |
|  2.20 | PFD-0220 | Sprint Goal doctrine                | `knowledge/scrum/sprint-goal.md`                | Knowledge | Placeholder | M        | Defines sprint goal mapping.                                   |
|  2.21 | PFD-0221 | Sprint Backlog doctrine             | `knowledge/scrum/sprint-backlog.md`             | Knowledge | Placeholder | S        | Defines sprint execution context.                              |
|  2.22 | PFD-0222 | Daily Scrum support protocol        | `knowledge/scrum/daily-scrum.md`                | Knowledge | Placeholder | S        | Defines daily briefing behavior.                               |
|  2.23 | PFD-0223 | Definition of Done doctrine         | `knowledge/scrum/definition-of-done.md`         | Knowledge | Placeholder | M        | Defines Done as evidence-backed, not assertion-backed.         |
|  2.24 | PFD-0224 | Increment doctrine                  | `knowledge/scrum/increment.md`                  | Knowledge | Placeholder | S        | Defines what may count as an increment.                        |
|  2.25 | PFD-0225 | Sprint Review protocol              | `knowledge/scrum/sprint-review.md`              | Knowledge | Placeholder | S        | Defines demo, evidence, stakeholder feedback.                  |
|  2.26 | PFD-0226 | Sprint Retrospective protocol       | `knowledge/scrum/sprint-retrospective.md`       | Knowledge | Placeholder | S        | Defines process learning and action items.                     |
|  2.27 | PFD-0227 | Working agreements                  | `knowledge/scrum/working-agreements.md`         | Knowledge | Placeholder | M        | Defines how human and AI collaborate.                          |

---

# Phase 3 — Core Domain and Artifact Model

Define the conceptual model that all code should follow.

| Order | ID       | Artifact                         | Location                                          | Type   | Status | Priority | Purpose                                                                            |
| ----: | -------- | -------------------------------- | ------------------------------------------------- | ------ | ------ | -------- | ---------------------------------------------------------------------------------- |
|  3.01 | PFD-0301 | Domain model overview            | `docs/domain/domain-model-overview.md`            | Domain | New    | M        | Explains the Astra domain: artifacts, work packets, workflows, policies, evidence. |
|  3.02 | PFD-0302 | Artifact taxonomy                | `docs/domain/artifact-taxonomy.md`                | Domain | New    | M        | Defines ProductGoal, Epic, Feature, UserStory, Task, Bug, Spike, ADR, etc.         |
|  3.03 | PFD-0303 | Artifact metadata standard       | `docs/domain/artifact-metadata-standard.md`       | Domain | New    | M        | Defines id, title, type, status, owner, source, timestamps, relationships.         |
|  3.04 | PFD-0304 | Artifact lifecycle model         | `docs/domain/artifact-lifecycle-model.md`         | Domain | New    | M        | Defines draft, proposed, ready, in_progress, verified, released, superseded.       |
|  3.05 | PFD-0305 | Artifact relationship model      | `docs/domain/artifact-relationship-model.md`      | Domain | New    | M        | Defines parent, child, evidence, source, supersedes, blocked-by relationships.     |
|  3.06 | PFD-0306 | Traceability doctrine            | `docs/domain/traceability-doctrine.md`            | Domain | New    | M        | Defines goal → story → Work Packet → code → test → release → feedback chain.       |
|  3.07 | PFD-0307 | Artifact storage convention      | `docs/domain/artifact-storage-convention.md`      | Domain | New    | S        | Defines where artifacts live in repo and naming rules.                             |
|  3.08 | PFD-0308 | Artifact ID convention           | `docs/domain/artifact-id-convention.md`           | Domain | New    | M        | Defines IDs like `ASTRA-###`, `ADR-####`, `WP-####`.                               |
|  3.09 | PFD-0309 | Artifact status transition rules | `docs/domain/artifact-status-transition-rules.md` | Domain | New    | S        | Defines allowed state transitions for general artifacts.                           |

---

# Phase 4 — Work Packet Doctrine

The heart of the system and should be produced before code.

| Order | ID       | Artifact                               | Location                                                      | Type           | Status                | Priority | Purpose                                                    |
| ----: | -------- | -------------------------------------- | ------------------------------------------------------------- | -------------- | --------------------- | -------- | ---------------------------------------------------------- |
|  4.01 | PFD-0401 | Work Packet concept paper              | `docs/domain/work-packet-concept.md`                          | Domain         | New                   | M        | Explains what a Work Packet is and why it exists.          |
|  4.02 | PFD-0402 | Work Packet schema reference           | `docs/domain/work-packet-schema.md`                           | Schema docs    | New                   | M        | Documents every field currently in `WorkPacket`.           |
|  4.03 | PFD-0403 | Work Packet lifecycle                  | `docs/domain/work-packet-lifecycle.md`                        | Domain         | New                   | M        | Defines status transitions and lifecycle semantics.        |
|  4.04 | PFD-0404 | Work Packet readiness rules            | `docs/domain/work-packet-readiness.md`                        | Rule docs      | New                   | M        | Documents Definition of Ready checks.                      |
|  4.05 | PFD-0405 | Work Packet done rules                 | `docs/domain/work-packet-done.md`                             | Rule docs      | New                   | M        | Documents Definition of Done checks.                       |
|  4.06 | PFD-0406 | Work Packet risk classification        | `docs/domain/work-packet-risk-classification.md`              | Rule docs      | New                   | M        | Documents low, medium, high, critical risk classification. |
|  4.07 | PFD-0407 | Work Packet verification plan standard | `docs/domain/work-packet-verification-plan.md`                | Rule docs      | New                   | M        | Defines commands, required evidence, statuses.             |
|  4.08 | PFD-0408 | Work Packet handoff standard           | `docs/domain/work-packet-handoff-standard.md`                 | Rule docs      | New                   | M        | Defines handoff summary requirements.                      |
|  4.09 | PFD-0409 | Work Packet file format standard       | `docs/domain/work-packet-file-format.md`                      | Schema docs    | New                   | M        | Defines JSON/YAML support and extension rules.             |
|  4.10 | PFD-0410 | Work Packet examples index             | `artifacts/work-packets/README.md`                            | Artifact index | New                   | M        | Lists canonical example Work Packets.                      |
|  4.11 | PFD-0411 | Discovery Work Packet example          | `artifacts/work-packets/examples/discovery.example.yaml`      | Example        | New                   | M        | Demonstrates a discovery-phase packet.                     |
|  4.12 | PFD-0412 | Requirements Work Packet example       | `artifacts/work-packets/examples/requirements.example.yaml`   | Example        | New                   | M        | Demonstrates requirements-phase packet.                    |
|  4.13 | PFD-0413 | Architecture Work Packet example       | `artifacts/work-packets/examples/architecture.example.yaml`   | Example        | New                   | M        | Demonstrates design-phase packet.                          |
|  4.14 | PFD-0414 | Implementation Work Packet example     | `artifacts/work-packets/examples/implementation.example.yaml` | Example        | Existing/Needs update | M        | Current `AUTH-014` should be updated to canonical schema.  |
|  4.15 | PFD-0415 | Review Work Packet example             | `artifacts/work-packets/examples/review.example.yaml`         | Example        | New                   | S        | Demonstrates code-review-phase packet.                     |
|  4.16 | PFD-0416 | Release Work Packet example            | `artifacts/work-packets/examples/release.example.yaml`        | Example        | New                   | S        | Demonstrates release-phase packet.                         |
|  4.17 | PFD-0417 | Retrospective Work Packet example      | `artifacts/work-packets/examples/retrospective.example.yaml`  | Example        | New                   | S        | Demonstrates continuous-improvement packet.                |

---

# Phase 5 — Workflow Protocols

Define how the AI should move through work.

| Order | ID       | Artifact                          | Location                                      | Type        | Status      | Priority | Purpose                                                                  |
| ----: | -------- | --------------------------------- | --------------------------------------------- | ----------- | ----------- | -------- | ------------------------------------------------------------------------ |
|  5.01 | PFD-0501 | Universal Astra workflow protocol | `docs/process/universal-workflow-protocol.md` | Process     | New         | M        | Defines classify → context → packet → plan → execute → verify → handoff. |
|  5.02 | PFD-0502 | Backlog refinement workflow       | `workflows/backlog-refinement.yaml`           | Workflow    | Placeholder | M        | Machine-readable refinement workflow.                                    |
|  5.03 | PFD-0503 | Sprint planning workflow          | `workflows/sprint-planning.yaml`              | Workflow    | Placeholder | S        | Machine-readable planning workflow.                                      |
|  5.04 | PFD-0504 | Daily Scrum workflow              | `workflows/daily-scrum.yaml`                  | Workflow    | Placeholder | S        | Daily status summarization workflow.                                     |
|  5.05 | PFD-0505 | Implementation workflow           | `workflows/implementation.yaml`               | Workflow    | Placeholder | M        | Core implementation protocol.                                            |
|  5.06 | PFD-0506 | Code review workflow              | `workflows/code-review.yaml`                  | Workflow    | Placeholder | M        | Review protocol.                                                         |
|  5.07 | PFD-0507 | Security review workflow          | `workflows/security-review.yaml`              | Workflow    | Placeholder | M        | Security-sensitive review protocol.                                      |
|  5.08 | PFD-0508 | Release workflow                  | `workflows/release.yaml`                      | Workflow    | Placeholder | S        | Release readiness and handoff protocol.                                  |
|  5.09 | PFD-0509 | Incident response workflow        | `workflows/incident-response.yaml`            | Workflow    | Placeholder | S        | Incident triage and postmortem protocol.                                 |
|  5.10 | PFD-0510 | Retrospective workflow            | `workflows/retrospective.yaml`                | Workflow    | Placeholder | S        | Process-improvement workflow.                                            |
|  5.11 | PFD-0511 | Context handoff workflow          | `workflows/context-handoff.yaml`              | Workflow    | Placeholder | M        | Defines session handoff and resume behavior.                             |
|  5.12 | PFD-0512 | Workflow schema reference         | `docs/process/workflow-schema.md`             | Schema docs | New         | M        | Defines YAML workflow fields before implementing workflow engine.        |

---

# Phase 6 — Governance, Authority, and Policy Controls

Guardrails.

| Order | ID       | Artifact                        | Location                                       | Type            | Status      | Priority | Purpose                                                       |
| ----: | -------- | ------------------------------- | ---------------------------------------------- | --------------- | ----------- | -------- | ------------------------------------------------------------- |
|  6.01 | PFD-0601 | Authority boundaries policy     | `policies/authority-boundaries.yaml`           | Policy          | Placeholder | M        | Defines what AI may and may not do.                           |
|  6.02 | PFD-0602 | AI action limits policy         | `policies/ai-action-limits.yaml`               | Policy          | Placeholder | M        | Defines allowed/forbidden actions.                            |
|  6.03 | PFD-0603 | Human approval gates policy     | `policies/human-approval-gates.yaml`           | Policy          | Placeholder | M        | Defines when human approval is required.                      |
|  6.04 | PFD-0604 | Change risk levels policy       | `policies/change-risk-levels.yaml`             | Policy          | Placeholder | M        | Defines low/medium/high/critical risk.                        |
|  6.05 | PFD-0605 | Security rules policy           | `policies/security-rules.yaml`                 | Policy          | Placeholder | M        | Defines security-sensitive work and review controls.          |
|  6.06 | PFD-0606 | Definition of Ready policy      | `policies/definition-of-ready.yaml`            | Policy          | Placeholder | M        | Machine-readable readiness policy.                            |
|  6.07 | PFD-0607 | Definition of Done policy       | `policies/definition-of-done.yaml`             | Policy          | Placeholder | M        | Machine-readable done policy.                                 |
|  6.08 | PFD-0608 | Traceability rules policy       | `policies/traceability-rules.yaml`             | Policy          | Placeholder | M        | Defines required artifact links.                              |
|  6.09 | PFD-0609 | Artifact retention policy       | `policies/artifact-retention.yaml`             | Policy          | Placeholder | S        | Defines what is retained and superseded.                      |
|  6.10 | PFD-0610 | Governance policy overview      | `docs/governance/policy-overview.md`           | Governance docs | New         | M        | Human-readable overview of all policies.                      |
|  6.11 | PFD-0611 | Human override protocol         | `docs/governance/human-override-protocol.md`   | Governance docs | New         | M        | Defines how humans override AI recommendations safely.        |
|  6.12 | PFD-0612 | AI refusal and escalation rules | `docs/governance/ai-refusal-and-escalation.md` | Governance docs | New         | S        | Defines when the assistant should refuse, defer, or escalate. |
|  6.13 | PFD-0613 | Auditability doctrine           | `docs/governance/auditability-doctrine.md`     | Governance docs | New         | M        | Defines what must be recorded and why.                        |

---

# Phase 7 — Architecture and Package Boundary Design

Prevent the monorepo from becoming a pile of packages.

| Order | ID       | Artifact                         | Location                                             | Type         | Status | Priority | Purpose                                                         |
| ----: | -------- | -------------------------------- | ---------------------------------------------------- | ------------ | ------ | -------- | --------------------------------------------------------------- |
|  7.01 | PFD-0701 | Architecture overview            | `docs/architecture/overview.md`                      | Architecture | New    | M        | Explains the whole Astra architecture.                          |
|  7.02 | PFD-0702 | System context diagram           | `docs/architecture/c4/context.md`                    | Architecture | New    | S        | Shows Astra in relation to human, repo, issue tracker, CI, LLM. |
|  7.03 | PFD-0703 | Container diagram                | `docs/architecture/c4/container.md`                  | Architecture | New    | S        | Shows CLI, API, services, packages, workbench.                  |
|  7.04 | PFD-0704 | Component diagram                | `docs/architecture/c4/components.md`                 | Architecture | New    | S        | Shows major package responsibilities.                           |
|  7.05 | PFD-0705 | Monorepo boundary map            | `docs/architecture/monorepo-boundaries.md`           | Architecture | New    | M        | Defines apps vs packages vs services vs tools.                  |
|  7.06 | PFD-0706 | Package responsibility matrix    | `docs/architecture/package-responsibility-matrix.md` | Architecture | New    | M        | Defines ownership of every package.                             |
|  7.07 | PFD-0707 | Dependency direction rules       | `docs/architecture/dependency-direction-rules.md`    | Architecture | New    | M        | Defines legal dependencies among packages.                      |
|  7.08 | PFD-0708 | Work Packet Engine architecture  | `docs/architecture/work-packet-engine.md`            | Architecture | New    | M        | Documents package internals and public API.                     |
|  7.09 | PFD-0709 | CLI architecture                 | `docs/architecture/cli-architecture.md`              | Architecture | New    | M        | Defines command router, output, exit codes.                     |
|  7.10 | PFD-0710 | Workflow Engine architecture     | `docs/architecture/workflow-engine.md`               | Architecture | New    | S        | Precode design before workflow implementation.                  |
|  7.11 | PFD-0711 | Policy Engine architecture       | `docs/architecture/policy-engine.md`                 | Architecture | New    | S        | Precode design before policy implementation.                    |
|  7.12 | PFD-0712 | Verification Engine architecture | `docs/architecture/verification-engine.md`           | Architecture | New    | S        | Precode design before command runner implementation.            |
|  7.13 | PFD-0713 | Context Engine architecture      | `docs/architecture/context-engine.md`                | Architecture | New    | S        | Precode design before context loading.                          |
|  7.14 | PFD-0714 | Memory Engine architecture       | `docs/architecture/memory-engine.md`                 | Architecture | New    | C        | Precode design before durable memory work.                      |
|  7.15 | PFD-0715 | Workbench architecture           | `docs/architecture/workbench.md`                     | Architecture | New    | C        | UI architecture.                                                |
|  7.16 | PFD-0716 | API architecture                 | `docs/architecture/api.md`                           | Architecture | New    | S        | API boundary and endpoint strategy.                             |
|  7.17 | PFD-0717 | Service architecture             | `docs/architecture/services.md`                      | Architecture | New    | C        | Service split and responsibilities.                             |

---

# Phase 8 — Verification, Evidence, and Quality Model

Define how Astra proves things.

| Order | ID       | Artifact                              | Location                                    | Type      | Status      | Priority | Purpose                                                 |
| ----: | -------- | ------------------------------------- | ------------------------------------------- | --------- | ----------- | -------- | ------------------------------------------------------- |
|  8.01 | PFD-0801 | Verification model                    | `docs/quality/verification-model.md`        | Quality   | New         | M        | Defines evidence-based verification.                    |
|  8.02 | PFD-0802 | Testing strategy                      | `knowledge/engineering/testing-strategy.md` | Knowledge | Placeholder | M        | Defines unit, integration, smoke, contract tests.       |
|  8.03 | PFD-0803 | Verification evidence model           | `docs/quality/verification-evidence.md`     | Quality   | New         | M        | Defines command results, test evidence, skipped checks. |
|  8.04 | PFD-0804 | Quality gates                         | `docs/quality/quality-gates.md`             | Quality   | New         | M        | Defines what must pass before merge/release.            |
|  8.05 | PFD-0805 | TypeScript quality standard           | `docs/quality/typescript-standard.md`       | Quality   | New         | M        | Defines strict TS expectations.                         |
|  8.06 | PFD-0806 | Biome formatting and linting standard | `docs/quality/biome-standard.md`            | Quality   | New         | S        | Defines formatter/linter policy.                        |
|  8.07 | PFD-0807 | Test naming and placement standard    | `docs/quality/test-organization.md`         | Quality   | New         | M        | Defines where tests live and how they are named.        |
|  8.08 | PFD-0808 | Repo contract test standard           | `docs/quality/repo-contract-tests.md`       | Quality   | New         | M        | Defines invariant tests for repo shape.                 |
|  8.09 | PFD-0809 | CI verification doctrine              | `docs/quality/ci-verification.md`           | Quality   | New         | S        | Defines how CI mirrors local verification.              |
|  8.10 | PFD-0810 | Failure reporting standard            | `docs/quality/failure-reporting.md`         | Quality   | New         | S        | Defines how failures are summarized and handed off.     |

---

# Phase 9 — Context, Memory, and Prompt-Kernel Doctrine

Where Astra becomes an AI-native process framework instead of just a CLI.

| Order | ID       | Artifact                                | Location                                             | Type            | Status | Priority | Purpose                                                              |
| ----: | -------- | --------------------------------------- | ---------------------------------------------------- | --------------- | ------ | -------- | -------------------------------------------------------------------- |
|  9.01 | PFD-0901 | Context model                           | `docs/ai/context-model.md`                           | AI doctrine     | New    | M        | Defines what context is and how it is selected.                      |
|  9.02 | PFD-0902 | Context source taxonomy                 | `docs/ai/context-source-taxonomy.md`                 | AI doctrine     | New    | M        | Defines docs, repo files, issues, CI, memory, user input as sources. |
|  9.03 | PFD-0903 | Context pack standard                   | `docs/ai/context-pack-standard.md`                   | AI doctrine     | New    | M        | Defines the context packet assembled for AI work.                    |
|  9.04 | PFD-0904 | Session chronicle standard              | `docs/ai/session-chronicle-standard.md`              | AI doctrine     | New    | S        | Defines how work sessions are summarized.                            |
|  9.05 | PFD-0905 | Memory admission policy                 | `docs/ai/memory-admission-policy.md`                 | AI doctrine     | New    | S        | Defines what becomes durable memory.                                 |
|  9.06 | PFD-0906 | Memory conflict and supersession policy | `docs/ai/memory-conflict-policy.md`                  | AI doctrine     | New    | C        | Defines how contradictory memories are resolved.                     |
|  9.07 | PFD-0907 | Prompt contract model                   | `docs/ai/prompt-contract-model.md`                   | AI doctrine     | New    | M        | Defines role, task, context, constraints, output contract.           |
|  9.08 | PFD-0908 | Role-mode prompt doctrine               | `docs/ai/role-mode-prompts.md`                       | AI doctrine     | New    | M        | Defines prompt behavior for each role mode.                          |
|  9.09 | PFD-0909 | Product Analyst mode prompt             | `knowledge/templates/prompts/product-analyst.md`     | Prompt template | New    | M        | Template for product mode.                                           |
|  9.10 | PFD-0910 | Scrum Facilitator mode prompt           | `knowledge/templates/prompts/scrum-facilitator.md`   | Prompt template | New    | M        | Template for Scrum mode.                                             |
|  9.11 | PFD-0911 | Technical Architect mode prompt         | `knowledge/templates/prompts/technical-architect.md` | Prompt template | New    | M        | Template for architecture mode.                                      |
|  9.12 | PFD-0912 | Pair Engineer mode prompt               | `knowledge/templates/prompts/pair-engineer.md`       | Prompt template | New    | M        | Template for implementation mode.                                    |
|  9.13 | PFD-0913 | Reviewer mode prompt                    | `knowledge/templates/prompts/reviewer.md`            | Prompt template | New    | M        | Template for review mode.                                            |
|  9.14 | PFD-0914 | Release Engineer mode prompt            | `knowledge/templates/prompts/release-engineer.md`    | Prompt template | New    | S        | Template for release mode.                                           |
|  9.15 | PFD-0915 | Operations Analyst mode prompt          | `knowledge/templates/prompts/operations-analyst.md`  | Prompt template | New    | S        | Template for operations mode.                                        |
|  9.16 | PFD-0916 | AI handoff packet standard              | `docs/ai/handoff-packet-standard.md`                 | AI doctrine     | New    | M        | Defines how one session hands work to another.                       |

---

# Phase 10 — Implementation Planning and Slice Control

Control how we move from precode to code.

| Order | ID       | Artifact                                  | Location                                              | Type                | Status | Priority | Purpose                                                          |
| ----: | -------- | ----------------------------------------- | ----------------------------------------------------- | ------------------- | ------ | -------- | ---------------------------------------------------------------- |
| 10.01 | PFD-1001 | Product backlog                           | `docs/product/backlog.md`                             | Planning            | New    | M        | Converts the backlog we outlined into a canonical repo artifact. |
| 10.02 | PFD-1002 | Slice plan                                | `docs/product/implementation-slices.md`               | Planning            | New    | M        | Converts the slice list into canonical execution order.          |
| 10.03 | PFD-1003 | MVP implementation plan                   | `docs/product/mvp-implementation-plan.md`             | Planning            | New    | M        | Defines what v0.1 must include.                                  |
| 10.04 | PFD-1004 | Release roadmap                           | `docs/product/roadmap.md`                             | Planning            | New    | S        | Defines v0.1, v0.2, v0.3, Level 5 future.                        |
| 10.05 | PFD-1005 | Current state report                      | `docs/status/current-state.md`                        | Status              | New    | M        | Records current green baseline and completed commits.            |
| 10.06 | PFD-1006 | Next action protocol                      | `docs/process/next-action-protocol.md`                | Process             | New    | M        | Defines how we choose next branch/slice.                         |
| 10.07 | PFD-1007 | Atomic commit protocol                    | `docs/process/atomic-commit-protocol.md`              | Process             | New    | M        | Defines one concern per commit.                                  |
| 10.08 | PFD-1008 | Work Packet Engine implementation plan    | `docs/implementation/work-packet-engine-plan.md`      | Implementation plan | New    | M        | Detailed plan for Work Packet Engine completion.                 |
| 10.09 | PFD-1009 | CLI implementation plan                   | `docs/implementation/cli-plan.md`                     | Implementation plan | New    | M        | Detailed plan for CLI MVP.                                       |
| 10.10 | PFD-1010 | Architecture package implementation order | `docs/implementation/package-implementation-order.md` | Implementation plan | New    | S        | Defines which packages become real first.                        |

---

# Phase 11 — User-Facing Docs and Operator Guides

Make the system usable.

| Order | ID       | Artifact                                           | Location                                          | Type     | Status | Priority | Purpose                                                |
| ----: | -------- | -------------------------------------------------- | ------------------------------------------------- | -------- | ------ | -------- | ------------------------------------------------------ |
| 11.01 | PFD-1101 | Work Packet Engine user guide                      | `docs/guides/work-packet-engine.md`               | Guide    | New    | M        | Explains how to use the engine.                        |
| 11.02 | PFD-1102 | Work Packet authoring guide                        | `docs/guides/authoring-work-packets.md`           | Guide    | New    | M        | Explains how to write good packets.                    |
| 11.03 | PFD-1103 | CLI guide                                          | `docs/guides/cli.md`                              | Guide    | New    | S        | Explains future CLI commands.                          |
| 11.04 | PFD-1104 | Workflow authoring guide                           | `docs/guides/workflow-authoring.md`               | Guide    | New    | S        | Explains how to author workflows.                      |
| 11.05 | PFD-1105 | Policy authoring guide                             | `docs/guides/policy-authoring.md`                 | Guide    | New    | S        | Explains how to author policies.                       |
| 11.06 | PFD-1106 | AI collaboration guide                             | `docs/guides/ai-collaboration.md`                 | Guide    | New    | M        | Explains how a developer should use Astra with an LLM. |
| 11.07 | PFD-1107 | Example walkthrough: from idea to Work Packet      | `docs/tutorials/idea-to-work-packet.md`           | Tutorial | New    | S        | Shows discovery → requirements → packet.               |
| 11.08 | PFD-1108 | Example walkthrough: Work Packet to implementation | `docs/tutorials/work-packet-to-implementation.md` | Tutorial | New    | S        | Shows packet → plan → verify → handoff.                |
| 11.09 | PFD-1109 | Example walkthrough: review and release            | `docs/tutorials/review-and-release.md`            | Tutorial | New    | C        | Shows review → release → retro.                        |

---

# Phase 12 — Operations, Release, and Lifecycle Management

| Order | ID       | Artifact                    | Location                               | Type       | Status          | Priority | Purpose                                                            |
| ----: | -------- | --------------------------- | -------------------------------------- | ---------- | --------------- | -------- | ------------------------------------------------------------------ |
| 12.01 | PFD-1201 | Operations overview         | `docs/operations/overview.md`          | Operations | Placeholder/New | S        | Explains how Astra is operated locally and eventually as services. |
| 12.02 | PFD-1202 | Runbook index               | `docs/runbooks/README.md`              | Runbook    | Placeholder     | S        | Lists runbooks.                                                    |
| 12.03 | PFD-1203 | Local development runbook   | `docs/runbooks/local-development.md`   | Runbook    | New             | M        | How to install, verify, test, and recover.                         |
| 12.04 | PFD-1204 | Failed verification runbook | `docs/runbooks/failed-verification.md` | Runbook    | New             | M        | How to respond when `bun run verify` fails.                        |
| 12.05 | PFD-1205 | Broken workspace runbook    | `docs/runbooks/broken-workspace.md`    | Runbook    | New             | S        | How to diagnose package/workspace failures.                        |
| 12.06 | PFD-1206 | Release checklist           | `docs/release/release-checklist.md`    | Release    | New             | S        | Defines release preparation.                                       |
| 12.07 | PFD-1207 | Changelog process           | `docs/release/changelog-process.md`    | Release    | New             | S        | Defines how release notes are generated.                           |
| 12.08 | PFD-1208 | Versioning policy           | `docs/release/versioning-policy.md`    | Release    | New             | S        | Defines package and framework version rules.                       |
| 12.09 | PFD-1209 | Internal v0.1 release plan  | `docs/release/v0.1-release-plan.md`    | Release    | New             | S        | Defines what counts as v0.1 complete.                              |

---

# Immediate Precode Batch

This is the smallest precode batch that gives the project a real foundation without stopping progress for weeks. Produce these **twelve files first**.


| Order | File                                                 | Why it comes now                            |
| ----: | ---------------------------------------------------- | ------------------------------------------- |
|     1 | `docs/product/vision-and-operating-model.md`         | Anchors the whole project.                  |
|     2 | `docs/product/product-thesis.md`                     | Captures the central idea clearly.          |
|     3 | `docs/governance/human-ai-authority-model.md`        | Prevents AI authority drift.                |
|     4 | `docs/domain/domain-model-overview.md`               | Establishes the conceptual domain.          |
|     5 | `docs/domain/artifact-taxonomy.md`                   | Defines the objects Astra manipulates.      |
|     6 | `docs/domain/work-packet-concept.md`                 | Explains the central abstraction.           |
|     7 | `docs/domain/work-packet-schema.md`                  | Documents what we already implemented.      |
|     8 | `docs/domain/work-packet-lifecycle.md`               | Needed before lifecycle transition code.    |
|     9 | `docs/process/universal-workflow-protocol.md`        | Defines how work moves through Astra.       |
|    10 | `docs/architecture/package-responsibility-matrix.md` | Prevents package boundary confusion.        |
|    11 | `docs/product/backlog.md`                            | Captures the backlog as a repo artifact.    |
|    12 | `docs/product/implementation-slices.md`              | Captures the slice plan as a repo artifact. |

Recommended branch:

```bash
git checkout -b docs/precode-foundation
```

Recommended commit:

```bash
git add docs
git commit -m "docs: add astra precode foundation"
```

---

# The Best Next Move

The correct next move is **not another code slice yet**.

The correct next move is to create the **Precode Foundation Batch 1**:

```text
docs/product/vision-and-operating-model.md
docs/product/product-thesis.md
docs/governance/human-ai-authority-model.md
docs/domain/domain-model-overview.md
docs/domain/artifact-taxonomy.md
docs/domain/work-packet-concept.md
docs/domain/work-packet-schema.md
docs/domain/work-packet-lifecycle.md
docs/process/universal-workflow-protocol.md
docs/architecture/package-responsibility-matrix.md
docs/product/backlog.md
docs/product/implementation-slices.md
```

After that batch is committed, the next code slice should be:

```text
feat(work-packet-engine): add canonical work packet examples
```

That way the examples are not arbitrary. They will be derived from the documented 
domain model, schema, lifecycle, and process doctrine.
