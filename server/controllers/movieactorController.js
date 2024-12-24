const { Movie, Actor, MovieActor } = require('../models/models');
const ApiError = require('../error/ApiError');

class MovieActorController {
    async addActorToMovie(req, res, next) {
        try {
            let { movie_id, actor_id } = req.body;
            const movie = await Movie.findByPk(movie_id);
            const actor = await Actor.findByPk(actor_id);

            if (!movie || !actor) {
                return next(ApiError.badRequest('Movie or Actor not found'));
            }

            await MovieActor.create({ movie_id, actor_id });

            return res.json({ message: 'Actor added to movie successfully' });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const { movie_id } = req.query;
            if (!movie_id) {
                return next(ApiError.badRequest('movie_id is required'));
            }

            const movie = await Movie.findByPk(movie_id, {
                include: [{
                    model: Actor,
                    as: 'actors',
                    attributes: ['name'],
                    through: { attributes: [] }
                }]
            });

            if (!movie) {
                return next(ApiError.badRequest('Movie not found'));
            }

            return res.json(movie.actors);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new MovieActorController();