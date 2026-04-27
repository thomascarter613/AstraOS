# Work Packet Schema Reference

## Status

Precode foundation document.

## Purpose

This document describes the canonical Work Packet schema currently implemented by the Work Packet Engine.

## Schema Version

Current schema version:

```text
0.1.0
```

The schema version is required so future migrations can be explicit.

## Required Top-Level Fields

A Work Packet requires:

```text
schemaVersion
id
title
status
sdlcPhase
roleMode
scrumContext
sourceArtifacts
objective
constraints
assumptions
risks
riskClass
acceptanceCriteria
definitionOfReady
definitionOfDone
allowedActions
forbiddenActions
verificationPlan
handoffRequirements
metadata
```

## Field Reference

### schemaVersion

Type:

```text
"0.1.0"
```

Purpose:

Identifies the schema version used by the packet.

### id

Type:

```text
string
```

Purpose:

Globally or project-unique Work Packet identifier.

Example:

```text
AUTH-014
WP-0001
ASTRA-041
```

### title

Type:

```text
string
```

Purpose:

Human-readable summary.

### status

Type:

```text
draft | not_ready | ready | in_progress | blocked | in_review | verified | done | released | superseded | rejected
```

Purpose:

Represents lifecycle state.

### sdlcPhase

Type:

```text
discovery | requirements | architecture_and_design | implementation | testing_and_verification | review | release | operations | continuous_improvement
```

Purpose:

Identifies which lifecycle phase governs the work.

### roleMode

Type:

```text
product_analyst | scrum_facilitator | technical_architect | pair_engineer | reviewer | release_engineer | operations_analyst
```

Purpose:

Identifies the AI collaboration mode.

### scrumContext

Type:

```text
object
```

Fields:

```text
productGoal?
sprintGoal?
sprint?
backlogItemId?
```

Purpose:

Connects the Work Packet to Scrum context when applicable.

### sourceArtifacts

Type:

```text
string[]
```

Purpose:

Lists authorizing or contextual artifacts.

Examples:

* user stories;
* ADRs;
* technical designs;
* issue IDs;
* policy documents.

### objective

Type:

```text
string
```

Purpose:

Defines the intended outcome.

### constraints

Type:

```text
string[]
```

Purpose:

Lists conditions the work must respect.

### assumptions

Type:

```text
string[]
```

Purpose:

Lists facts assumed but not fully verified.

### risks

Type:

```text
string[]
```

Purpose:

Lists known risks.

### riskClass

Type:

```text
low | medium | high | critical
```

Purpose:

Classifies the risk level of the work.

### acceptanceCriteria

Type:

```text
string[]
```

Purpose:

Defines externally observable success conditions.

### definitionOfReady

Type:

```text
string[]
```

Purpose:

Defines what must be true before work begins.

### definitionOfDone

Type:

```text
string[]
```

Purpose:

Defines what must be true before work is considered complete.

### allowedActions

Type:

```text
string[]
```

Purpose:

Defines actions the AI may perform for this Work Packet.

### forbiddenActions

Type:

```text
string[]
```

Purpose:

Defines actions the AI must not perform.

### verificationPlan

Type:

```text
object
```

Fields:

```text
commands: string[]
requiredEvidence: string[]
status: not_started | planned | running | passed | failed | skipped | blocked | partially_verified
```

Purpose:

Defines how work will be verified.

### handoffRequirements

Type:

```text
string[]
```

Purpose:

Defines what the final handoff must include.

Recommended values:

```text
summarize_changes
map_acceptance_criteria
list_risks
list_assumptions
list_unverified_items
state_human_review_required
```

### metadata

Type:

```text
object
```

Fields:

```text
owner?
source?
createdAt?
updatedAt?
relatedArtifacts?
```

Purpose:

Provides traceability and management metadata.

## Minimal Valid Shape

A minimal valid Work Packet still needs every required field.

The framework intentionally avoids hidden defaults at the schema boundary.

## JSON and YAML

The Work Packet Engine supports JSON and YAML file formats.

Supported extensions:

```text
.json
.yaml
.yml
```

Unsupported extensions should fail clearly.

## Validation Rule

A packet is valid only when it satisfies the runtime schema.

A packet being valid does not necessarily mean it is ready or done.

Validity, readiness, and done are separate checks.

