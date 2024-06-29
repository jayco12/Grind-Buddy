import { GoogleGenerativeAI } from '@google/generative-ai';
import { connectToDb } from '../../src/lib/utils';
import { User } from '../../src/lib/models';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }
  try {
    // Check for initial greetings and respond with a default message
    if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hey")) {
      return res.status(200).json({ generatedText: "Hi there! How can I help you today?" });
    }
    await connectToDb();

    // Search for users matching the query
    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
        { school: { $regex: query, $options: 'i' } },
      ],
    });

    // If no users found, return a message
    if (users.length === 0) {
      return res.status(200).json({ generatedText: `No users found matching the query: ${query}` });
    }

    // Prepare user data to be sent to the AI
    const userDetails = users.map(user => ({
      name: user.name,
      email: user.email,
      school: user.school,
    }));

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    // Prompt to the AI to generate a response based on user data
    const msg = `Based on the query: ${query}, the found user details are: ${JSON.stringify(userDetails)}`;
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const generatedText = await response.text();

    res.status(200).json({ generatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

};