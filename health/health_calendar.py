#!/usr/bin/env python3
"""
Health Calendar Sync - Integrates health appointments with Google Calendar
Syncs events tagged with medical types to personal calendar for reminders
"""

import subprocess
import json
from datetime import datetime
from pathlib import Path

CAL_FILE = Path.home() / "Documents" / "Health" / "appointments" / "upcoming.md"

def get_appointments():
    """Read appointments from markdown file and parse"""
    appointments = []
    if not CAL_FILE.exists():
        return appointments
    
    with open(CAL_FILE, 'r') as f:
        content = f.read()
    
    # Simple markdown table parsing
    lines = content.split('\n')
    in_appointments = False
    
    for line in lines:
        if 'scheduled.md' in line.lower() or in_appointments:
            in_appointments = True
            if line.startswith('|') and not line.startswith('|--'):
                parts = [p.strip() for p in line.split('|')[1:-1]]
                if len(parts) >= 5:
                    appointments.append({
                        'date': parts[0],
                        'time': parts[1],
                        'type': parts[2],
                        'provider': parts[3],
                        'location': parts[4] if len(parts) > 4 else ''
                    })
    return appointments

def sync_to_calendar():
    """Sync appointments to Google Calendar via gog CLI"""
    appointments = get_appointments()
    synced = 0
    
    for appt in appointments:
        if appt.get('date') and appt.get('time'):
            # Format: YYYY-MM-DD HH:MM with calendar tag
            cmd = [
                'gog', '--client', 'personal', 'calendar', 'events', 'create',
                '--summary', f"{appt['type']}: {appt['provider']}",
                '--start', f"{appt['date']}T{appt['time']}",
                '--location', appt.get('location', ''),
                '--description', f"Health appointment - {appt.get('type', '').lower()}"
            ]
            try:
                result = subprocess.run(cmd, capture_output=True, text=True)
                if result.returncode == 0:
                    synced += 1
            except Exception as e:
                print(f"Error syncing {appt.get('provider', 'unknown')}: {e}")
    
    return synced

def list_future_appointments(days=30):
    """List appointments within the next N days"""
    result = subprocess.run([
        'gog', '--client', 'personal', 'calendar', 'events', 'list',
        '--time-min', datetime.now().isoformat(),
        '--time-max', datetime.now().isoformat(),
        '--showDeleted', 'false'
    ], capture_output=True, text=True)
    return result.stdout

if __name__ == '__main__':
    print("Syncing health appointments to Google Calendar...")
    synced = sync_to_calendar()
    print(f"Synced {synced} appointments")
    print("\nUpcoming appointments in calendar:")
    print(list_future_appointments())