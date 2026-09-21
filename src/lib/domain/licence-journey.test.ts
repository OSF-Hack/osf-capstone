import { describe, expect, it } from "vitest";
import { recommendLicenceJourney } from "./licence-journey";

describe("recommendLicenceJourney", () => {
  it("routes applicants without status access to the official tracker first", () => {
    const result = recommendLicenceJourney("application", "cannot_track");
    expect(result.channelIds).toEqual(["support-form", "support-phone"]);
    expect(result.caution).toContain("never asks");
  });

  it("does not route routine licensing enquiries to an emergency number", () => {
    const result = recommendLicenceJourney("collection", "no_response");
    expect(result.actions.join(" ")).toContain("Do not use the emergency number");
    expect(result.channelIds).toEqual(["frsc-feedback", "licence-centre"]);
  });

  it("preserves the applicant's last confirmed processing stage", () => {
    const result = recommendLicenceJourney("biometrics", "stalled");
    expect(result.actions[0]).toContain("biometrics");
  });

  it("handles capture exceptions without inventing a diagnosis", () => {
    const result = recommendLicenceJourney("biometrics", "capture_exception");
    expect(result.heading).toContain("capture exception");
    expect(result.caution).toContain("does not diagnose");
    expect(result.channelIds).toContain("support-form");
  });
});
