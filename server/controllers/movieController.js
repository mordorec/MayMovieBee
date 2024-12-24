const uuid = require('uuid')
const path = require('path')
const {Movie, Country, Genre, Director, Actor} = require('../models/models')
const ApiError = require('../error/ApiError');
console.log("MovieController is initialized");
const fetchRatingFromAPI = require('./fetchRatingFromAPI');

class MovieController {
    async create(req, res, next) {
        try {
        let {name, rating, country_id, director_id, year, description, genre_id, tagline} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '../static', filename))
        const movie = await Movie.create({name, rating, country_id, director_id, year, description, genre_id, tagline, img: filename})
        return res.json(movie)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        const movies = await Movie.findAndCountAll(
            {limit, 
            offset,
            include: {
                model: Country,
                attributes: ['name'],
            },
            }
        )
        return res.json(movies)
    }
    

    async getOne(req, res) {
        const { id } = req.params;
        try {
            const movie = await Movie.findByPk(id, {
                include: [
                    { model: Country, attributes: ['name'] },
                    { model: Genre, attributes: ['name'] },
                    { model: Director, attributes: ['id', 'name'] },
                    {
                        model: Actor,
                        as: 'actors',
                        attributes: ['id', 'name'],
                        through: { attributes: [] }
                    }
                ],
            });

            if (!movie) {
                throw ApiError.badRequest('Movie not found');
            }
            console.log("Fetching rating for:", movie.name);
            const newRating = await fetchRatingFromAPI(movie.name);
            console.log(`Fetched rating for "${movie.name}":`, newRating);

            if (newRating && newRating !== movie.rating) {
                movie.rating = newRating;
                await movie.save();
                console.log(`Updated rating for "${movie.name}" to ${newRating}`);
            }

            return res.json(movie);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: e.message });
        }
    }

    async updateMovieRatings() {
        const movies = await Movie.findAll();
        for (const movie of movies) {
            const newRating = await fetchRatingFromAPI(movie.name);
            console.log(`Fetched rating for "${movie.name}":`, newRating);

            if (newRating && newRating !== movie.rating) {
                movie.rating = newRating;
                await movie.save();
                console.log(`Рейтинг обновлен для фильма: ${movie.name}`);
            }
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const movie = await Movie.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(movie)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new MovieController()
