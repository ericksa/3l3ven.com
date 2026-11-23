# Health Data Entry Guide

## How to Update Your Health Tracker

Welcome to the Personal Health Tracker. This guide explains how to maintain your health information securely and accurately.

### 📋 Quick Reference - Commands

```bash
# View upcoming appointments
health-tracker list-appointments

# Add a doctor appointment
health-tracker add-appointment --type "Primary Care" --date "2026-12-15" --time "10:00" --location "Whitehall Family Practice" --notes "Annual checkup"

# Add a therapy session
health-tracker add-appointment --type "Therapy" --date "2026-12-01" --time "14:00" --location "Dr. Smith Counseling Center" --notes "Weekly session"

# Record a blood pressure reading
health-tracker add-metric --condition "Hypertension" --reading "Blood Pressure" --value "120/80" --unit "mmHg" --date "2026-11-20"

# Record a weight
health-tracker add-metric --condition "General Wellness" --reading "Weight" --value "185" --unit "lbs" --date "2026-11-20"

# Add a medication
health-tracker add-medication --name "Metformin" --dosage "500mg" --frequency "BID" --start-date "2024-01-15" --refill-reminder "2026-12-10"

# List current medications
health-tracker list-medications

# Sync appointments to Google Calendar
health-tracker sync-calendar
```

### 📝 Manual Data Entry Methods

#### 1. Using Markdown Files
Navigate to `~/Documents/Health/` and edit the appropriate file:
- `appointments/upcoming.md` - Add upcoming appointments
- `issues/readings_over_time.md` - Add health readings
- `medications/00_index.md` - Update medication list
- `insurance.json` - Update insurance details

#### 2. Using JSON Data Files
The following JSON files store structured health data:
- `~/Documents/Health/health_data.json` - Main data store
- `~/Documents/Health/insurance.json` - Insurance information
- `~/Documents/Health/medications.json` - Medication tracking

### 💽 Data Storage

All health data is stored locally in:
```
~/Documents/Health/
├── appointments/              # Appointment logs
├── issues/                    # Health conditions
├── medications/               # Medication records
├── insurance/                 # Insurance details
├── contacts/                  # Emergency contacts
├── readings/                  # Health metrics archive
└── templates/                 # Entry templates
```

### 🔐 Privacy & Security

- Data is stored locally only - no cloud sync
- Files are readable/writable only by the owner
- No Personal Health Information (PHI) is transmitted or shared
- Consider encrypting sensitive files with GPG if desired

### 🔄 Calendar Integration

Appointments are synced to Google Calendar using the `gog` CLI:

```bash
# List calendar events
gog --client personal calendar events list

# Show today's events
gog --client personal calendar events search 'datetime:today'

# Events are tagged automatically when added via health-tracker
```

### 📱 Mobile Access

For mobile access:
1. Google Calendar app - view synced appointments
2. Files app - view markdown files (iOS) or use a markdown note-taker
3. Consider using a notes app with markdown support for on-the-go editing

### ⚠️ Emergency Access

Your emergency contacts have been provided with:
- List of current medications
- Insurance information
- Primary care provider contact
- Emergency medical protocols

### 🆘 Data Recovery

To restore from backup:
1. Health data is included in macOS Time Machine backups
2. Git version control (if enabled) - run `health-tracker --init` to restore structure

### ❓ Support

This system was created by OpenClaw for personal health management. For modifications or improvements, contact your OpenClaw administrator.

---

**Last Updated:** 2026-11-20
**Version:** 1.0