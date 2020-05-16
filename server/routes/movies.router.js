const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET router to get the movies from the database
router.get('/', (req,res) => {
    let query = `SELECT * FROM "movies" ORDER BY "title"`;
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;