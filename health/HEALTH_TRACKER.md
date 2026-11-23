# Health Tracker — Adam M. Erickson

**Purpose:** Central repository for all personal health management.

## Structure
- `appointments/` – Google Calendar synced events for doctor, therapy, mental health, and emergency visits
- `medications/` – Daily and recurring med logs
- `issues/` – Health issues with readings over time
- `insurance/` – Policy details and cards
- `emergency_contacts.md` – Primary and secondary emergency contacts
- `data_entry/` – Templates for tracking new items

## Quick Links
- [Medications Calendar](medications/MEDICATIONS.md)
- [Doctor Appointments](appointments/README.md)
- [Health Issues](issues/README.md)
- [Insurance](insurance/INSURANCE.md)
- [Emergency Contacts](emergency_contacts.md)

## Sync
Appointments are synced to Google Calendar via `gog calendar events` and can be queried with `gog --client personal calendar events`.

## Usage
- Use `health_add_appointment` command to create new events
- Use `health_log_med` to log medication intake
- Use `health_record_reading` to track vitals/measurements
- Update this README when major changes occur