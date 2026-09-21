# Submission summary

## Project title

CivicRoute NG

## Track

Transparency & Accountability

## Live application

https://civicrouteng.vercel.app/

## Summary

Nigerian driver's licence applicants can complete an application yet lose
visibility when the process stalls. Official information exists across the
Nigeria Driver's Licence platform and Federal Road Safety Corps channels, but
applicants may not know which stage failed, what the official tracker requires,
or where to escalate an unresolved case. Repeated physical visits cost time,
transport money and missed work while providing little durable evidence of the
next action.

CivicRoute NG is a privacy-conscious civic navigator for this failure case. An
applicant selects the last completed processing stage and the problem they are
experiencing. The application returns a short action plan, routes them to the
official status tracker, and presents only relevant, verified escalation
channels. Applicants can print or copy an action card and create a
privacy-safe discrepancy note when published guidance differs from their lived
experience. CivicRoute NG does not request or store names, dates of birth,
application IDs, licence numbers, receipts or biometric information.

Trust is a product feature. Each material instruction maps to a registered
official source with its issuer, jurisdiction, review date and human-review
status. The interface states where evidence is missing, including the absence
of an official response-time guarantee. It never predicts application status,
promises resolution or impersonates FRSC. The first service pack remains
available after an initial visit, while external official services still
require connectivity.

The proof of concept uses Next.js, React and TypeScript. Domain rules separate
verified civic guidance from the interface and automated tests cover critical
routing and safety boundaries. We used Codex to accelerate scaffolding,
research organization, implementation, testing and documentation. Human review
constrained all civic claims to registered evidence and preserved the
participant-owned problem definition.

CivicRoute NG can scale through independently reviewed service packs for other
high-friction public services. Each pack reuses the same source register,
freshness policy, privacy rules, action-card pattern and discrepancy workflow
without creating a new government database.

## Applicant validation

Eight people responded to the validation survey. Five had personally applied
for, renewed or reissued a Nigerian driver's licence and consented to anonymous
use of their responses. Three of the five reported four or more physical
return visits, three reported repeated transport expenses, and three described
biometric or capture-related friction. Every eligible respondent named at
least one traceable signal they would need to believe a complaint was being
handled, including a reference number, written resolution, response timeframe,
named next step or SMS/email confirmation.

The sample covered Kaduna, Niger and Plateau and was not nationally
representative. The survey validates the applicant problem, not prototype
usability, because respondents did not complete an observed interface task.
