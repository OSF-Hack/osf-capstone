import { describe, expect, it } from "vitest";
import type { CivicSource } from "./civic-service";
import { determineVerificationStatus } from "./verification";

const source: CivicSource = {
  id: "source-1",
  title: "Authoritative service guidance",
  issuer: "Responsible institution",
  jurisdiction: "Selected jurisdiction",
  url: "https://example.gov/service",
  retrievedAt: "2026-09-16T00:00:00.000Z",
  reviewedByHuman: true,
};

describe("determineVerificationStatus", () => {
  it("returns unverified without supporting evidence", () => {
    expect(
      determineVerificationStatus({
        sources: [],
        criticalFieldCount: 4,
        supportedCriticalFieldCount: 0,
        hasAuthoritativeConflict: false,
      }),
    ).toBe("unverified");
  });

  it("surfaces authoritative conflicts", () => {
    expect(
      determineVerificationStatus({
        sources: [source],
        criticalFieldCount: 4,
        supportedCriticalFieldCount: 4,
        hasAuthoritativeConflict: true,
      }),
    ).toBe("conflicting");
  });

  it("requires complete human-reviewed support for verified status", () => {
    expect(
      determineVerificationStatus({
        sources: [source],
        criticalFieldCount: 4,
        supportedCriticalFieldCount: 4,
        hasAuthoritativeConflict: false,
      }),
    ).toBe("verified");
  });
});

