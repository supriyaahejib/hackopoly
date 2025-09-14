// server.js
import express from 'express';
import 'dotenv/config'; // Loads .env automatically
import fetch from 'node-fetch'; // If using Node 18+, can use global fetch

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// -----------------
// Test Route
// -----------------
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// -----------------
// Claude Proxy Route
// -----------------
app.post('/api/claude', async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    // Example prompt customization
    const prompt = `
      Generate a ${difficulty || 'medium'} difficulty quiz question about "${topic}".
      Return JSON in this format: { "question": "...", "answer": "..." }
    `;

    // Replace the URL with the Claude API endpoint you have access to
    const response = await fetch('https://api.anthropic.com/v1/complete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY
      },
      body: JSON.stringify({
        model: 'claude-v1',
        prompt,
        max_tokens_to_sample: 300,
        stop_sequences: ["\n\n"]
      })
    });

    const data = await response.json();

    // Assume Claude returns a string; parse it safely
    let parsed;
    try {
      parsed = JSON.parse(data.completion);
    } catch (err) {
      console.error('Error parsing Claude response:', err);
      parsed = { question: 'Error generating question', answer: '' };
    }

    res.json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong with Claude API' });
  }
});

// -----------------
// Start Server
// -----------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
