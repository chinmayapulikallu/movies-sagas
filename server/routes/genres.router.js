const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET router to get the movies from the database
router.get('/', (req, res) => {
    console.log('------>query', req.query);
    let id = req.query.id;
    let query = `SELECT name from movies JOIN movies_genres ON
                 movies.id = movies_genres.movies_id
                 JOIN genres ON genres.id = movies_genres.genres_id WHERE movies.id = $1;`;
    pool.query(query, [id])
   .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(err);
        res.sendStatus(500);
    })
})





module.exports = router;