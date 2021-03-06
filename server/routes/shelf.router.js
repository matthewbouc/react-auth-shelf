const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require ('../modules/authentication-middleware').rejectUnauthenticated;
/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM item WHERE user_id=$1;`;
  pool.query(query, [req.user.id])
  .then(results => {
    console.log(results.rows);
    res.send(results.rows);
  }).catch(error => {
    console.log('error GETting items', error);
  });
  //res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
