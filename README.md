# CivicRoute NG

A trustworthy, actionable civic-information proof of concept in the **Transparency & Accountability** track.

**Live application:** [civicrouteng.vercel.app](https://civicrouteng.vercel.app/)

## Current status

The first service pack addresses a participant-observed problem in Nigeria's federal driver's licence process: applicants may not know how to track an application or escalate when tracking is unavailable, unclear, or stalled.

The proof of concept does not replace FRSC systems or collect application identifiers. It routes applicants to official services, explains what to prepare, exposes verified escalation channels with source provenance, and helps applicants retain a privacy-safe action record.

## Golden journey

1. Describe the last completed processing stage and current blockage.
2. Receive evidence-backed guidance and open the official status tracker.
3. Use a verified escalation channel when tracking does not resolve the problem.
4. Print or copy a privacy-safe action card.
5. Record a mismatch between published guidance and lived experience without uploading personal information.

After the first successful visit, the service worker retains the application shell and previously loaded same-origin assets for low-connectivity use. External official services still require a connection.

## Trust commitments

- Civic guidance is grounded in registered sources.
- Sources expose issuer, jurisdiction, retrieval date and human-review status.
- Conflicting evidence is displayed, not silently resolved by AI.
- Missing evidence produces an unverified state.
- AI may simplify or translate evidence but cannot invent civic instructions.
- The discrepancy-note pilot runs locally and does not upload or store a report.

## Local setup

This repository is tested with Node.js 24 and npm 11. If you use `nvm`, the
included `.nvmrc` selects the expected Node major version.

```bash
nvm use
npm ci
npm run check:env
npm run dev
```

Open `http://localhost:3000`.

No environment variables are required for the current proof of concept.

### If the downloaded project fails

Run these commands from the directory that contains `package.json`:

```bash
node --version
npm --version
npm ci
npm run check:env
npm run build
```

Expected majors are Node 24 and npm 11. Do not copy an old `node_modules`
folder into the project, and use `npm ci` so dependencies match
`package-lock.json`. If port 3000 is already in use, run `npm run dev -- -p 3001`
and open `http://localhost:3001`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Documentation

- `docs/PROBLEM-OWNERSHIP.md` — participant-authored origin and validation record
- `docs/ARCHITECTURE.md` — technical boundaries and planned modules
- `docs/SOURCE-REGISTER.md` — official sources and known evidence gaps
- `docs/AI-DEVELOPMENT-LOG.md` — auditable AI coding usage
- `docs/DELIVERY-PLAN.md` — deadline checkpoints
- `docs/SUBMISSION-CHECKLIST.md` — final quality gate
- `docs/VALIDATION-PLAN.md` — Stage 6 interview protocol and evidence gate
