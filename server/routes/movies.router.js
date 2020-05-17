const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET router to get the movies from the database
router.get('/', (req,res) => {
    // let query = `SELECT * FROM "movies" ORDER BY "title"`;

    let query = `SELECT movies.*, array_agg(genres.name) as genres_names
                 FROM movies JOIN movies_genres ON
                 movies_genres.movies_id = movies.id
                 JOIN genres ON movies_genres.genres_id = genres.id GROUP BY movies.id
                 ORDER BY movies.title;`;
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;