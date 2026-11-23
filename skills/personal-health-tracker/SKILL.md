# Personal Health Tracker

A comprehensive health tracking system for managing health records, appointments, medications, and insurance information with calendar integration.

## Capabilities

- **Health Issue Tracking**: Track health conditions with longitudinal readings (vitals, metrics, symptoms)
- **Appointment Management**: Doctor, therapy, mental health, and emergency appointment scheduling with calendar sync
- **Medication Management**: Track prescriptions, dosages, schedules, and refill dates
- **Insurance Records**: Store and manage health insurance information with policy details
- **Emergency Contacts**: Maintain emergency contact information with relationship types
- **Calendar Integration**: Sync with Google Calendar for appointment reminders
- **Data Entry Interface**: Simple text-based input system with templates

## Usage

```
health-tracker --init
health-tracker add-appointment --type "Primary Care" --date "2026-12-01" --time "10:00" --location "Whitehall Family Practice" --notes "Annual checkup"
health-tracker add-metric --condition "Hypertension" --reading "Blood Pressure" --value "120/80" --unit "mmHg" --date "2026-11-20"
health-tracker add-medication --name "Metformin" --dosage "500mg" --frequency "BID" --start-date "2024-01-15" --refill-reminder "2026-12-01"
health-tracker add-insurance --provider "Blue Cross" --policy-number "BCBS123" --effective-date "2026-01-01"
health-tracker add-contact --name "Hailee Scofield" --phone "231-766-2692" --relationship "Spouse" --priority 1
health-tracker list-appointments
health-tracker list-medications
health-tracker list-metrics --condition "Hypertension"
health-tracker sync-calendar
```

## Data Store Location
`~/Documents/Health/` - All health data stored in structured JSON and markdown files, respecting privacy and backup preferences.

## Security
Health data is stored locally with read/write permissions restricted to the owner. No data is transmitted or shared without explicit user authorization.