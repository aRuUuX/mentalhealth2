// pages/api/survey.js
import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('surveys');

      // Example: Insert survey data into MongoDB
      const result = await collection.insertOne(req.body);

      res.status(201).json({ message: 'Survey submitted successfully!', result });
    } catch (error) {
      console.error('Error submitting survey:', error);
      res.status(500).json({ message: 'Error submitting survey' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
