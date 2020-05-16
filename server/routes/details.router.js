const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET router to get the movies from the database
router.get('/', (req, res) => {
    console.log('------>details', req.query);
    let id = req.query.id;
    let query = `SELECT * FROM movies WHERE movies.id = $1;`;
    pool.query(query, [id])
   .then(result => {
        res.send(result.rows[0]);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})





module.exports = router;