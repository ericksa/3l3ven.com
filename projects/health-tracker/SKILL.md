# Health Tracker System

Comprehensive personal health tracking for Adam M. Erickson.

## Components

### 1. Health Issues Log (`~/Documents/Health/issues/`)
- `conditions.md` - List of diagnosed health issues
- `readings_over_time.md` - Chronological log of all health metrics
- `README.md` - How to add new conditions

### 2. Appointments Calendar (`~/Documents/Health/appointments/`)
- `upcoming.md` - Scheduled and future appointments
- `completed.md` - Past appointments history
- All entries tagged with type (Primary Care, Therapy, Specialist, Emergency)

### 3. Medications Registry (`~/Documents/Health/medications/`)
- `00_index.md` - Active medications table
- `templates.md` - Medication entry template

### 4. Insurance Information (`~/Documents/Health/insurance/`)
- `00_index.md` - Provider details and coverage
- `insurance.json` - Structured insurance data

### 5. Emergency Contacts (`~/Documents/Health/contacts/`)
- `epinephrine_contacts.md` - Emergency contacts with priorities
- `providers.md` - Medical provider directory

### 6. Calendar Integration (`health_calendar.py`)
Python script for syncing appointments with Google Calendar (personal account).

## Quick Commands

```
health-tracker --init
health-tracker add-appointment --type "Primary Care" --date "2026-12-01" --time "10:00" --location "Whitehall Family Practice" --notes "Annual checkup"
health-tracker add-metric --condition "Hypertension" --reading "Blood Pressure" --value "120/80" --unit "mmHg" --date "2026-11-20"
health-tracker add-medication --name "Metformin" --dosage "500mg" --frequency "BID" --start-date "2024-01-15" --refill-reminder "2026-12-01"
health-tracker list-appointments
health-tracker list-medications
health-tracker sync-calendar
```

## Data Store Location
`~/Documents/Health/` - All health data stored in structured JSON and markdown files, respecting privacy and backup preferences.

## Security
Health data is stored locally with read/write permissions restricted to the owner. No data is transmitted or shared without explicit user authorization.