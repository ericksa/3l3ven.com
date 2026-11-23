# Email Rules — PA (Personal Assistant)

Durable sender/subject → action rules for automating Adam's personal email
(erickson.adam.m@gmail.com, `--client personal`).

## How this works
1. Scan unread inbox: `gog --client personal gmail search 'is:unread' --max 50`
2. Match each email against the table below (sender pattern + subject pattern).
3. First match wins → apply the action automatically.
4. No match → ask Adam for a decision, then record a new rule here.

## Rules

| Sender pattern | Subject pattern | Action | Notes |
|----------------|-----------------|--------|-------|
| noreply@sensicomfort.com | (any) | archive | Sensi service reminders — confirmed by Adam 2026-09-06 |
| no-reply@accounts.google.com | (any) | archive | Google account/security notices — broadened from "Security alert"-only to (any) subject per Adam 2026-09-06 |
| no-reply@legal.spotify.com | (any) | archive | Spotify legal/terms updates — approved by Adam 2026-09-06 |
| hello@ollama.com | (any) | archive | Ollama usage notices — approved by Adam 2026-09-06 |
| capitalone@notification.capitalone.com | (any) | archive | Capital One account notifications — approved by Adam 2026-09-06 |
| Do Not Reply - UIA <noreply-MiDAS@mail.michigan.gov> | Authentication Code requested for ADAM ERICKSON | archive (after 1 hour) | UIA/MiDAS login codes — leave in inbox for 1 hour, then archive — added 2026-09-06 |
