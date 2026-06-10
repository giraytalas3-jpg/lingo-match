import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Mock matching logic
app.post('/match', (req: Request, res: Response) => {
  const { language, hobby } = req.body;
  
  console.log(`Received match request for: ${language} - ${hobby}`);

  // Simulate finding a match
  const mockMatch = {
    id: 'user_123',
    name: 'Alex',
    language: language,
    hobby: hobby,
    bio: 'Looking for a language partner who loves same activities!',
  };

  res.status(200).json({
    success: true,
    match: mockMatch,
    aiGreeting: `Hi! I found Alex for you. You both love ${hobby}! Would you like to start a coached conversation?`
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Lingo Match Backend is running.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
