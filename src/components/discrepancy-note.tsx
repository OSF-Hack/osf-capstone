"use client";

import { useMemo, useState } from "react";

const categories = [
  "Official link did not work",
  "Requirements were different",
  "Status was unclear",
  "Support channel did not respond",
  "A different fee or payment route was requested",
];

export function DiscrepancyNote() {
  const [category, setCategory] = useState(categories[0]);
  const [copied, setCopied] = useState(false);
  const note = useMemo(
    () =>
      `Driver's licence guidance discrepancy\nCategory: ${category}\nObserved on: ${new Date().toLocaleDateString("en-NG")}\n\nDo not add a name, phone number, application ID, licence number, date of birth, receipt, or biometric information.`,
    [category],
  );

  async function copyNote() {
    await navigator.clipboard.writeText(note);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="discrepancy-panel" aria-labelledby="discrepancy-heading">
      <div>
        <p className="eyebrow">Community feedback</p>
        <h2 id="discrepancy-heading">Official guidance did not match reality?</h2>
        <p>
          Create a privacy-safe note you can retain or send through an official complaints channel.
          This pilot does not upload or store your report.
        </p>
      </div>
      <div className="discrepancy-builder">
        <label>
          What was different?
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <div className="note-preview">
          <strong>Privacy-safe note</strong>
          <p>{category}</p>
          <small>No sensitive or identifying information is included.</small>
        </div>
        <button type="button" className="dark-action" onClick={copyNote}>
          {copied ? "Copied" : "Copy discrepancy note"}
        </button>
      </div>
    </section>
  );
}
