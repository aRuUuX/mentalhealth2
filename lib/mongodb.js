// lib/mongodb.js
import { MongoClient } from 'mongodb';

let client;
let db;

const connectToDatabase = async () => {
  if (client && client.isConnected()) {
    console.log('Using existing database connection');
    return db;
  }

  client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Could not connect to MongoDB');
  }

  db = client.db();
  return db;
};

export default connectToDatabase;
