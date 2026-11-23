# Adam M. Erickson - Personal Health Tracker

## 🔐 Confidentiality Notice
This health tracker contains sensitive personal medical information. Store securely and limit access.

## 📅 Dashboard
- **Next Appointments:** See `appointments/upcoming.md`
- **Current Medications:** See `medications/00_index.md`, `medications.json`
- **Health Issues:** See `issues/conditions.md`
- **Insurance:** See `insurance.json`, `insurance/00_index.md`
- **Emergency Contacts:** See `contacts/epinephrine_contacts.md`

## 📊 Quick Stats
| Metric | Value | Last Updated |
|--------|-------|--------------|
| Blood Pressure | TBD | - |
| Weight | TBD | - |
| A1C | TBD | - |
| Medications | 0 active | - |
| Appointments (Next 30d) | 3 | See schedule |

## 🚨 Emergency Protocol
1. Call 911 for life-threatening emergencies
2. Contact: **Kimberly Erickson** (spouse) - 231-766-2692
3. Contact: **Adam Erickson** (primary) - 231-343-7221
4. Contact: **Mother** - 231-766-2692
5. Contact: **Father** - 231-780-0860
6. Hospital: Munson Hospital - 231-745-5000

## 📁 Directory Structure
```
health/
├── health_index.md              # Main dashboard
├── health_status.md             # Status summary
├── health_calendar.py           # Calendar sync script
├── calendar_integration.md      # Google Calendar instructions
├── insurance.json               # Insurance data
├── medications.json             # Medication records
├── emergency_contacts.json      # Emergency contacts
├── data_entry_guide.md          # How to update this tracker
├── data_entry/                  # Entry templates
│   └── templates.md
├── appointments/                # Medical appointment tracking
│   ├── upcoming.md
│   ├── completed.md
│   └── 00_index.md
├── conditions/                  # Health conditions
│   ├── conditions.md
│   └── readings_over_time.md
├── medications/                 # Medication tracking
│   ├── 00_index.md
│   └── templates.md
├── insurance/                   # Insurance information
│   └── 00_index.md
├── contacts/                      # Emergency contacts
│   ├── epinephrine_contacts.md
│   └── providers.md
├── readings/                     # Health readings archive
│   └── README.md
└── issues/                       # Health issues log
    ├── README.md
    ├── conditions.md
    └── readings_over_time.md
```

## ⏰ Next Scheduled Tasks
- **Weekly**: Weigh-in every Sunday morning
- **Monthly**: Update blood pressure log
- **Quarterly**: Review medications with pharmacist
- **Annually**: Insurance renewal check

## 📞 Key Providers
| Type | Name | Phone | Notes |
|------|------|-------|-------|
| Primary Care | Dr. TBD (Whitehall Family Practice) | TBD | Pending |
| Dentist | Dr. TBD | TBD | Pending |
| Mental Health | TBD | TBD | Pending |

## 🛠️ Usage Commands
```bash
# View upcoming appointments
health-tracker list-appointments

# Add a doctor appointment
health-tracker add-appointment --type "Primary Care" --date "2026-12-15" --time "10:00" --location "Whitehall Family Practice" --notes "Annual checkup"

# Record health metrics
health-tracker add-metric --condition "Hypertension" --reading "Blood Pressure" --value "120/80" --unit "mmHg" --date "2026-11-20"

# Track medications
health-tracker add-medication --name "Metformin" --dosage "500mg" --frequency "BID" --start-date "2024-01-15" --refill-reminder "2026-12-10"

# Sync to Google Calendar
health-tracker sync-calendar
```

---
**Last Updated:** 2026-11-20
**Data Location:** `~/Documents/Health/`
**Calendar:** `erickson.adam.m@gmail.com` (Personal)