const express = require('express');
const app = express();
app.use(express.json());

// Verification endpoint (GET) - used by Meta/Discord/etc.
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "your_custom_verify_token_here";
  
  // Parse query params (example for Meta/Facebook style)
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Event notification receiver (POST)
app.post('/webhook', (req, res) => {
  const body = req.body;
  console.log("Received webhook payload:", JSON.stringify(body, null, 2));
  
  // Acknowledge receipt immediately with a 200 OK
  res.status(200).send('EVENT_RECEIVED');
});

app.listen(3000, () => console.log('Webhook server running on port 3000'));