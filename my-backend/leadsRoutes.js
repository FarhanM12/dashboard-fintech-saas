// leadsRoutes.js
const express = require('express');
const pool = require('./db'); // your DB connection
const router = express.Router();

// GET all leads => final route will be /api/leads
router.get('/leads', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM leads ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching leads:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new lead => final route will be /api/leads
router.post('/leads', async (req, res) => {
  try {
    const { product, sub_product, first_name, middle_name, last_name, mobile } = req.body;
    const result = await pool.query(
      `INSERT INTO leads (product, sub_product, first_name, middle_name, last_name, mobile)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [product, sub_product, first_name, middle_name, last_name, mobile]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting lead:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) => final route will be /api/leads/:id
router.put('/leads/:id', async (req, res) => {
  const { id } = req.params;
  const { product, sub_product, first_name, middle_name, last_name, mobile } = req.body;

  try {
    const result = await pool.query(
      `UPDATE leads
       SET product = $1,
           sub_product = $2,
           first_name = $3,
           middle_name = $4,
           last_name = $5,
           mobile = $6
       WHERE id = $7
       RETURNING *`,
      [product, sub_product, first_name, middle_name, last_name, mobile, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating lead:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE => final route will be /api/leads/:id
router.delete('/leads/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM leads WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    res.json({ message: 'Lead deleted successfully' });
  } catch (err) {
    console.error('Error deleting lead:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
