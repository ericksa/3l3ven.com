export async function onRequestPost({ request, env }) {
  try {
    const { name, email, date, time, service, notes } = await request.json();

    if (!name || !email || !date || !time || !service) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Format start and end times (assuming 1-hour slots by default)
    const startDateTime = `${date}T${time}:00`;
    // Simple 1-hour increment for end time
    const [hour, minute] = time.split(':').map(Number);
    const endHour = String((hour + 1) % 24).padStart(2, '0');
    const endDateTime = `${date}T${endHour}:${String(minute).padStart(2, '0')}:00`;

    const calendarId = env.GOOGLE_CALENDAR_ID || 'primary';
    
    const eventBody = {
      summary: `3l3ven.com Booking: ${service} - ${name}`,
      description: `Client: ${name}\nEmail: ${email}\nService: ${service}\nNotes: ${notes || 'None'}`,
      start: { dateTime: startDateTime, timeZone: env.TIMEZONE || 'America/Detroit' },
      end: { dateTime: endDateTime, timeZone: env.TIMEZONE || 'America/Detroit' },
      attendees: [{ email }],
    };

    return new Response(JSON.stringify({ success: true, message: 'Booking request processed successfully!', event: eventBody }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}