const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();
const mongoose = require("mongoose");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            // console.log("ALL MOVIES", movies)
            res.render('movies.hbs', { movies }
            )
        })
        .catch((err) => console.log(err))
})

router.get("/movies/:id", (req, res, next) => {
    console.log(req.params);
    const isValidId = mongoose.isValidObjectId(req.params.id);
    const id = req.params.id;
    if (isValidId) {
        Movie.findById(id)
            .then((movie) => {
                console.log(movie);
                res.render("movie.hbs", { movie });
            })
            .catch((e) => console.error(e));
    } else {
        next();
    }
});


module.exports = router;
