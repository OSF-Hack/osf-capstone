import { z } from "zod";

export const verificationStatusSchema = z.enum([
  "verified",
  "partially_verified",
  "conflicting",
  "unverified",
]);

export type VerificationStatus = z.infer<typeof verificationStatusSchema>;

export const sourceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  issuer: z.string().min(1),
  jurisdiction: z.string().min(1),
  url: z.url(),
  publishedAt: z.iso.datetime().optional(),
  effectiveFrom: z.iso.datetime().optional(),
  retrievedAt: z.iso.datetime(),
  reviewedByHuman: z.boolean(),
});

export const serviceGuideSchema = z.object({
  id: z.string().min(1),
  serviceName: z.string().min(1),
  jurisdiction: z.string().min(1),
  summary: z.string().min(1),
  officialFee: z.string().min(1),
  requirements: z.array(z.string().min(1)).min(1),
  steps: z.array(z.string().min(1)).min(1),
  escalationPath: z.array(z.string().min(1)).min(1),
  sourceIds: z.array(z.string().min(1)).min(1),
  status: verificationStatusSchema,
  lastVerifiedAt: z.iso.datetime(),
});

export const escalationChannelSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  kind: z.enum(["form", "email", "phone", "in_person"]),
  value: z.string().min(1),
  sourceId: z.string().min(1),
  note: z.string().min(1),
});

export type CivicSource = z.infer<typeof sourceSchema>;
export type ServiceGuide = z.infer<typeof serviceGuideSchema>;
export type EscalationChannel = z.infer<typeof escalationChannelSchema>;

