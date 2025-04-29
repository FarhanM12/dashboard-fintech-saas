// db.js
require('dotenv').config(); // Ensure you load environment variables
const { Pool } = require('pg');

// Create a new Pool using the connection string from your .env file
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Optional: test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL as:', client.user);
  release();
});

module.exports = pool;

