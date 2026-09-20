# Evidence brief: driver's licence tracking and escalation

Reviewed: 20 September 2026

## Decision

The evidence supports keeping the project in **Transparency & Accountability**
and retaining the narrow golden journey: help a Nigerian driver's licence
applicant locate the official tracker, understand what it requires, preserve a
simple action record and reach a verified escalation channel when the process
stalls.

The strongest differentiator is not another application or status database.
It is an independent, privacy-minimising navigation and evidence layer across a
fragmented multi-agency journey.

## Evidence stack

| Layer | Evidence | What it supports | Boundary |
| --- | --- | --- | --- |
| Participant-observed | Ahmed renewed alongside his father, joined repeated FRSC follow-ups and witnessed a delay of almost one year after staff attributed the stalled renewal to a previous capture made while wearing a Hausa cap | The problem is personally grounded; repeated physical follow-up and an unexplained capture exception are credible product cases | One household case; the reported cause is not independently verified |
| Historical survey | CLEEN Foundation, *Survey on Drivers Licence Application and Renewal in Nigeria 2015*, 370 face-to-face respondents across the listed locations | Long-running friction, reliance on unofficial routes, slow processing and weak reporting confidence | 2015 data is not current validation; descriptive sample; internal inconsistencies noted below |
| Recent investigation | ICIR, May 2025, documented applicants in Lagos, Abia and Abuja facing repeated visits, expired temporary licences, inconsistent communication and unresolved delays | The tracking/escalation failure recurred across places and created financial, work and enforcement risks | Journalistic cases are supporting evidence, not our interviews |
| Institutional response | FRSC acknowledged technical and administrative challenges and a backlog in 2025; the House of Representatives moved to investigate operational problems | The issue was institutionally recognised rather than merely anecdotal | Statements describe a changing system; they do not prove present conditions at every centre |
| Current official journey | The 2026 NDL portal provides renewal, application tracking, support, capture-centre information and Android eNDL activation | Our product must route to official services and explain their boundaries, not impersonate or duplicate them | Official pages do not publish a guaranteed support response time or definitions for every status |

## Findings that matter for the product

### 1. The failure is visibility after submission

Applicants can be told to return repeatedly without a clear, durable explanation
of what failed, who owns the next action or when escalation becomes appropriate.
The product should therefore start with the applicant's situation—not a generic
list of links—and end with one documented next step.

### 2. Multiple agencies create an accountability gap

The official journey crosses state Boards of Internal Revenue, VIO and FRSC.
An applicant can know that something is wrong without knowing which institution
owns the blockage. The action card should record the stage, channel attempted,
date and outcome without storing licence numbers, dates of birth or payment data.

### 3. Failure cases need safe, explicit escalation

In the 2015 survey, only 6% said they had reported an alleged bribery incident;
among those who had not, the most common stated reasons included believing
nothing would happen and not knowing where or how to complain. This supports a
verified escalation path and later anonymous discrepancy reporting, with clear
warnings that the prototype cannot resolve an FRSC case.

### 4. Inclusion must cover capture exceptions

The participant's father experienced a reported technology/headwear exception.
The immediate design response is a neutral **capture or identity mismatch**
path—not an unsupported claim that Hausa caps cause failures. Validation should
ask whether applicants were told why capture failed, received a reference or
written next step, and could escalate without repeated travel.

### 5. The official system is changing

In October 2025, FRSC announced higher printing capacity and contactless,
on-the-spot capture intended to remove temporary licences and delays. The 2026
portal also promotes eNDL. This makes real-time source review essential and
means our pitch must not claim that every applicant still waits months. Our
defensible claim is that when the standard journey fails, applicants need
traceable, verified guidance and escalation.

## Survey findings we can cite carefully

The survey reports:

- 62% selected a slow, cumbersome process requiring agents as the main
  application challenge;
- 57% of respondents who used an unofficial route selected speed as a reason;
- 57% said they would not report a requested bribe;
- 94% said they had never reported an alleged bribery incident; and
- 31% of non-reporters selected not knowing where or how to lodge a complaint.

Use these only as **2015 historical findings**. Do not present them as current
national prevalence estimates.

## Survey quality notes

- The methodology says the study covered five states but lists Imo, Rivers,
  Lagos, Ogun, Nassarawa and Abuja—six locations if Abuja is counted separately.
- The summary says 39% received a licence in one to two months, while the chart
  shows 48%.
- The sample was 370 face-to-face respondents, with 60 per listed location and
  70 in Lagos; the deck does not establish a nationally representative design.

These inconsistencies should be disclosed if the survey appears in the pitch
deck. Prefer the charted values only when necessary and avoid the disputed
one-to-two-month statistic.

## Product decisions

### Keep now

- situation-led routing to the official tracker;
- verified links and visible source-review dates;
- escalation options that identify the responsible institution;
- a privacy-safe action card applicants can retain;
- an explicit capture/identity exception route;
- honest language about evidence gaps and changing procedures.

### Build after validation

- anonymous discrepancy reporting using categories rather than free-form
  sensitive case details;
- Hausa localisation reviewed by a fluent human;
- offline retention of general guidance and the action card;
- a source-change review workflow for official guidance.

### Do not claim or build

- direct access to FRSC application records;
- automated resolution, guaranteed response times or guaranteed collection
  dates;
- diagnosis that cultural or religious headwear caused a biometric failure;
- a new status database populated with personal identifiers;
- bribery allegations about named individuals or centres without verified
  evidence and safeguards.

## Stage 6 boundary and fastest completion

Desk research demonstrates importance and triangulates the participant's
observation. It does not test whether three applicants can use the prototype.
Stage 6 remains open until three consented sessions are recorded.

Fastest ethical route:

1. Interview the participant's father as P1 using a fresh consent script.
2. Recruit one recent successful applicant as P2.
3. Recruit one stalled or repeatedly visiting applicant as P3.
4. Run the same five-to-eight-minute questions and prototype task for all three.
5. Pass the evidence gate only if two independently confirm the problem and all
   three complete the golden journey with no more than one minor prompt.

## Sources

- [Nigeria Driver's Licence portal](https://nigeriadriverslicence.frsc.gov.ng/)
- [Nigeria Driver's Licence FAQ](https://www.nigeriadriverslicence.org/faq)
- [ICIR: Paid but no licence (23 May 2025)](https://www.icirnigeria.org/paid-but-no-licence-nigerian-drivers-trapped-in-frsc-broken-system/)
- [Punch: FRSC set for contactless, instant issuance (21 October 2025)](https://punchng.com/frsc-set-for-contactless-instant-drivers-licence-issuance/)
- [House investigation report, Premium Times (22 October 2025)](https://www.premiumtimesng.com/news/more-news/830019-reps-move-to-end-prolonged-delays-in-drivers-licence-issuance-commence-investigation.html)
- CLEEN Foundation, *Survey on Drivers Licence Application and Renewal in
  Nigeria 2015*, participant-supplied PDF and [Academia record](https://www.academia.edu/20187656/SURVEY_ON_DRIVERS_LICENCE_APPLICATION_AND_RENEWAL_IN_NIGERIA_2015)
