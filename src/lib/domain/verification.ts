import type { CivicSource, VerificationStatus } from "./civic-service";

type VerificationInput = {
  sources: CivicSource[];
  criticalFieldCount: number;
  supportedCriticalFieldCount: number;
  hasAuthoritativeConflict: boolean;
};

export function determineVerificationStatus(input: VerificationInput): VerificationStatus {
  const {
    sources,
    criticalFieldCount,
    supportedCriticalFieldCount,
    hasAuthoritativeConflict,
  } = input;

  if (sources.length === 0 || supportedCriticalFieldCount === 0) return "unverified";
  if (hasAuthoritativeConflict) return "conflicting";
  if (criticalFieldCount <= 0 || supportedCriticalFieldCount < criticalFieldCount) {
    return "partially_verified";
  }
  if (sources.some((source) => !source.reviewedByHuman)) return "partially_verified";
  return "verified";
}

