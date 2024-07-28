import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { new_request, current_requests } = req.body;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await axios.post(`${API_BASE_URL}/find-match`, {
      new_request,
      current_requests
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
