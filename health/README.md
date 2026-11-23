# Personal Health Tracker

A comprehensive system for managing Adam M. Erickson's personal health information including:
- Health conditions and readings over time
- Appointment scheduling (doctor, therapy, mental health, emergency)
- Medication tracking
- Insurance information
- Emergency contacts
- Calendar integration

## Quick Access

- **Current Health Status**: `health_status.md`
- **Medications**: `medications.json`
- **Insurance**: `insurance.json`
- **Emergency Contacts**: `emergency_contacts.json`
- **Appointments**: `appointments/` (individual JSON files)
- **Health Readings**: `readings/` (chronologically organized)

## Usage

### Add New Health Reading
```bash
# Generate template
./health_tracker.sh new_reading blood_pressure "120/80" 2026-11-20
```

### Schedule New Appointment
```bash
# Add to calendar and generate appointment file
./health_tracker.sh new_appointment "Dr. Smith" "Annual Physical" 2026-12-01T10:00:00
```

### Calendar Sync
Appointments are automatically synced to Google Calendar via the `gog` CLI tool.