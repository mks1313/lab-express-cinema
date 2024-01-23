const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies/movies', { movies });
        })
        .catch((error) => {
            next(error);
        });
});

router.get('/movies/:_id', (req, res, next) => {
    const movieId = req.params._id;

    Movie.findById(movieId)
        .then((movie) => {
            res.render('movies/movies-details', { movie });
        })
        .catch((error) => {
            next(error);
        });
});


module.exports = router;
