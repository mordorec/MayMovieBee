const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError');

class GenreController {
    async create(req, res) {
        const {name} = req.body
        const genre = await Genre.create({name})
        return res.json(genre)
    }

    async getAll(req, res) {
        const genres = await Genre.findAll()
        return res.json(genres)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const genre = await Genre.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(genre)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new GenreController()