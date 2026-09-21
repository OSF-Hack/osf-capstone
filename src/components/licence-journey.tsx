"use client";

import { useMemo, useState } from "react";
import { DiscrepancyNote } from "@/components/discrepancy-note";
import { OfflineReady } from "@/components/offline-ready";
import {
  driverLicenceEscalationChannels,
  driverLicenceGuide,
  driverLicenceSources,
} from "@/data/nigeria-driver-licence";
import {
  recommendLicenceJourney,
  type ApplicationStage,
  type JourneyIssue,
} from "@/lib/domain/licence-journey";

const stages: Array<{ value: ApplicationStage; label: string }> = [
  { value: "application", label: "Online application" },
  { value: "payment", label: "Payment or BIR confirmation" },
  { value: "test", label: "VIO driving test" },
  { value: "biometrics", label: "FRSC biometric capture" },
  { value: "collection", label: "Card collection" },
  { value: "unknown", label: "I am not sure" },
];

const issues: Array<{ value: JourneyIssue; label: string }> = [
  { value: "cannot_track", label: "I cannot locate or use tracking" },
  { value: "unclear_status", label: "The status is unclear" },
  { value: "stalled", label: "The application appears stalled" },
  { value: "capture_exception", label: "Biometric capture or identity details were rejected" },
  { value: "no_response", label: "Support has not responded" },
];

function channelHref(kind: string, value: string) {
  if (kind === "email") return `mailto:${value}`;
  if (kind === "phone") return `tel:${value.replace(/[^+\d]/g, "")}`;
  return value;
}

export function LicenceJourney() {
  const [stage, setStage] = useState<ApplicationStage>("unknown");
  const [issue, setIssue] = useState<JourneyIssue>("cannot_track");
  const recommendation = useMemo(() => recommendLicenceJourney(stage, issue), [stage, issue]);
  const channels = driverLicenceEscalationChannels.filter((channel) =>
    recommendation.channelIds.includes(channel.id),
  );
  const stageLabel = stages.find((item) => item.value === stage)?.label ?? stage;
  const issueLabel = issues.find((item) => item.value === issue)?.label ?? issue;
  const [copied, setCopied] = useState(false);

  async function copyActionCard() {
    const card = [
      "CivicRoute NG — verified driver's licence action card",
      `Last completed stage: ${stageLabel}`,
      `Problem: ${issueLabel}`,
      recommendation.heading,
      ...recommendation.actions.map((action, index) => `${index + 1}. ${action}`),
      `Privacy: ${recommendation.caution}`,
      "Verify current guidance through the official sources listed in CivicRoute NG.",
    ].join("\n");
    await navigator.clipboard.writeText(card);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <header className="masthead">
        <a className="brand" href="#page-title" aria-label="CivicRoute NG home">
          <span>CR</span>
          CivicRoute NG
        </a>
        <a href="#sources-heading">How guidance is verified</a>
      </header>
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Transparency & Accountability · Nigeria</p>
        <h1 id="page-title">When the process goes quiet, find your next verified step.</h1>
        <p className="lede">
          CivicRoute NG turns fragmented official guidance into a clear driver’s licence tracking
          and escalation path—without collecting your personal application data.
        </p>
        <div className="trust-strip" aria-label="Trust information">
          <span>Verified sources</span>
          <span>Reviewed 20 Sep 2026</span>
          <span>No personal data collected</span>
        </div>
        <OfflineReady />
      </section>

      <ol className="journey-summary" aria-label="How CivicRoute NG works">
        <li><span>01</span><strong>Describe the blockage</strong><small>No identifiers required</small></li>
        <li><span>02</span><strong>Follow verified guidance</strong><small>Official sources first</small></li>
        <li><span>03</span><strong>Keep an action record</strong><small>Escalate with evidence</small></li>
      </ol>

      <section className="journey-panel" aria-labelledby="journey-heading">
        <div className="section-heading">
          <p className="eyebrow">Journey navigator</p>
          <h2 id="journey-heading">Where are you, and what went wrong?</h2>
        </div>
        <div className="field-grid">
          <label>
            Last completed stage
            <select value={stage} onChange={(event) => setStage(event.target.value as ApplicationStage)}>
              {stages.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </label>
          <label>
            Current problem
            <select value={issue} onChange={(event) => setIssue(event.target.value as JourneyIssue)}>
              {issues.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </label>
        </div>

        <article className="recommendation" aria-live="polite">
          <p className="status-pill">Verified guidance</p>
          <h3>{recommendation.heading}</h3>
          <ol>
            {recommendation.actions.map((action) => <li key={action}>{action}</li>)}
          </ol>
          <p className="caution"><strong>Privacy:</strong> {recommendation.caution}</p>
          <div className="actions">
            <a className="primary-action" href="https://pay.nigeriadriverslicence.org/license/trackStatus" target="_blank" rel="noreferrer">
              Open official status tracker
            </a>
            <button type="button" onClick={() => window.print()}>Print or save action card</button>
            <button type="button" onClick={copyActionCard}>{copied ? "Action card copied" : "Copy action card"}</button>
          </div>
        </article>
      </section>

      <section aria-labelledby="channels-heading">
        <div className="section-heading">
          <p className="eyebrow">Escalation</p>
          <h2 id="channels-heading">Use a verified support channel</h2>
        </div>
        <div className="cards channel-cards">
          {channels.map((channel) => (
            <article key={channel.id}>
              <p className="channel-kind">{channel.kind.replace("_", " ")}</p>
              <h3>{channel.label}</h3>
              <p>{channel.note}</p>
              <a href={channelHref(channel.kind, channel.value)} target={channel.kind === "form" || channel.kind === "in_person" ? "_blank" : undefined} rel="noreferrer">
                {channel.kind === "form" || channel.kind === "in_person" ? "Open official channel" : channel.value}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="prepare-heading">
        <div className="section-heading">
          <p className="eyebrow">Before contacting support</p>
          <h2 id="prepare-heading">Prepare a concise escalation pack</h2>
        </div>
        <ul className="checklist">
          <li>Application ID or driver’s licence number</li>
          <li>Applicant’s date of birth</li>
          <li>Selected Driver’s Licence Centre</li>
          <li>Last completed processing stage and date</li>
          <li>Payment receipt or acknowledgement slip, where applicable</li>
          <li>A short description of the expected and actual result</li>
        </ul>
        <p className="privacy-note">Keep these details private. Submit them only through an official channel.</p>
      </section>

      <DiscrepancyNote />

      <section aria-labelledby="sources-heading">
        <div className="section-heading">
          <p className="eyebrow">Evidence register</p>
          <h2 id="sources-heading">Every material instruction remains traceable</h2>
        </div>
        <div className="source-list">
          {driverLicenceSources.map((source) => (
            <article key={source.id}>
              <div>
                <h3>{source.title}</h3>
                <p>{source.issuer} · Human-reviewed 20 September 2026</p>
              </div>
              <a href={source.url} target="_blank" rel="noreferrer">View source</a>
            </article>
          ))}
        </div>
        <p className="source-note">Current status: <strong>{driverLicenceGuide.status}</strong>. No official response-time guarantee was found in the reviewed sources.</p>
      </section>

      <footer>
        <strong>CivicRoute NG</strong>
        <p>An independent civic-information prototype. Not affiliated with or endorsed by FRSC.</p>
      </footer>
    </>
  );
}
