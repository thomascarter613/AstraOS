# Astra SDLC Framework 

## Backlog and Implementation Slices

Below is the current project backlog and the complete implementation slice plan 
from the current state through the Level 5 target.

---

# 1. Backlog Structure

The Astra backlog  is organized into these major epics:

```text
EPIC-001  Project Foundation and Governance
EPIC-002  Work Packet Engine
EPIC-003  CLI
EPIC-004  Artifact Model
EPIC-005  SDLC Core
EPIC-006  Agile and Scrum Core
EPIC-007  Workflow Engine
EPIC-008  Policy Engine
EPIC-009  Verification Engine
EPIC-010  Context Engine
EPIC-011  Memory Engine
EPIC-012  Repo Analyzer
EPIC-013  Git Adapter
EPIC-014  Issue Tracker Adapter
EPIC-015  CI Adapter
EPIC-016  Orchestration Engine
EPIC-017  Prompt Kernel
EPIC-018  API
EPIC-019  Services
EPIC-020  Workbench UI
EPIC-021  Documentation System
EPIC-022  Telemetry and Audit
EPIC-023  Level 5 Delivery OS Capabilities
EPIC-024  Release, Packaging, and Distribution
```

---

# 2. Product Backlog

## EPIC-001 — Project Foundation and Governance

### ASTRA-001 — Establish green monorepo baseline

**Status:** Done
**Type:** Foundation
**Priority:** Must-have

Acceptance criteria:

```text
- Repository scaffold exists.
- Bun workspace is configured.
- TypeScript baseline exists.
- Biome baseline exists.
- Turbo remains available.
- Deterministic verification command works.
- Repo contract test exists.
```

---

### ASTRA-002 — Define repository contribution model

**Type:** Governance
**Priority:** Must-have

Acceptance criteria:

```text
- CONTRIBUTING.md exists.
- Branch naming convention is documented.
- Conventional Commit policy is documented.
- Local verification expectations are documented.
- PR expectations are documented.
```

---

### ASTRA-003 — Define repository contract policy

**Type:** Governance
**Priority:** Must-have

Acceptance criteria:

```text
- Repo contract test has explicit required files.
- Required architectural directories are enforced.
- Missing constitutional docs fail tests.
- Missing critical package entrypoints fail tests.
```

---

### ASTRA-004 — Add ADR process

**Type:** Governance
**Priority:** Must-have

Acceptance criteria:

```text
- ADR template exists.
- Initial ADR log exists.
- ADR numbering convention exists.
- ADRs are referenced from README.
```

---

### ASTRA-005 — Add security baseline

**Type:** Governance
**Priority:** Must-have

Acceptance criteria:

```text
- SECURITY.md exists.
- Security-sensitive change classes are documented.
- Vulnerability reporting path is documented.
- Secret-handling rules are documented.
```

---

## EPIC-002 — Work Packet Engine

### ASTRA-020 — Define canonical Work Packet schema

**Status:** Done or effectively included in current engine state
**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- Work Packet type exists.
- Schema version exists.
- Runtime validation exists.
- Required fields are enforced.
- Invalid packets fail validation.
```

---

### ASTRA-021 — Add Work Packet file I/O

**Status:** Done
**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- JSON Work Packets can be parsed.
- YAML Work Packets can be parsed.
- Work Packets can be written to disk.
- Invalid Work Packets cannot be written.
- File I/O tests pass.
```

---

### ASTRA-022 — Add canonical Work Packet examples

**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- Example discovery Work Packet exists.
- Example requirements Work Packet exists.
- Example architecture Work Packet exists.
- Example implementation Work Packet exists.
- Example review Work Packet exists.
- Example release Work Packet exists.
- Example retrospective Work Packet exists.
```

---

### ASTRA-023 — Add Work Packet lifecycle transitions

**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- Valid status transitions are defined.
- Invalid transitions fail.
- Transition function records prior and next status.
- Transition function requires reason.
- Tests cover allowed and forbidden transitions.
```

---

### ASTRA-024 — Add Work Packet readiness engine

**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- Definition of Ready rules are represented as rule objects.
- Readiness checks produce structured pass/fail results.
- Missing acceptance criteria fail readiness.
- Missing source artifacts fail readiness.
- Missing verification plan fails readiness.
```

---

### ASTRA-025 — Add Work Packet done engine

**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- Definition of Done rules are represented as rule objects.
- Done checks require passed verification.
- Done checks require handoff requirements.
- Done checks require human review statement.
- Work cannot be marked done while verification failed.
```

---

### ASTRA-026 — Add Work Packet risk classifier

