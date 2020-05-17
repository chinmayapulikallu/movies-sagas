const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET router to get the selected movie genres from the database
router.get('/', (req, res) => {
    console.log('------>genres', req.query);
    let id = req.query.id;
    //query to get genres of movie selected
    let query = `SELECT genres.name from movies JOIN movies_genres ON
        movies.id = movies_genres.movies_id
        JOIN genres ON genres.id = movies_genres.genres_id WHERE movies.id = $1;`;
    pool.query(query, [id])
   .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})





module.exports = router;