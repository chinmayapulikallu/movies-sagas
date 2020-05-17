const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//put router to update the database when there is a change
router.put('/', (req,res) => {
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let queryText = `UPDATE movies SET title=$1, description=$2 WHERE id = $3;`;
    pool.query(queryText, [title,description,id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        res.sendStatus(500);
    })
})







module.exports = router;