/**
 * Creates the Nigerian Driver's Licence Applicant Validation Google Form.
 *
 * Usage:
 * 1. Open https://script.google.com/home/projects/create
 * 2. Replace the contents of Code.gs with this file.
 * 3. Select createValidationForm and click Run.
 * 4. Approve the requested Google Forms permission.
 * 5. Read the execution log for the edit and responder URLs.
 */
function createValidationForm() {
  const form = FormApp.create(
    "Nigerian Driver’s Licence Applicant Validation",
  );

  form.setDescription(
    "A facilitator-led, privacy-conscious study of experiences with Nigerian " +
      "driver’s licence application, renewal, tracking and escalation. Do not " +
      "record names, phone numbers, licence numbers, application IDs, dates of " +
      "birth, payment details or other identifying information. Stop the " +
      "session if the participant is ineligible or does not consent. Ask the " +
      "experience questions before showing the prototype.",
  );
  form.setConfirmationMessage(
    "Thank you. Your anonymous validation response has been recorded.",
  );
  form.setProgressBar(true);

  addHeader(
    form,
    "Eligibility and consent",
    "Stop the session if the participant is ineligible or does not consent.",
  );
  addChoice(form, "Have you personally applied for, renewed, or reissued a Nigerian driver’s licence?", ["Yes", "No"]);
  addChoice(form, "Do you consent to participate and allow anonymous notes to be recorded?", ["Yes, I consent", "No, I do not consent"]);
  form.addTextItem().setTitle("Participant code").setRequired(true);
  addChoice(form, "Which process did you undertake?", ["First-time application", "Renewal", "Reissue or replacement", "Licence-class upgrade", "Other"]);
  addChoice(form, "What is the current outcome?", ["I received the permanent licence", "I am still waiting", "I received only a temporary licence", "The process stalled", "I abandoned the process", "Other"]);

  addHeader(
    form,
    "Applicant experience",
    "Ask these questions before showing the prototype.",
  );
  form.addTextItem().setTitle("In which state or the Federal Capital Territory did the process take place?");
  form.addParagraphTextItem().setTitle("Briefly describe what happened during your most recent driver’s licence application, renewal or reissue.").setRequired(true);
  addChoice(form, "At which point did you stop knowing what was happening or what to do next?", ["Online application", "Payment confirmation", "VIO test or verification", "Biometric capture", "Temporary licence", "Waiting for permanent licence", "Licence collection", "I always knew what to do", "Other"]);
  addChecks(form, "How did you try to check the progress of your application? Select all that apply.", ["Visited the processing centre", "Asked an FRSC official", "Called a telephone number", "Sent an email or support request", "Used the official online tracker", "Asked an agent or intermediary", "Asked friends or relatives", "Checked social media", "I did not know how to track it", "Other"]);
  addChoice(form, "What response or explanation did you receive?", ["A clear status and next step", "A status without a clear next step", "I was told to return later", "I was told the system or network was unavailable", "I was told there was a biometric, capture or identity problem", "I received different explanations from different people", "I received no explanation", "Other"]);
  addChoice(form, "Approximately how many times did you physically return to a processing centre?", ["None", "Once", "Two to three times", "Four to six times", "More than six times", "Cannot remember"]);
  addChecks(form, "What did the uncertainty or delay cost you? Select all that apply.", ["Repeated transport expenses", "Missed work or business", "Additional or repeated payments", "Difficulty driving legally", "Harassment or difficulty during road checks", "Inability to use the licence for identification", "Stress or loss of confidence", "No significant consequence", "Other"]);
  addChecks(form, "When tracking did not help, what did you do next? Select all that apply.", ["Returned to the processing centre", "Contacted FRSC", "Contacted VIO", "Contacted the State Board of Internal Revenue", "Asked an agent or intermediary", "Submitted a complaint", "Did not know where to escalate", "Gave up or continued waiting", "Other"]);
  addChecks(form, "If there was a biometric, capture, identity or information problem, what were you given? Select all that apply.", ["A clear explanation", "A written record or reference number", "The institution responsible for resolving it", "A specific next action", "A follow-up date or timeframe", "An escalation channel", "None of these", "Not applicable"], false);
  form.addParagraphTextItem().setTitle("What single piece of information would have helped you most?").setRequired(true);
  addChoice(form, "Which escalation channel would you trust most?", ["Official online support form", "FRSC telephone line", "FRSC email", "A physical FRSC office", "VIO", "State Board of Internal Revenue", "An independent public-service complaint platform", "A civil-society organisation", "I would not trust any of these", "Other"]);
  addChecks(form, "What evidence would make you believe that your complaint was being handled? Select all that apply.", ["A complaint reference number", "SMS or email confirmation", "The responsible agency or department", "A named next step", "A response timeframe", "Status-update notifications", "A written resolution", "Other"]);

  addHeader(
    form,
    "Prototype observation",
    "Read: Imagine you submitted a driver’s licence application and no longer " +
      "know what stage it has reached. Use this prototype to determine how you " +
      "would track it and where you would escalate if tracking did not resolve " +
      "the problem.",
  );
  addChoice(form, "Did the participant reach the official tracker?", ["Yes", "No"]);
  addChoice(form, "Did the participant understand what the official tracker requires?", ["Yes", "Partly", "No"]);
  addChoice(form, "Did the participant find an appropriate escalation channel?", ["Yes", "No"]);
  addChoice(form, "Did the participant find and understand the action card?", ["Yes", "Found it but did not understand it", "Did not find it"]);
  addChoice(form, "How many facilitator prompts were required?", ["0", "1", "2", "3 or more"]);
  form.addParagraphTextItem().setTitle("What was the participant’s most serious hesitation or misunderstanding?");

  addHeader(form, "Post-test feedback", "Record the participant’s answers in their own words.");
  form.addParagraphTextItem().setTitle("What was clear or useful in the prototype?").setRequired(true);
  form.addParagraphTextItem().setTitle("What was missing or confusing?").setRequired(true);
  form.addParagraphTextItem().setTitle("What, if anything, would stop you from trusting or using the prototype?");
  addChoice(form, "Would you save, print or share the action card?", ["Yes", "Maybe", "No"]);
  form.addParagraphTextItem().setTitle("If we could make only one improvement, what should it be?").setRequired(true);
  addChoice(form, "May one anonymous quotation from this conversation be used in research or a presentation?", ["Yes", "No"]);

  console.log("EDIT_URL=" + form.getEditUrl());
  console.log("RESPONDER_URL=" + form.getPublishedUrl());
}

function addHeader(form, title, helpText) {
  form.addSectionHeaderItem().setTitle(title).setHelpText(helpText);
}

function addChoice(form, title, choices, required) {
  form
    .addMultipleChoiceItem()
    .setTitle(title)
    .setChoiceValues(choices)
    .setRequired(required === undefined ? true : required);
}

function addChecks(form, title, choices, required) {
  form
    .addCheckboxItem()
    .setTitle(title)
    .setChoiceValues(choices)
    .setRequired(required === undefined ? true : required);
}
