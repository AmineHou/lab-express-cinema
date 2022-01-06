const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;