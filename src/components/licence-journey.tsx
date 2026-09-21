"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
          <Image src="/civicroute-mark.svg" alt="" width={42} height={42} priority />
          <span><strong>CivicRoute</strong><small>NG</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#validation">Why this matters</a>
          <a href="#sources-heading">Verified sources</a>
          <a className="nav-action" href="#journey-heading">Start journey</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Transparency & Accountability · Nigeria</p>
          <h1 id="page-title">Your licence journey should never go <em>silent.</em></h1>
          <p className="lede">
            Find your next verified step when a Nigerian driver’s licence application stalls—then
            track, escalate and keep a clear action record without sharing personal data with us.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#journey-heading">Find my next step <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#sources-heading">See how guidance is verified</a>
          </div>
          <div className="trust-strip" aria-label="Trust information">
            <span>✓ Official sources</span>
            <span>✓ No personal data collected</span>
            <span>✓ Offline-ready</span>
          </div>
          <OfflineReady />
        </div>

        <aside className="hero-status" aria-label="Example application journey">
          <div className="status-card-top">
            <div>
              <span className="mini-label">Journey snapshot</span>
              <strong>Driver’s licence application</strong>
            </div>
            <span className="secure-pill">Private by design</span>
          </div>
          <div className="route-visual" aria-hidden="true">
            <span className="route-node complete">✓</span><span className="route-line complete" />
            <span className="route-node complete">✓</span><span className="route-line active" />
            <span className="route-node alert">!</span>
          </div>
          <div className="route-labels" aria-hidden="true">
            <span>Applied</span><span>Captured</span><span>Stalled</span>
          </div>
          <div className="status-alert">
            <span className="alert-icon">!</span>
            <div><small>Current situation</small><strong>No update after biometric capture</strong></div>
          </div>
          <div className="next-step-preview">
            <small>Verified next step</small>
            <strong>Check status, then escalate with evidence</strong>
            <span>Guidance traced to official FRSC sources →</span>
          </div>
        </aside>
      </section>

      <section className="validation-strip" id="validation" aria-labelledby="validation-heading">
        <div className="validation-intro">
          <p className="eyebrow">Applicant signal</p>
          <h2 id="validation-heading">Built around a documented gap</h2>
          <p>Early validation with five eligible applicants. Small sample; directional, not nationally representative.</p>
        </div>
        <div className="validation-stat"><strong>3<span>/5</span></strong><p>returned to a centre four or more times</p></div>
        <div className="validation-stat"><strong>3<span>/5</span></strong><p>faced biometric or capture friction</p></div>
        <div className="validation-stat"><strong>5<span>/5</span></strong><p>wanted traceable handling updates</p></div>
      </section>

      <section className="journey-panel" aria-labelledby="journey-heading">
        <div className="navigator-form">
          <div className="section-heading">
            <p className="eyebrow">Journey navigator</p>
            <h2 id="journey-heading">Tell us where the process went quiet.</h2>
            <p>Choose two answers. Do not enter your licence number, application ID or date of birth.</p>
          </div>
          <div className="field-grid">
            <label>
              <span><b>1</b> Last completed stage</span>
              <select value={stage} onChange={(event) => setStage(event.target.value as ApplicationStage)}>
                {stages.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
            <label>
              <span><b>2</b> What is happening now?</span>
              <select value={issue} onChange={(event) => setIssue(event.target.value as JourneyIssue)}>
                {issues.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="privacy-inline"><span aria-hidden="true">◆</span> Your selections stay on this device.</div>
        </div>

        <article className="recommendation" aria-live="polite">
          <div className="recommendation-top"><p className="status-pill">✓ Verified guidance</p><small>Reviewed 20 Sep 2026</small></div>
          <h3>{recommendation.heading}</h3>
          <ol>
            {recommendation.actions.map((action) => <li key={action}>{action}</li>)}
          </ol>
          <p className="caution"><strong>Privacy:</strong> {recommendation.caution}</p>
          <div className="actions">
            <a className="primary-action" href="https://pay.nigeriadriverslicence.org/license/trackStatus" target="_blank" rel="noreferrer">
              Open official status tracker <span aria-hidden="true">↗</span>
            </a>
            <button type="button" onClick={copyActionCard}>{copied ? "✓ Action card copied" : "Copy action card"}</button>
            <button type="button" onClick={() => window.print()}>Print / save</button>
          </div>
        </article>
      </section>

      <section className="content-section" aria-labelledby="channels-heading">
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

      <section className="content-section prepare-section" aria-labelledby="prepare-heading">
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

      <section className="sources-section" aria-labelledby="sources-heading">
        <div className="sources-copy">
          <p className="eyebrow">Evidence register</p>
          <h2 id="sources-heading">Trust the route because you can inspect the source.</h2>
          <p>Every material instruction is linked to its official origin and dated for review.</p>
          <span className="verified-stamp">✓ Current guidance: {driverLicenceGuide.status}</span>
        </div>
        <details className="source-disclosure" open>
          <summary>View all {driverLicenceSources.length} official sources <span>＋</span></summary>
          <div className="source-list">
            {driverLicenceSources.map((source) => (
              <article key={source.id}>
                <div>
                  <h3>{source.title}</h3>
                  <p>{source.issuer} · Reviewed 20 Sep 2026</p>
                </div>
                <a href={source.url} target="_blank" rel="noreferrer" aria-label={`View official source: ${source.title}`}>↗</a>
              </article>
            ))}
          </div>
          <p className="source-note">No official response-time guarantee was found in the reviewed sources.</p>
        </details>
      </section>

      <footer>
        <div className="brand footer-brand"><Image src="/civicroute-mark.svg" alt="" width={36} height={36} /><span><strong>CivicRoute</strong><small>NG</small></span></div>
        <p>An independent civic-information prototype. Not affiliated with or endorsed by FRSC.</p>
        <a href="#page-title">Back to top ↑</a>
      </footer>
    </>
  );
}
