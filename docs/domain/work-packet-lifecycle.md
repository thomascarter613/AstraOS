
# Work Packet Lifecycle

## Status

Precode foundation document.

## Purpose

This document defines the intended lifecycle semantics for Work Packets.

## Lifecycle States

A Work Packet may have the following states:

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

## State Definitions

### draft

The Work Packet is being created.

It may be incomplete.

### not_ready

The Work Packet has been evaluated and is not ready for execution.

Typical reasons:

* missing acceptance criteria;
* missing source artifacts;
* unclear objective;
* undefined verification plan;
* unresolved dependencies.

### ready

The Work Packet satisfies readiness expectations.

It may be executed.

### in_progress

Work has begun.

### blocked

Work cannot proceed because a dependency, decision, approval, or external condition is missing.

### in_review

The work is complete enough for review but not yet accepted as done.

### verified

Required verification has passed.

### done

The Work Packet satisfies Definition of Done and has a required handoff.

### released

The result has been included in a release or delivery increment.

### superseded

The Work Packet has been replaced by another packet or artifact.

### rejected

The Work Packet will not proceed.

## Preferred Lifecycle Flow

```text
draft
  → not_ready
  → ready
  → in_progress
  → in_review
  → verified
  → done
  → released
```

Alternative paths:

```text
draft → rejected
not_ready → rejected
ready → blocked
in_progress → blocked
blocked → ready
blocked → in_progress
any active state → superseded
```

## Transition Requirements

Every transition should eventually record:

* previous status;
* next status;
* reason;
* actor;
* timestamp;
* related evidence if applicable.

The initial implementation may validate transitions without persisting full transition history.

## Forbidden Transition Examples

The following should not be allowed without explicit override:

```text
draft → done
not_ready → in_progress
ready → done
in_progress → released
failed verification → done
rejected → in_progress
superseded → in_progress
```

## Done Transition Rule

A Work Packet should not transition to `done` unless:

1. verification status is `passed`;
2. handoff requirements are satisfied;
3. acceptance criteria have been addressed;
4. human review requirement is stated;
5. forbidden actions were not taken.

## Release Transition Rule

A Work Packet should not transition to `released` unless it is already `done` or explicitly approved by a human release authority.

## Supersession Rule

A superseded Work Packet should identify what superseded it.

This may be represented through metadata or related artifacts.

## Implementation Note

The next Work Packet Engine lifecycle slice should implement:

* transition matrix;
* transition validation function;
* transition result type;
* transition reason requirement;
* tests for allowed and forbidden transitions.

