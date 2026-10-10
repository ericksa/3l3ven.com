export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('hub.mode');
  const token = ***'hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === env.VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return new Response('Forbidden', { status: 403 });
}

export async function onRequestPost({ request, env, waitUntil }) {
  try {
    const payload = await request.json();

    // Optional: Log/forward payload to Mission Control container or database
    if (env.MISSION_CONTROL_WEBHOOK_URL) {
      waitUntil(
        fetch(env.MISSION_CONTROL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(err => console.error('Failed to forward payload:', err))
      );
    }

    return new Response('EVENT_RECEIVED', { status: 200 });
  } catch (err) {
    return new Response('Bad Request', { status: 400 });
  }
}