**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- Risk inference exists.
- Explicit risk cannot be downgraded.
- High-risk terms are detected.
- Critical-risk terms are detected.
- Tests prove risk behavior.
```

---

### ASTRA-027 — Add Work Packet handoff generator

**Type:** Core Engine
**Priority:** Must-have

Acceptance criteria:

```text
- Human-readable handoff summary can be generated.
- Summary includes objective.
- Summary includes acceptance criteria.
- Summary includes risks.
- Summary includes verification state.
- Summary includes human review requirement.
```

---

### ASTRA-028 — Add Work Packet normalization

**Type:** Core Engine
**Priority:** Should-have

Acceptance criteria:

```text
- String fields are trimmed.
- Duplicate array entries are removed.
- Empty optional arrays are normalized.
- Default metadata values can be added.
- Normalization does not hide validation errors.
```

---

### ASTRA-029 — Add Work Packet diffing

**Type:** Core Engine
**Priority:** Should-have

Acceptance criteria:

```text
- Two Work Packets can be compared.
- Added fields are reported.
- Removed fields are reported.
- Changed fields are reported.
- Diff output is stable and testable.
```

---

### ASTRA-030 — Add Work Packet markdown renderer

**Type:** Core Engine
**Priority:** Should-have

Acceptance criteria:

```text
- Work Packet can render to Markdown.
- Markdown includes core fields.
- Markdown includes checklist sections.
- Markdown is deterministic.
```

---

## EPIC-003 — CLI

### ASTRA-040 — Add CLI package entrypoint

**Type:** CLI
**Priority:** Must-have

Acceptance criteria:

```text
- apps/cli has executable entrypoint.
- CLI can print version.
- CLI can print help.
- CLI exits nonzero on unknown command.
```

---

### ASTRA-041 — Add `astra work-packet validate`

**Type:** CLI
**Priority:** Must-have

Acceptance criteria:

```text
- CLI validates JSON Work Packet file.
- CLI validates YAML Work Packet file.
- CLI exits 0 for valid packet.
- CLI exits nonzero for invalid packet.
- CLI prints structured validation errors.
```

---

### ASTRA-042 — Add `astra work-packet ready`

**Type:** CLI
**Priority:** Must-have

Acceptance criteria:

```text
- CLI checks Definition of Ready.
- CLI exits 0 when ready.
- CLI exits nonzero when not ready.
- CLI prints readiness findings.
```

---

### ASTRA-043 — Add `astra work-packet done`

**Type:** CLI
**Priority:** Must-have

Acceptance criteria:

```text
- CLI checks Definition of Done.
- CLI exits 0 when done criteria pass.
- CLI exits nonzero when done criteria fail.
- CLI explains blocking issues.
```

---

### ASTRA-044 — Add `astra work-packet handoff`

**Type:** CLI
**Priority:** Must-have

Acceptance criteria:

```text
- CLI generates handoff summary.
- CLI can write summary to file.
- CLI can print summary to stdout.
```

---

### ASTRA-045 — Add `astra work-packet create`

**Type:** CLI
**Priority:** Should-have

Acceptance criteria:

```text
- CLI can create a new Work Packet from flags.
- CLI can create a new Work Packet from template.
- Created packet validates.
```

---

### ASTRA-046 — Add `astra work-packet normalize`

**Type:** CLI
**Priority:** Should-have

Acceptance criteria:

```text
- CLI normalizes a packet.
- CLI supports write-in-place.
- CLI supports stdout output.
```

---

### ASTRA-047 — Add `astra doctor`

**Type:** CLI
**Priority:** Should-have

Acceptance criteria:

```text
- CLI checks repo health.
- CLI checks required config files.
- CLI checks package manager.
- CLI checks verification command availability.
```

---

## EPIC-004 — Artifact Model

### ASTRA-060 — Define canonical artifact types

**Type:** Core Model
**Priority:** Must-have

Acceptance criteria:

```text
- ProductGoal type exists.
- Epic type exists.
- Feature type exists.
- UserStory type exists.
- Task type exists.
- Bug type exists.
- Spike type exists.
- ADR type exists.
- TestPlan type exists.
- ReleaseNote type exists.
- IncidentReport type exists.
- RetrospectiveItem type exists.
```

---

### ASTRA-061 — Add artifact metadata model

**Type:** Core Model
**Priority:** Must-have

Acceptance criteria:

```text
- Artifact id exists.
- Artifact type exists.
- Artifact status exists.
- Owner field exists.
- Created/updated fields exist.
- Related artifacts field exists.
```

---

### ASTRA-062 — Add artifact relationship graph model

**Type:** Core Model
**Priority:** Must-have

Acceptance criteria:

```text
- Artifact can relate to parent artifact.
- Artifact can relate to child artifact.
- Artifact can relate to evidence artifact.
- Relationship type is explicit.
- Tests prove traceability chain behavior.
```

---

### ASTRA-063 — Add artifact parser and serializer

**Type:** Core Model
**Priority:** Should-have

Acceptance criteria:

```text
- Artifact can be read from JSON.
- Artifact can be read from YAML.
- Artifact can be written to JSON.
- Artifact can be written to YAML.
```

---

## EPIC-005 — SDLC Core

### ASTRA-080 — Define SDLC phase registry

**Type:** SDLC Core
**Priority:** Must-have

Acceptance criteria:

```text
- All SDLC phases are defined.
- Each phase has purpose.
- Each phase has expected inputs.
- Each phase has expected outputs.
- Each phase has exit criteria.
```

---

### ASTRA-081 — Add SDLC phase classifier

**Type:** SDLC Core
**Priority:** Must-have

Acceptance criteria:

```text
- Request text can be classified to likely SDLC phase.
- Classifier returns confidence.
- Classifier returns rationale.
- Ambiguous requests return multiple candidates.
```

---

### ASTRA-082 — Add SDLC phase readiness rules

**Type:** SDLC Core
**Priority:** Should-have

Acceptance criteria:

```text
- Discovery readiness rules exist.
- Requirements readiness rules exist.
- Architecture readiness rules exist.
- Implementation readiness rules exist.
- Review readiness rules exist.
- Release readiness rules exist.
```

---

### ASTRA-083 — Add phase-to-artifact mapping

**Type:** SDLC Core
**Priority:** Must-have

Acceptance criteria:

```text
- Each SDLC phase maps to required artifacts.
- Each SDLC phase maps to optional artifacts.
- Work Packet can be checked against phase artifact expectations.
```

---

## EPIC-006 — Agile and Scrum Core

### ASTRA-100 — Define Scrum concepts model

**Type:** Scrum Core
**Priority:** Must-have

Acceptance criteria:

```text
- Product Goal model exists.
- Product Backlog model exists.
- Sprint Goal model exists.
- Sprint Backlog model exists.
- Increment model exists.
- Definition of Done model exists.
```

---

### ASTRA-101 — Add Scrum event model

**Type:** Scrum Core
**Priority:** Must-have

Acceptance criteria:

```text
- Sprint Planning model exists.
- Daily Scrum model exists.
- Sprint Review model exists.
- Sprint Retrospective model exists.
- Product Backlog Refinement model exists.
```

---

### ASTRA-102 — Add backlog item readiness checker

**Type:** Scrum Core
**Priority:** Must-have

Acceptance criteria:

```text
- User story can be checked for readiness.
- Acceptance criteria are required.
- Dependencies can be flagged.
- Oversized items can be flagged.
```

---

### ASTRA-103 — Add sprint planning assistant model

**Type:** Scrum Core
**Priority:** Should-have

Acceptance criteria:

```text
- Candidate backlog items can be grouped.
- Items can be mapped to Sprint Goal.
- Risks can be summarized.
- Blockers can be summarized.
```

---

### ASTRA-104 — Add retrospective action model

**Type:** Scrum Core
**Priority:** Should-have

Acceptance criteria:

```text
- Retrospective finding exists.
- Action item exists.
- Owner exists.
- Follow-up status exists.
```

---

## EPIC-007 — Workflow Engine

### ASTRA-120 — Define workflow schema

**Type:** Workflow
**Priority:** Must-have

Acceptance criteria:

```text
- Workflow YAML schema exists.
- Workflow has id, name, version, steps.
- Workflow step has action, inputs, outputs, gates.
- Workflow validation exists.
```

---

### ASTRA-121 — Add workflow loader

**Type:** Workflow
**Priority:** Must-have

Acceptance criteria:

```text
- Workflow can be loaded from YAML.
- Invalid workflow fails validation.
- Workflow version is checked.
```

---

### ASTRA-122 — Add workflow runner skeleton

**Type:** Workflow
**Priority:** Must-have

Acceptance criteria:

```text
- Workflow runner can list steps.
- Workflow runner can dry-run.
- Workflow runner does not execute unsafe actions by default.
```

---

### ASTRA-123 — Add implementation workflow

**Type:** Workflow
**Priority:** Must-have

Acceptance criteria:

```text
- Implementation workflow is represented in YAML.
- Workflow includes load context.
- Workflow includes readiness check.
- Workflow includes plan.
- Workflow includes verify.
- Workflow includes handoff.
```

---

### ASTRA-124 — Add review workflow

**Type:** Workflow
**Priority:** Should-have

Acceptance criteria:

```text
- Review workflow is represented in YAML.
- Workflow includes change mapping.
- Workflow includes acceptance criteria check.
- Workflow includes risk check.
- Workflow includes review findings.
```

---

## EPIC-008 — Policy Engine

### ASTRA-140 — Define policy schema

**Type:** Policy
**Priority:** Must-have

Acceptance criteria:

```text
- Policy rule type exists.
- Policy severity exists.
- Policy action exists.
- Policy subject exists.
- Policy verdict exists.
```

---

### ASTRA-141 — Add human approval gates

**Type:** Policy
**Priority:** Must-have

Acceptance criteria:

```text
- Commit approval gate exists.
- Push approval gate exists.
- Merge approval gate exists.
- Deployment approval gate exists.
- Secret modification approval gate exists.
```

---

### ASTRA-142 — Add forbidden action enforcement

**Type:** Policy
**Priority:** Must-have

Acceptance criteria:

```text
- Forbidden action can be checked.
- Violation returns denial verdict.
- Verdict includes rationale.
```

---

### ASTRA-143 — Add security-sensitive change detection

**Type:** Policy
**Priority:** Should-have

Acceptance criteria:

```text
- Auth changes are detected.
- Authorization changes are detected.
- Secret changes are detected.
- Migration changes are detected.
- Deployment changes are detected.
```

---

## EPIC-009 — Verification Engine

### ASTRA-160 — Define verification evidence model

**Type:** Verification
**Priority:** Must-have

Acceptance criteria:

```text
- Verification command model exists.
- Verification result model exists.
- Evidence artifact model exists.
- Verification status model exists.
```

---

### ASTRA-161 — Add command runner abstraction

**Type:** Verification
**Priority:** Must-have

Acceptance criteria:

```text
- Command can be represented safely.
- Command working directory is explicit.
- Timeout is explicit.
- Exit code is captured.
- stdout/stderr are captured.
```

---

### ASTRA-162 — Add verification report generator

**Type:** Verification
**Priority:** Must-have

Acceptance criteria:

```text
- Report includes commands run.
- Report includes pass/fail state.
- Report includes skipped checks.
- Report includes unverified items.
```

---

### ASTRA-163 — Integrate verification with Work Packet

**Type:** Verification
**Priority:** Must-have

Acceptance criteria:

```text
- Work Packet verification plan can be executed.
- Results can update verification status.
- Done check consumes verification results.
```

---

## EPIC-010 — Context Engine

### ASTRA-180 — Define context source model

**Type:** Context
**Priority:** Must-have

Acceptance criteria:

```text
- Context source type exists.
- Source provenance exists.
- Source freshness exists.
- Source trust level exists.
```

---

### ASTRA-181 — Add project context loader

**Type:** Context
**Priority:** Must-have

Acceptance criteria:

```text
- Project docs can be loaded.
- Knowledge files can be loaded.
- ADRs can be loaded.
- Work Packets can be loaded.
```

---

### ASTRA-182 — Add context pack model

**Type:** Context
**Priority:** Must-have

Acceptance criteria:

```text
- Context Pack type exists.
- Context Pack has sources.
- Context Pack has task objective.
- Context Pack has token budget metadata.
- Context Pack has provenance.
```

---

### ASTRA-183 — Add context selection skeleton

**Type:** Context
**Priority:** Should-have

Acceptance criteria:

```text
- Context can be selected for a Work Packet.
- Selection explains why each source was included.
- Selection excludes irrelevant files.
```

---

## EPIC-011 — Memory Engine

### ASTRA-200 — Define memory record model

**Type:** Memory
**Priority:** Must-have

Acceptance criteria:

```text
- Memory record type exists.
- Memory provenance exists.
- Memory confidence exists.
- Memory status exists.
```

---

### ASTRA-201 — Add decision log memory

**Type:** Memory
**Priority:** Must-have

Acceptance criteria:

```text
- Decisions can be stored.
- Decisions can cite source artifacts.
- Superseded decisions can be marked.
```

---

### ASTRA-202 — Add sprint history memory

**Type:** Memory
**Priority:** Should-have

Acceptance criteria:

```text
- Sprint records can be stored.
- Sprint goals can be stored.
- Sprint outcomes can be stored.
- Retrospective actions can be linked.
```

---

### ASTRA-203 — Add session chronicle model

**Type:** Memory
**Priority:** Should-have

Acceptance criteria:

```text
- Work session can be summarized.
- Actions can be recorded.
- Open questions can be recorded.
- Resume point can be recorded.
```

---

## EPIC-012 — Repo Analyzer

### ASTRA-220 — Add repository file inventory

**Type:** Repo Analyzer
**Priority:** Must-have

Acceptance criteria:

```text
- Repo tree can be scanned.
- Ignored directories are respected.
- Package boundaries are detected.
- Output is deterministic.
```

---

### ASTRA-221 — Add workspace detector

**Type:** Repo Analyzer
**Priority:** Must-have

Acceptance criteria:

```text
- apps are detected.
- packages are detected.
- services are detected.
- tools are detected.
- package.json metadata is read.
```

---

### ASTRA-222 — Add architecture boundary checker

**Type:** Repo Analyzer
**Priority:** Should-have

Acceptance criteria:

```text
- Forbidden imports can be detected.
- Package dependency direction can be checked.
- App/package/service boundaries can be reported.
```

---

## EPIC-013 — Git Adapter

### ASTRA-240 — Add git status reader

**Type:** Git Adapter
**Priority:** Must-have

Acceptance criteria:

```text
- Current branch can be read.
- Dirty state can be read.
- Changed files can be listed.
```

---

### ASTRA-241 — Add diff reader

**Type:** Git Adapter
**Priority:** Must-have

Acceptance criteria:

```text
- Working tree diff can be read.
- Staged diff can be read.
- Diff summary can be produced.
```

---

### ASTRA-242 — Add commit plan generator

**Type:** Git Adapter
**Priority:** Should-have

Acceptance criteria:

```text
- Conventional Commit message can be suggested.
- Changed files can be grouped by concern.
- Risky files are flagged.
```

---

## EPIC-014 — Issue Tracker Adapter

### ASTRA-260 — Define issue adapter interface

**Type:** Integration
**Priority:** Must-have

Acceptance criteria:

```text
- Issue interface exists.
- Backlog item interface exists.
- Adapter boundary exists.
- No vendor-specific coupling in core types.
```

---

### ASTRA-261 — Add GitHub Issues adapter skeleton

**Type:** Integration
**Priority:** Should-have

Acceptance criteria:

```text
- GitHub issue shape can be mapped.
- GitHub labels can be mapped.
- Work Packet can reference GitHub issue.
```

---

### ASTRA-262 — Add GitHub Project fields mapping

**Type:** Integration
**Priority:** Could-have

Acceptance criteria:

```text
- Status field can be mapped.
- Priority field can be mapped.
- Sprint field can be mapped.
- Work Packet field can be mapped.
```

---

## EPIC-015 — CI Adapter

### ASTRA-280 — Define CI result model

**Type:** CI
**Priority:** Must-have

Acceptance criteria:

```text
- CI run model exists.
- CI job model exists.
- CI check model exists.
- Pass/fail status exists.
```

---

### ASTRA-281 — Add GitHub Actions result reader skeleton

**Type:** CI
**Priority:** Should-have

Acceptance criteria:

```text
- Workflow run can be represented.
- Job status can be represented.
- Failed check can be mapped to verification evidence.
```

---

## EPIC-016 — Orchestration Engine

### ASTRA-300 — Define orchestrator request model

**Type:** Orchestration
**Priority:** Must-have

Acceptance criteria:

```text
- User request type exists.
- Intent classification result exists.
- Selected role mode exists.
- Selected SDLC phase exists.
```

---

### ASTRA-301 — Add orchestrator planning skeleton

**Type:** Orchestration
**Priority:** Must-have

Acceptance criteria:

```text
- Orchestrator can accept request.
- Orchestrator can produce plan.
- Orchestrator can identify required context.
- Orchestrator can identify required artifacts.
```

---

### ASTRA-302 — Integrate Work Packet Engine with orchestrator

**Type:** Orchestration
**Priority:** Must-have

Acceptance criteria:

```text
- Orchestrator can create Work Packet draft.
- Orchestrator can check readiness.
- Orchestrator can produce handoff.
```

---

## EPIC-017 — Prompt Kernel

### ASTRA-320 — Define prompt contract model

**Type:** Prompt Kernel
**Priority:** Must-have

Acceptance criteria:

```text
- Prompt role exists.
- Prompt task exists.
- Prompt context exists.
- Prompt output contract exists.
- Prompt safety boundaries exist.
```

---

### ASTRA-321 — Add role mode prompt templates

**Type:** Prompt Kernel
**Priority:** Must-have

Acceptance criteria:

```text
- Product Analyst prompt exists.
- Scrum Facilitator prompt exists.
- Technical Architect prompt exists.
- Pair Engineer prompt exists.
- Reviewer prompt exists.
- Release Engineer prompt exists.
- Operations Analyst prompt exists.
```

---

### ASTRA-322 — Add Work Packet prompt assembler

**Type:** Prompt Kernel
**Priority:** Should-have

Acceptance criteria:

```text
- Work Packet can be converted into prompt context.
- Prompt includes objective.
- Prompt includes constraints.
- Prompt includes forbidden actions.
- Prompt includes Definition of Done.
```

---

## EPIC-018 — API

### ASTRA-340 — Add API health endpoint

**Type:** API
**Priority:** Must-have

Acceptance criteria:

```text
- API app starts.
- /health endpoint returns ok.
- Health response includes version.
```

---

### ASTRA-341 — Add Work Packet validation endpoint

**Type:** API
**Priority:** Should-have

Acceptance criteria:

```text
- POST /work-packets/validate exists.
- Valid packet returns valid result.
- Invalid packet returns issue list.
```

---

### ASTRA-342 — Add Work Packet handoff endpoint

**Type:** API
**Priority:** Should-have

Acceptance criteria:

```text
- POST /work-packets/handoff exists.
- Endpoint returns Markdown handoff.
```

---

## EPIC-019 — Services

### ASTRA-360 — Add artifact service skeleton

**Type:** Service
**Priority:** Should-have

Acceptance criteria:

```text
- Service starts.
- Service has health check.
- Service can validate artifact shape.
```

---

### ASTRA-361 — Add policy service skeleton

**Type:** Service
**Priority:** Should-have

Acceptance criteria:

```text
- Service starts.
- Service has health check.
- Service can evaluate a sample policy.
```

---

### ASTRA-362 — Add verification service skeleton

**Type:** Service
**Priority:** Should-have

Acceptance criteria:

```text
- Service starts.
- Service has health check.
- Service can return sample verification result.
```

---

### ASTRA-363 — Add orchestrator service skeleton

**Type:** Service
**Priority:** Should-have

Acceptance criteria:

```text
- Service starts.
- Service has health check.
- Service can accept orchestration request.
```

---

## EPIC-020 — Workbench UI

### ASTRA-380 — Add Workbench shell

**Type:** UI
**Priority:** Should-have

Acceptance criteria:

```text
- Workbench app starts.
- Navigation exists.
- Placeholder dashboard exists.
```

---

### ASTRA-381 — Add Work Packet viewer

**Type:** UI
**Priority:** Should-have

Acceptance criteria:

```text
- Work Packet can be displayed.
- Core fields are visible.
- Validation status is visible.
- Risk class is visible.
```

---

### ASTRA-382 — Add Work Packet editor

**Type:** UI
**Priority:** Could-have

Acceptance criteria:

```text
- Work Packet can be edited.
- Validation errors display inline.
- YAML/JSON import is supported.
```

---

### ASTRA-383 — Add workflow run viewer

**Type:** UI
**Priority:** Could-have

Acceptance criteria:

```text
- Workflow steps are visible.
- Completed steps are visible.
- Blocked steps are visible.
- Verification evidence is visible.
```

---

## EPIC-021 — Documentation System

### ASTRA-400 — Expand v0.1 specification

**Type:** Docs
**Priority:** Must-have

Acceptance criteria:

```text
- Purpose is expanded.
- Philosophy is expanded.
- Work Packet schema is fully documented.
- Workflow model is documented.
- Policy model is documented.
```

---

### ASTRA-401 — Add Work Packet Engine guide

**Type:** Docs
**Priority:** Must-have

Acceptance criteria:

```text
- Explains what Work Packets are.
- Explains schema.
- Explains validation.
- Explains file I/O.
- Includes examples.
```

---

### ASTRA-402 — Add CLI user guide

**Type:** Docs
**Priority:** Should-have

Acceptance criteria:

```text
- Explains installation.
- Explains commands.
- Shows examples.
- Shows error output.
```

---

### ASTRA-403 — Add architecture overview

**Type:** Docs
**Priority:** Must-have

Acceptance criteria:

```text
- Expl Packet schema is fully documented.
- Workflow model is documented.
- Policy model is documented.
```

---

### ASTRA-401 — Add Work Packet Engine guide

**Type:** Docs
**Priority:** Must-have

Acceptance criteria:

```text
- Explains what Work Packets are.
- Explains schema.
- Explains validation.
- Explains file I/O.
- Includes examples.
```

---

### ASTRA-402 — Add CLI user guide

**Type:** Docs
**Priority:** Should-have

Acceptance criteria:

```text
- Explains installation.
- Explains commandsains package boundaries.
- Explains apps/packages/services.
- Explains flow from request to Work Packet to verification to handoff.
```

---

## EPIC-022 — Telemetry and Audit

### ASTRA-420 — Define audit event model

**Type:** Telemetry
**Priority:** Must-have

Acceptance criteria:

```text
- Audit event type exists.
- Actor field exists.
- Action field exists.
- Target field exists.
- Timestamp exists.
- Result field exists.
```

---

### ASTRA-421 — Add work session audit log

**Type:** Telemetry
**Priority:** Should-have

Acceptance criteria:

```text
- Work session id exists.
- Actions can be appended.
- Verification events can be recorded.
- Handoff event can be recorded.
```

---

### ASTRA-422 — Add telemetry correlation id model

**Type:** Telemetry
**Priority:** Could-have

Acceptance criteria:

```text
- Correlation id can be generated.
- Correlation id can be passed through events.
- Logs include correlation id.
```

---

## EPIC-023 — Level 5 Delivery OS Capabilities

### ASTRA-440 — Add artifact graph traversal

**Type:** Level 5
**Priority:** Could-have

Acceptance criteria:

```text
- Product Goal to Work Packet chain can be traversed.
- Work Packet to evidence chain can be traversed.
- Missing traceability can be reported.
```

---

### ASTRA-441 — Add delivery metrics model

**Type:** Level 5
**Priority:** Could-have

Acceptance criteria:

```text
- Cycle time model exists.
- Lead time model exists.
- Review delay model exists.
- Defect escape model exists.
```

---

### ASTRA-442 — Add retrospective pattern detector

**Type:** Level 5
**Priority:** Could-have

Acceptance criteria:

```text
- Repeated blockers can be detected.
- Repeated verification failures can be detected.
- Repeated readiness gaps can be detected.
```

---

### ASTRA-443 — Add process improvement recommender

**Type:** Level 5
**Priority:** Could-have

Acceptance criteria:

```text
- Recommender consumes retrospective patterns.
- Recommender proposes backlog or policy changes.
- Recommendations include rationale.
```

---

## EPIC-024 — Release, Packaging, and Distribution

### ASTRA-460 — Add package build verification

**Type:** Release
**Priority:** Must-have

Acceptance criteria:

```text
- Packages build successfully.
- Dist output is generated.
- Package exports are valid.
```

---

### ASTRA-461 — Add CLI packaging

**Type:** Release
**Priority:** Should-have

Acceptance criteria:

```text
- CLI can be installed locally.
- CLI executable works.
- Version command works.
```

---

### ASTRA-462 — Add changelog process

**Type:** Release
**Priority:** Should-have

Acceptance criteria:

```text
- Changelog file exists.
- Release note format exists.
- Conventional Commit mapping exists.
```

---

# 3. Full Implementation Slice List

This is the actual recommended build order.

Each slice should be an atomic branch and commit.

---

## Phase 0 — Completed Foundation

### Slice 000 — Scaffold Astra SDLC Framework v0.1

```bash
feat: scaffold astra sdlc framework v0.1
```

Status: Done

---

### Slice 001 — Add Work Packet file I/O

```bash
feat(work-packet-engine): add work packet file io
```

Status: Done

---

# Phase 1 — Make the Work Packet Engine Complete

## Slice 002 — Add canonical Work Packet examples

Branch:

```bash
feat/work-packet-examples
```

Commit:

```bash
feat(work-packet-engine): add canonical work packet examples
```

Scope:

```text
- Add examples for every SDLC phase.
- Add JSON examples.
- Add YAML examples.
- Add tests proving examples validate.
```

---

## Slice 003 — Add lifecycle transitions

Branch:

```bash
feat/work-packet-lifecycle
```

Commit:

```bash
feat(work-packet-engine): add lifecycle transition rules
```

Scope:

```text
- Add transition matrix.
- Add transition validator.
- Add transition result type.
- Add tests for valid and invalid transitions.
```

---

## Slice 004 — Add readiness rule objects

Branch:

```bash
feat/work-packet-readiness-rules
```

Commit:

```bash
feat(work-packet-engine): model definition of ready rules
```

Scope:

```text
- Replace ad hoc readiness logic with rule objects.
- Add rule ids.
- Add severity.
- Add human-readable messages.
- Add tests.
```

---

## Slice 005 — Add done rule objects

Branch:

```bash
feat/work-packet-done-rules
```

Commit:

```bash
feat(work-packet-engine): model definition of done rules
```

Scope:

```text
- Replace ad hoc done logic with rule objects.
- Add evidence requirements.
- Add human review requirement.
- Add tests.
```

---

## Slice 006 — Add Work Packet normalization

Branch:

```bash
feat/work-packet-normalization
```

Commit:

```bash
feat(work-packet-engine): add work packet normalization
```

Scope:

```text
- Trim strings.
- Remove duplicate arrays.
- Normalize metadata.
- Preserve validation failures.
```

---

## Slice 007 — Add Work Packet diffing

Branch:

```bash
feat/work-packet-diff
```

Commit:

```bash
feat(work-packet-engine): add work packet diffing
```

Scope:

```text
- Compare two Work Packets.
- Report added, removed, changed fields.
- Add deterministic output.
```

---

## Slice 008 — Add Markdown rendering

Branch:

```bash
feat/work-packet-markdown
```

Commit:

```bash
feat(work-packet-engine): render work packets as markdown
```

Scope:

```text
- Render packet.
- Render checklist.
- Render risk section.
- Render verification section.
```

---

# Phase 2 — CLI MVP

## Slice 009 — Add CLI command framework

Branch:

```bash
feat/cli-command-framework
```

Commit:

```bash
feat(cli): add command framework
```

Scope:

```text
- Add executable CLI entry.
- Add help.
- Add version command.
- Add command router.
```

---

## Slice 010 — Add validate command

Branch:

```bash
feat/cli-work-packet-validate
```

Commit:

```bash
feat(cli): add work packet validation command
```

Scope:

```text
- astra work-packet validate <file>
- Valid file exits 0.
- Invalid file exits nonzero.
```

---

## Slice 011 — Add ready command

Branch:

```bash
feat/cli-work-packet-ready
```

Commit:

```bash
feat(cli): add work packet readiness command
```

Scope:

```text
- astra work-packet ready <file>
- Prints readiness findings.
```

---

## Slice 012 — Add done command

Branch:

```bash
feat/cli-work-packet-done
```

Commit:

```bash
feat(cli): add work packet done command
```

Scope:

```text
- astra work-packet done <file>
- Prints done findings.
```

---

## Slice 013 — Add handoff command

Branch:

```bash
feat/cli-work-packet-handoff
```

Commit:

```bash
feat(cli): add work packet handoff command
```

Scope:

```text
- astra work-packet handoff <file>
- Supports stdout.
- Supports --out.
```

---

## Slice 014 — Add create command

Branch:

```bash
feat/cli-work-packet-create
```

Commit:

```bash
feat(cli): add work packet create command
```

Scope:

```text
- Create packet from template.
- Create packet from flags.
- Created packet validates.
```

---

## Slice 015 — Add CLI smoke integration tests

Branch:

```bash
test/cli-smoke
```

Commit:

```bash
test(cli): add work packet command smoke tests
```

Scope:

```text
- Test help.
- Test validate.
- Test ready.
- Test handoff.
```

---

# Phase 3 — Artifact Model

## Slice 016 — Define artifact core types

```bash
feat(artifact-model): define canonical artifact types
```

---

## Slice 017 — Add artifact metadata model

```bash
feat(artifact-model): add artifact metadata model
```

---

## Slice 018 — Add artifact relationship graph

```bash
feat(artifact-model): add artifact relationship graph
```

---

## Slice 019 — Add artifact file I/O

```bash
feat(artifact-model): add artifact file io
```

---

## Slice 020 — Integrate artifacts with Work Packets

```bash
feat(work-packet-engine): link work packets to artifacts
```

---

# Phase 4 — SDLC Core

## Slice 021 — Define SDLC phase registry

```bash
feat(sdlc-core): define phase registry
```

---

## Slice 022 — Add phase artifact expectations

```bash
feat(sdlc-core): map phases to required artifacts
```

---

## Slice 023 — Add phase classifier

```bash
feat(sdlc-core): add request phase classifier
```

---

## Slice 024 — Integrate SDLC phase checks with Work Packets

```bash
feat(work-packet-engine): validate sdlc phase artifact expectations
```

---

# Phase 5 — Agile and Scrum Core

## Slice 025 — Define Agile core model

```bash
feat(agile-core): define agile delivery model
```

---

## Slice 026 — Define Scrum core model

```bash
feat(scrum-core): define scrum operating model
```

---

## Slice 027 — Add backlog item readiness checker

```bash
feat(scrum-core): add backlog readiness checks
```

---

## Slice 028 — Add sprint planning support model

```bash
feat(scrum-core): add sprint planning model
```

---

## Slice 029 — Integrate Scrum context with Work Packets

```bash
feat(work-packet-engine): validate scrum context
```

---

# Phase 6 — Workflow Engine

## Slice 030 — Define workflow schema

```bash
feat(workflow-engine): define workflow schema
```

---

## Slice 031 — Add workflow file loader

```bash
feat(workflow-engine): load workflow definitions
```

---

## Slice 032 — Add workflow dry-runner

```bash
feat(workflow-engine): add workflow dry run
```

---

## Slice 033 — Add implementation workflow

```bash
feat(workflows): define implementation workflow
```

---

## Slice 034 — Add review workflow

```bash
feat(workflows): define review workflow
```

---

## Slice 035 — Add release workflow

```bash
feat(workflows): define release workflow
```

---

# Phase 7 — Policy Engine

## Slice 036 — Define policy model

```bash
feat(policy-engine): define policy model
```

---

## Slice 037 — Add approval gate evaluation

```bash
feat(policy-engine): add approval gate evaluation
```

---

## Slice 038 — Add forbidden action checks

```bash
feat(policy-engine): enforce forbidden actions
```

---

## Slice 039 — Add security-sensitive change classifier

```bash
feat(policy-engine): classify security sensitive changes
```

---

## Slice 040 — Integrate policy checks with workflows

```bash
feat(workflow-engine): integrate policy gates
```

---

# Phase 8 — Verification Engine

## Slice 041 — Define verification evidence model

```bash
feat(verification-engine): define verification evidence model
```

---

## Slice 042 — Add command runner abstraction

```bash
feat(verification-engine): add command runner abstraction
```

---

## Slice 043 — Add verification report generator

```bash
feat(verification-engine): generate verification reports
```

---

## Slice 044 — Execute Work Packet verification plan

```bash
feat(verification-engine): execute work packet verification plans
```

---

## Slice 045 — Integrate verification results with done checks

```bash
feat(work-packet-engine): consume verification evidence
```

---

# Phase 9 — Repo and Git Awareness

## Slice 046 — Add repo file inventory

```bash
feat(repo-analyzer): add repository inventory
```

---

## Slice 047 — Add workspace detector

```bash
feat(repo-analyzer): detect workspaces
```

---

## Slice 048 — Add architecture boundary checker

```bash
feat(repo-analyzer): check workspace boundaries
```

---

## Slice 049 — Add git status reader

```bash
feat(git-adapter): read git status
```

---

## Slice 050 — Add git diff reader

```bash
feat(git-adapter): read git diffs
```

---

## Slice 051 — Add commit plan generator

```bash
feat(git-adapter): generate commit plans
```

---

# Phase 10 — Context and Memory

## Slice 052 — Define context source model

```bash
feat(context-engine): define context source model
```

---

## Slice 053 — Add project context loader

```bash
feat(context-engine): load project context
```

---

## Slice 054 — Add context pack model

```bash
feat(context-engine): define context packs
```

---

## Slice 055 — Add context pack assembler

```bash
feat(context-engine): assemble context packs
```

---

## Slice 056 — Define memory record model

```bash
feat(memory-engine): define memory record model
```

---

## Slice 057 — Add decision log memory

```bash
feat(memory-engine): add decision log memory
```

---

## Slice 058 — Add session chronicle model

```bash
feat(memory-engine): add session chronicles
```

---

# Phase 11 — Orchestration and Prompt Kernel

## Slice 059 — Define orchestration request model

```bash
feat(orchestration-engine): define request model
```

---

## Slice 060 — Add orchestration planner

```bash
feat(orchestration-engine): add planning skeleton
```

---

## Slice 061 — Integrate Work Packets with orchestrator

```bash
feat(orchestration-engine): create work packets from requests
```

---

## Slice 062 — Define prompt contract model

```bash
feat(prompt-kernel): define prompt contract model
```

---

## Slice 063 — Add role mode prompt templates

```bash
feat(prompt-kernel): add role mode templates
```

---

## Slice 064 — Add Work Packet prompt assembler

```bash
feat(prompt-kernel): assemble prompts from work packets
```

---

# Phase 12 — API and Services

## Slice 065 — Add API health route

```bash
feat(api): add health route
```

---

## Slice 066 — Add Work Packet validation endpoint

```bash
feat(api): add work packet validation endpoint
```

---

## Slice 067 — Add Work Packet handoff endpoint

```bash
feat(api): add work packet handoff endpoint
```

---

## Slice 068 — Add artifact service skeleton

```bash
feat(artifact-service): add service skeleton
```

---

## Slice 069 — Add policy service skeleton

```bash
feat(policy-service): add service skeleton
```

---

## Slice 070 — Add verification service skeleton

```bash
feat(verification-service): add service skeleton
```

---

## Slice 071 — Add orchestrator service skeleton

```bash
feat(orchestrator): add service skeleton
```

---

# Phase 13 — Workbench UI

## Slice 072 — Add Workbench shell

```bash
feat(workbench): add application shell
```

---

## Slice 073 — Add Work Packet viewer

```bash
feat(workbench): add work packet viewer
```

---

## Slice 074 — Add Work Packet editor

```bash
feat(workbench): add work packet editor
```

---

## Slice 075 — Add workflow run viewer

```bash
feat(workbench): add workflow run viewer
```

---

## Slice 076 — Add verification report viewer

```bash
feat(workbench): add verification report viewer
```

---

# Phase 14 — Documentation

## Slice 077 — Expand framework specification

```bash
docs: expand astra sdlc framework specification
```

---

## Slice 078 — Add Work Packet Engine guide

```bash
docs(work-packet-engine): add user guide
```

---

## Slice 079 — Add CLI guide

```bash
docs(cli): add command guide
```

---

## Slice 080 — Add architecture overview

```bash
docs(architecture): add system overview
```

---

## Slice 081 — Add workflow authoring guide

```bash
docs(workflows): add authoring guide
```

---

## Slice 082 — Add policy authoring guide

```bash
docs(policy): add authoring guide
```

---

# Phase 15 — Telemetry and Audit

## Slice 083 — Define audit event model

```bash
feat(telemetry): define audit event model
```

---

## Slice 084 — Add work session audit log

```bash
feat(telemetry): add work session audit log
```

---

## Slice 085 — Add correlation id support

```bash
feat(telemetry): add correlation ids
```

---

## Slice 086 — Integrate audit events with workflows

```bash
feat(workflow-engine): emit audit events
```

---

# Phase 16 — Level 5 Delivery OS

## Slice 087 — Add artifact graph traversal

```bash
feat(artifact-model): add artifact graph traversal
```

---

## Slice 088 — Add traceability gap detection

```bash
feat(artifact-model): detect traceability gaps
```

---

## Slice 089 — Add delivery metrics model

```bash
feat(telemetry): add delivery metrics model
```

---

## Slice 090 — Add retrospective pattern detector

```bash
feat(memory-engine): detect retrospective patterns
```

---

## Slice 091 — Add process improvement recommender

```bash
feat(orchestration-engine): recommend process improvements
```

---

# Phase 17 — Release and Packaging

## Slice 092 — Add package build verification

```bash
build: verify package outputs
```

---

## Slice 093 — Add CLI packaging

```bash
feat(cli): package astra executable
```

---

## Slice 094 — Add changelog process

```bash
docs: add changelog process
```

---

## Slice 095 — Add release checklist

```bash
docs(release): add release checklist
```

---

## Slice 096 — Cut v0.1.0 internal release

```bash
chore(release): prepare v0.1.0
```

---

# 4. Immediate Next Slices

The next five should be:

```text
Slice 002  feat(work-packet-engine): add canonical work packet examples
Slice 003  feat(work-packet-engine): add lifecycle transition rules
Slice 004  feat(work-packet-engine): model definition of ready rules
Slice 005  feat(work-packet-engine): model definition of done rules
Slice 009  feat(cli): add command framework
```