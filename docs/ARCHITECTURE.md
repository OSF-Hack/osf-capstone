# Proof-of-concept architecture

## Principles

1. One deployable application and one golden user journey.
2. Retrieval from a curated source register, not unrestricted web answers.
3. Deterministic verification states with visible evidence limits.
4. No account required for public guidance.
5. Data minimisation for discrepancy reports.
6. Text-first design with an offline cache added after the core journey works.

## Planned modules

- `source-register`: issuer, jurisdiction, URL, dates and human-review status.
- `service-guide`: fees, requirements, steps, evidence and escalation path.
- `verification`: verified, partially verified, conflicting or unverified.
- `action-card`: lightweight checklist that can be saved and shared.
- `discrepancy-report`: anonymous-by-default report with PII warnings.
- `review-console`: human review and safe aggregate insights.

## AI boundary

AI may simplify, translate and structure retrieved evidence. It may not invent requirements, fees, contacts, deadlines, truth verdicts or escalation destinations. Missing evidence must produce an abstention state.

