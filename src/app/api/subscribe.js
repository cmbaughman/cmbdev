export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body;

    try {
      const response = fetch('https://lokhd0x6o9.execute-api.us-east-1.amazonaws.com/default/cmbNinjaSubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Success' });
      }
      else {
        const errorData = (await response).json();
        return res.status(response.status).json({ message: errorData.message || 'Error subscribing to external API.' });
      }
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error subscribing via external API.' });
    }
  }
  else {
    return res.status(405).end(); // Method not allowed
  }
}
