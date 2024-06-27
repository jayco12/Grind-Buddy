import { User } from '../../src/lib/models';
import { connectToDb } from '../../src/lib/utils';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  await connectToDb();

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    // Search for users where the name or email contains the query string
    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
        { school: { $regex: query, $options: 'i' } }
      ]
    });

    res.status(200).json({ results: users });
  } catch (error) {
    console.error(error); // Debug statement
    res.status(500).json({ error: 'Internal server error' });
  }
}
