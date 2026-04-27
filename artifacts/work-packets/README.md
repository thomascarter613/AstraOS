# Work Packet Artifacts

## Purpose

This directory contains canonical Astra Work Packet artifacts.

Work Packets are structured units of AI-assisted software delivery work. They bind together intent, SDLC phase, role mode, constraints, acceptance criteria, risk, allowed actions, forbidden actions, verification requirements, and handoff requirements.

## Canonical Examples

The `examples/` directory contains one valid Work Packet for each Astra SDLC phase:

| File | SDLC Phase | Purpose |
|---|---|---|
| `examples/discovery.example.yaml` | `discovery` | Explore and clarify a problem space. |
| `examples/requirements.example.yaml` | `requirements` | Convert product intent into acceptance criteria. |
| `examples/architecture-and-design.example.yaml` | `architecture_and_design` | Produce or evaluate a technical design. |
| `examples/implementation.example.yaml` | `implementation` | Implement a scoped change. |
| `examples/testing-and-verification.example.yaml` | `testing_and_verification` | Prove behavior through verification evidence. |
| `examples/review.example.yaml` | `review` | Review a change set against requirements and risk. |
| `examples/release.example.yaml` | `release` | Prepare a verified change for release. |
| `examples/operations.example.yaml` | `operations` | Investigate or respond to operational behavior. |
| `examples/continuous-improvement.example.yaml` | `continuous_improvement` | Convert retrospective learning into process improvement. |

## Rule

All canonical examples must validate against the current Work Packet schema.

The Work Packet Engine test suite verifies these files directly.
