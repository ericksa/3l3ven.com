# Google Calendar Integration

Health appointments are synced with Google Calendar for reminders and easy access.

## Current Calendar Setup

- **Primary Calendar:** `erickson.adam.m@gmail.com`
- **Tag for automatic filtering:** Medical/health-related events
- **Authentication Method:** OAuth via `gog` CLI (Personal profile)

## Commands

### List Upcoming Health Events
```bash
gog --client personal calendar events list "--maxResults=50"
```

### View Today's Events
```bash
gog --client personal calendar events search 'datetime:today'
```

### Create Appointment
```bash
gog --client personal calendar events create \
  --summary "Primary Care: Dr. Smith" \
  --start "2026-12-15T10:00:00" \
  --end "2026-12-15T11:00:00" \
  --location "Whitehall Family Practice" \
  --description "Annual checkup"
```

## Automatic Tagging

When you add appointments via `health-tracker`:
- Type: `Primary Care` → Color: Blue
- Type: `Specialist` → Color: Green
- Type: `Therapy` → Color: Purple
- Type: `Emergency` → Color: Red

## Integration Features

- **Reminders:** Set 24 hours before appointments
- **Notifications:** Desktop notifications on schedule
- **Location Links:** Addresses automatically open in Maps
- **Description:** Includes medical notes and preparation instructions

## Troubleshooting

### Not Seeing Events?
1. Check `gog` authentication: `gog auth status`
2. Verify calendar permissions: `gog auth list`

### Sync Failing?
1. Run `health-tracker sync-calendar` manually
2. Check network connectivity
3. Verify Google Calendar API is enabled

## Privacy Notes

- Calendar events are stored in your personal Google account
- Use a dedicated "Health" calendar if preferred:
  ```bash
  gog --client personal calendar calendars list
  ```
  Then create events in a specific calendar ID

---

**Last Updated:** 2026-11-20
**Sync Frequency:** Manual / On-demand