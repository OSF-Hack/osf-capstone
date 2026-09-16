import type { CivicSource, EscalationChannel, ServiceGuide } from "@/lib/domain/civic-service";

export const driverLicenceSources: CivicSource[] = [
  {
    id: "ndl-portal",
    title: "Nigeria Driver's Licence Portal",
    issuer: "Federal Road Safety Corps",
    jurisdiction: "Federal Republic of Nigeria",
    url: "https://nigeriadriverslicence.frsc.gov.ng/",
    retrievedAt: "2026-09-16T00:00:00.000Z",
    reviewedByHuman: true,
  },
  {
    id: "ndl-track",
    title: "Track Driver's Licence Application Status",
    issuer: "Nigeria Driver's Licence",
    jurisdiction: "Federal Republic of Nigeria",
    url: "https://pay.nigeriadriverslicence.org/license/trackStatus",
    retrievedAt: "2026-09-16T00:00:00.000Z",
    reviewedByHuman: true,
  },
  {
    id: "ndl-support",
    title: "Nigeria Driver's Licence Support",
    issuer: "Federal Road Safety Corps Driver's Licence Platform",
    jurisdiction: "Federal Republic of Nigeria",
    url: "https://nigeriadriverslicence.frsc.gov.ng/support",
    retrievedAt: "2026-09-16T00:00:00.000Z",
    reviewedByHuman: true,
  },
  {
    id: "frsc-contact",
    title: "FRSC Contact and Feedback",
    issuer: "Federal Road Safety Corps",
    jurisdiction: "Federal Republic of Nigeria",
    url: "https://frsc.gov.ng/contact-us/",
    retrievedAt: "2026-09-16T00:00:00.000Z",
    reviewedByHuman: true,
  },
  {
    id: "frsc-centres",
    title: "FRSC Driver's Licence Centres",
    issuer: "Federal Road Safety Corps",
    jurisdiction: "Federal Republic of Nigeria",
    url: "https://frsc.gov.ng/commands/driver-license-centers/",
    retrievedAt: "2026-09-16T00:00:00.000Z",
    reviewedByHuman: true,
  },
];

export const driverLicenceGuide: ServiceGuide = {
  id: "ng-federal-driver-licence",
  serviceName: "Nigeria Driver's Licence Processing",
  jurisdiction: "Federal Republic of Nigeria",
  summary:
    "A verified route from application-stage identification to official status tracking and support escalation.",
  officialFee:
    "Fees depend on licence class, validity, and payment channel. Confirm the generated invoice on the official portal before paying.",
  requirements: [
    "Application ID or driver's licence number",
    "Applicant's date of birth",
    "Access to the official status page CAPTCHA",
  ],
  steps: [
    "Complete the application and payment steps on the official portal.",
    "Complete the applicable BIR confirmation, VIO test, and FRSC biometric stages.",
    "Use the official status page with the application ID or licence number and date of birth.",
    "If the result is missing, unclear, or does not progress, prepare a support request with non-public application details.",
    "Use the official licence support channel first, then the general FRSC feedback channel or a listed licence centre.",
  ],
  escalationPath: [
    "Nigeria Driver's Licence support form",
    "Driver's licence platform support phone or email",
    "FRSC national enquiries and complaints contacts",
    "A listed Driver's Licence Centre for an in-person follow-up",
  ],
  sourceIds: ["ndl-portal", "ndl-track", "ndl-support", "frsc-contact", "frsc-centres"],
  status: "verified",
  lastVerifiedAt: "2026-09-16T00:00:00.000Z",
};

export const driverLicenceEscalationChannels: EscalationChannel[] = [
  {
    id: "support-form",
    label: "Driver's Licence support form",
    kind: "form",
    value: "https://nigeriadriverslicence.frsc.gov.ng/support",
    sourceId: "ndl-support",
    note: "The official form accepts an Application ID or licence number, date of birth, contact details, and a description of the issue.",
  },
  {
    id: "support-email",
    label: "Platform support email",
    kind: "email",
    value: "frsc.support@swglobal.com",
    sourceId: "ndl-support",
    note: "Use for challenges encountered on the driver's licence platform. Do not post application details publicly.",
  },
  {
    id: "support-phone",
    label: "Platform support phone",
    kind: "phone",
    value: "0807 769 0362",
    sourceId: "ndl-support",
    note: "The number is published on the official driver's licence support page.",
  },
  {
    id: "frsc-feedback",
    label: "FRSC enquiries and complaints",
    kind: "phone",
    value: "0700-CALL-FRSC",
    sourceId: "frsc-contact",
    note: "Use the national feedback channel for unresolved enquiries or complaints. The emergency number is intentionally not presented for routine licensing issues.",
  },
  {
    id: "licence-centre",
    label: "Driver's Licence Centre directory",
    kind: "in_person",
    value: "https://frsc.gov.ng/commands/driver-license-centers/",
    sourceId: "frsc-centres",
    note: "Use the official state-by-state directory to locate an appropriate centre for in-person follow-up.",
  },
];

