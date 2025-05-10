const { Movie, List, MovieList, Country } = require('../models/models');
const ApiError = require('../error/ApiError');

class MovieListController {
    async addMovieToList(req, res, next) {
        try {
            let { movie_id, list_id } = req.body;
            const movie = await Movie.findByPk(movie_id);
            const list = await List.findByPk(list_id);

            if (!movie || !list) {
                return next(ApiError.badRequest('Movie or List not found'));
            }

            await MovieList.create({ movie_id, list_id });

            return res.json({ message: 'Movie added to list successfully' });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const { list_id } = req.query;
            if (!list_id) {
                return next(ApiError.badRequest('list_id is required'));
            }

            const list = await List.findByPk(list_id, {
                include: [{
                    model: Movie,
                    as: 'movies',
                    attributes: ['id', 'name', 'year', 'img'],
                    include: [{ model: Country, as: 'country', attributes: ['name'] }],
                    through: { attributes: [] },
                }]
            });

            if (!list) {
                return next(ApiError.badRequest('List not found'));
            }

            return res.json(list.movies);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new MovieListController();