---
# Reply Templates — Email Class Reference
echo
# Templates indexed by PA's Email Triage Protocol class.
# PA reads these before drafting a reply and adapts tone + content to the specific sender.
#
# Usage: Read the template matching the email class. Fill in {variables} from email headers/subject.
# After drafting, show Adam the draft (via message or imessage) for approval before sending.
---

## job-lead
- **Tone**: Professional, interested, prompt.
- **When to use**: Real open requisition from a hiring company or USAJOBS employer.
- **Key variables**: {company}, {role}, {sender}, {original_subject}
- **Template**:
  "Dear {sender or Hiring Manager},

  Thank you for reaching out about the {role} position at {company}. I'm very interested and would like to learn more. Could you please share the job description and details about the team and timeline?

  I'm available for a brief call this week if helpful. I look forward to your reply.

  Best regards,
  Adam Erickson
  erickson.adam.m@gmail.com"

## recruiter
- **Tone**: Polite, appreciative, declining with openness.
- **When to use**: Third-party staffing firm reaching out. Only send if Adam has prior conversation history with this specific recruiter.
- **Key variables**: {sender}, {agency}, {target_roles}, {clearance}
- **Template**:
  "Hi {sender},

  Thanks for reaching out. I'm currently focused on {target_roles} and not actively looking, but I'd be happy to connect if a role matching my {clearance} and {stack} comes along.

  Feel free to reach me here or at erickson.adam.m@gmail.com if something looks like a fit. Best, Adam"

## unemployment
- **Tone**: Brief, confirmatory, professional.
- **When to use**: Michigan UI / UIA, Michigan Works, state workforce agency correspondence.
- **Key variables**: {agency}, {deadline}, {request_type}
- **Template**:
  "Hello {sender},

  Thank you for your email regarding {request_type}. I've noted this and will follow up by the deadline of {deadline}.

  Please let me know if you need any additional information from me in the meantime.

  Best regards,
  Adam Erickson"

## personal
- **Tone**: Efficient, warm, slightly maternal (PA voice).
- **When to use**: Known individuals, family, friends, known personal-services senders.
- **Template**:
  "Hi {sender},

  {1-2 sentences acknowledging the message and next step if any}.

  Best,
  Adam"

## subscription
- **Tone**: Brief acknowledgment.
- **When to use**: Newsletters, product updates, receipts, automated noreply mail.
- **Template**: (no reply typically needed — mark read/skip. Use only if Adam explicitly requests a reply.)

## spam
- **Tone**: None — do not reply.
- **When to use**: Unsolicited bulk, phishing, unknown sender with no legitimate relationship.
- **Template**: (no reply)

---
# Notes for PA
# - Always adapt tone to the relationship with the sender (warm for known contacts, formal for unknown).
# - Include Adam's phone number only if explicitly requested.
# - Sign off as "Adam" — never "Adam M. Erickson" unless the email demands formality.
# - Before sending any reply, show Adam the full draft via message/imessage and pause for APPROVE.
