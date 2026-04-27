
# Artifact Taxonomy

## Status

Precode foundation document.

## Purpose

This document defines the artifact types Astra recognizes.

Artifacts are durable units of project knowledge. They provide traceability, context, and authority for AI-assisted software delivery.

## Artifact Categories

Astra artifacts are grouped into the following categories:

```text
Product artifacts
Planning artifacts
Requirements artifacts
Architecture artifacts
Implementation artifacts
Verification artifacts
Review artifacts
Release artifacts
Operations artifacts
Improvement artifacts
Governance artifacts
AI-context artifacts
```

## Product Artifacts

### ProductGoal

Defines a strategic product direction.

Required fields:

* id;
* title;
* description;
* status;
* owner;
* success criteria.

### ProductPrinciple

Defines a durable product value.

Examples:

* verification over assertion;
* human accountability;
* artifact-first delivery.

## Planning Artifacts

### Epic

A large body of work grouped around a product capability.

### Feature

A coherent capability that may be delivered through multiple stories or tasks.

### RoadmapItem

A planned future increment or milestone.

## Requirements Artifacts

### UserStory

A user-centered statement of desired value.

### AcceptanceCriteria

Specific conditions that must be satisfied.

### NonFunctionalRequirement

A quality, security, performance, reliability, usability, or maintainability requirement.

### Spike

A time-boxed research or discovery item.

## Architecture Artifacts

### ArchitectureDecisionRecord

A durable decision record explaining context, decision, consequences, and status.

### TechnicalDesign

A design proposal for a system, package, service, or feature.

### InterfaceContract

An API, CLI, schema, event, or package contract.

### DataModel

A representation of entities, relationships, schemas, or persistence rules.

## Implementation Artifacts

### WorkPacket

The core executable planning object.

### Task

A concrete unit of implementation work.

### ChangeSet

A collection of modified files and related intent.

### CommitPlan

A proposed grouping of changes into atomic commits.

## Verification Artifacts

### TestPlan

A plan for proving behavior.

### TestCase

A specific behavior to verify.

### VerificationReport

Evidence that verification commands passed, failed, were skipped, or were blocked.

### CoverageReport

Evidence about test coverage.

## Review Artifacts

### PullRequest

A proposed integration of changes.

### ReviewFinding

A finding from code, design, security, or quality review.

### RiskReport

A structured report of risks and mitigations.

## Release Artifacts

### ReleaseNote

Human-readable summary of released changes.

### DeploymentChecklist

Required steps before deployment.

### RollbackPlan

Steps for safely reverting a release.

### SmokeTestPlan

Post-deploy verification steps.

## Operations Artifacts

### IncidentReport

A structured record of an operational incident.

### Postmortem

A root-cause and learning document.

### Runbook

Operational instructions for repeated scenarios.

### TelemetryFinding

A finding from logs, metrics, traces, or alerts.

## Improvement Artifacts

### RetrospectiveItem

A finding from process reflection.

### ProcessImprovement

A proposed change to workflow, policy, tooling, or practice.

### ActionItem

A specific follow-up with owner and status.

## Governance Artifacts

### Policy

A rule or set of rules that governs behavior.

### WorkingAgreement

A human/process agreement.

### DefinitionOfReady

Criteria required before work may begin.

### DefinitionOfDone

Criteria required before work may be considered complete.

## AI-Context Artifacts

### ContextPack

A selected set of context for an AI task.

### SessionChronicle

A structured record of a work session.

### HandoffPacket

A transfer artifact for continuity.

### PromptContract

A structured definition of role, task, context, constraints, and output requirements.

## Artifact Rule

Every artifact should answer:

```text
What is this?
Why does it exist?
Who or what owns it?
What state is it in?
What does it relate to?
What evidence supports it?
What supersedes it, if anything?
```

