export type ApplicationStage =
  | "application"
  | "payment"
  | "test"
  | "biometrics"
  | "collection"
  | "unknown";

export type JourneyIssue =
  | "cannot_track"
  | "unclear_status"
  | "stalled"
  | "capture_exception"
  | "no_response";

export type JourneyRecommendation = {
  heading: string;
  actions: string[];
  channelIds: string[];
  caution: string;
};

export function recommendLicenceJourney(
  stage: ApplicationStage,
  issue: JourneyIssue,
): JourneyRecommendation {
  if (issue === "cannot_track") {
    return {
      heading: "Start with the official application-status page",
      actions: [
        "Locate the Application ID on the acknowledgement slip, or use the driver's licence number.",
        "Have the applicant's date of birth available.",
        "Complete the CAPTCHA directly on the official status page.",
        "If no record is returned, save the date and a screenshot without publishing personal details.",
      ],
      channelIds: ["support-form", "support-phone"],
      caution: "This prototype never asks you to enter or store your Application ID, licence number, or date of birth.",
    };
  }

  if (issue === "no_response") {
    return {
      heading: "Escalate through a second verified channel",
      actions: [
        "Keep the date and channel of the first support request.",
        "Prepare the Application ID or licence number, the processing centre, and a concise issue summary.",
        "Contact FRSC through the national feedback channel or visit a listed Driver's Licence Centre.",
        "Do not use the emergency number for a routine licensing enquiry.",
      ],
      channelIds: ["frsc-feedback", "licence-centre"],
      caution: "The official sources reviewed do not publish a guaranteed response time, so this guide does not invent one.",
    };
  }

  if (issue === "capture_exception") {
    return {
      heading: "Record the capture exception and request a written next step",
      actions: [
        "Record the capture centre, date, and the neutral reason staff gave for the failed or disputed capture.",
        "Ask the centre to identify the next official step without posting biometric or identity information publicly.",
        "Use the platform support form if the exception remains unresolved.",
        "If support does not resolve it, use the FRSC complaints channel or the official centre directory.",
      ],
      channelIds: ["support-form", "frsc-feedback", "licence-centre"],
      caution:
        "This guide does not diagnose the cause of a biometric or identity mismatch. Keep facial images and identity documents out of public reports.",
    };
  }

  const stageLabel = stage === "unknown" ? "current processing" : stage;
  return {
    heading: issue === "stalled" ? "Document the stalled stage before escalating" : "Clarify the status with support",
    actions: [
      `Record the last confirmed ${stageLabel} step and its date.`,
      "Keep the acknowledgement slip or temporary card available.",
      "Use the platform support form and describe the last completed step.",
      "If unresolved, use the national FRSC complaints channel or the official centre directory.",
    ],
    channelIds: ["support-form", "support-email", "frsc-feedback", "licence-centre"],
    caution: "Share application details only through official channels, not in public posts or screenshots.",
  };
}
