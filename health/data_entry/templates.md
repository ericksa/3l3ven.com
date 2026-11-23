# Health Data Entry Templates

Use these templates when adding new health information.

## Appointment Template

```markdown
## [Provider Name] - [Appointment Type]
- **Date:** YYYY-MM-DD
- **Time:** HH:MM AM/PM
- **Provider:** [Provider Name], [Specialty]
- **Location:** [Address/City]
- **Type:** [Primary Care / Specialist / Therapy / Emergency / Follow-up]
- **Reason:** [Visit purpose]
- **Duration:** [Typically 15-30 min]
- **Preparation:** [Fasting, medications to bring, etc.]

### Notes
[Post-appointment notes]

### Prescriptions
- [Medication] - Refills: [#]
- [Medication] - Refills: [#]

### Follow-up Actions
- [ ] Schedule follow-up
- [ ] Get lab work
- [ ] Fill prescription
```

## Health Reading Template

```markdown
## [Metric Type] - [Date]
- **Time:** HH:MM AM/PM
- **Value:** [Numeric value + unit]
- **Context:** [Fasting, symptoms, stress level, etc.]
- **Notes:** [Relevant observations]

**Target Range:** [Reference values if applicable]
```

## Medication Template

```markdown
## [Medication Name]
- **Dosage:** [mg/ml/units/etc.]
- **Frequency:** [BID/TID/QHS/as needed/etc.]
- **Start Date:** YYYY-MM-DD
- **Prescribing Physician:** [Name]
- **Pharmacy:** [Name, Phone]
- **Refill Date:** YYYY-MM-DD
- **Days Supply:** [Number]
- **Notes:** [Side effects, interactions, reminders]
```

## Insurance Template

```markdown
## [Insurance Type] - [Provider Name]
- **Policy Number:** [Number]
- **Group Number:** [Number]
- **Effective Date:** YYYY-MM-DD
- **Expiration Date:** YYYY-MM-DD
- **Member ID:** [If different from policy]
- **Deductible:** [$XXX]
- **Coinsurance:** [XX%]
- **Out-of-Pocket Max:** [$XXXX]
- **Coverage Notes:** [Special provisions, network requirements]
```

## Health Condition Template

```markdown
## [Condition Name]

**Diagnosed:** YYYY-MM-DD
**Diagnosing Physician:** [Name]
**ICD-10 Code:** [Code if known]
**Status:** [Active/In Remission/Resolved]
**Severity:** [Mild/Moderate/Severe]

### Symptoms
- [List symptoms]

### Treatment Plan
- [Medications]
- [Therapies]
- [Lifestyle changes]

### Monitoring Schedule
- [Frequency of check-ins]

### Recent Readings
| Date | Value | Notes |
|------|-------|-------|
| YYYY-MM-DD | [Value] | [Notes] |
```