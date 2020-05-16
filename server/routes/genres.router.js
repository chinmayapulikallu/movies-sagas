const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// //to get all the genres from database
// router.get('/', (req, res) => {
//     let query = `SELECT * FROM "genres"`;
//     pool.query(query).then(result => {
//         res.send(result.rows);
//     }).catch(error => {
//         console.log(err);
//         res.sendStatus(500);
//     })
// })


// GET router to get the selected movie genres from the database
router.get('/', (req, res) => {
    console.log('------>genres', req.query);
    let id = req.query.id;
    let query = `SELECT genres.name from movies JOIN movies_genres ON
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