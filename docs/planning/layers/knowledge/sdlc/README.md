SDLC Knowledge Base

The SDLC knowledge base teaches the AI the SDLC lifecycle.

It should include:

```text
sdlc/
├── lifecycle-overview.md
├── discovery.md
├── requirements.md
├── architecture-and-design.md
├── implementation.md
├── testing-and-quality.md
├── security-review.md
├── release-management.md
├── operations-and-observability.md
├── maintenance.md
└── continuous-improvement.md
```

Each file should explain:

* purpose of the phase
* inputs
* outputs
* responsible human roles
* AI-assistable tasks
* required artifacts
* anti-patterns
* exit criteria

Example:

```text
Implementation phase

Inputs:
- approved backlog item
- acceptance criteria
- architecture constraints
- relevant ADRs
- Definition of Done
- test strategy

Outputs:
- code changes
- tests
- documentation updates
- verification results
- PR summary
- traceability links