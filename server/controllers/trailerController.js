const uuid = require('uuid')
const path = require('path')
const {Trailer, Movie} = require('../models/models')
const ApiError = require('../error/ApiError');

class TrailerController {
    async create(req, res, next) {
        try {
        let {title, url, movie_id} = req.body
        const trailer = await Trailer.create({title, url, movie_id})
        return res.json(trailer)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 6
        let offset = page * limit - limit
        const trailers = await Trailer.findAndCountAll({limit, offset})
        return res.json(trailers)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const trailer = await Trailer.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(trailer)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
}

module.exports = new TrailerController()
