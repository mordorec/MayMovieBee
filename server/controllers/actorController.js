const uuid = require('uuid')
const path = require('path')
const {Actor, Country} = require('../models/models')
const ApiError = require('../error/ApiError');

class ActorController {
    async create(req, res, next) {
        try {
        let {name, height, country_id, town, birth} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,  '../static', filename))
        const actor = await Actor.create({name, height, country_id, town, birth, img: filename})
        return res.json(actor)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 21
        let offset = page * limit - limit
        const actors = await Actor.findAndCountAll({limit, offset})
        return res.json(actors)
    }

    async getOne(req, res) {
        const {id} = req.params
        const actor = await Actor.findOne(
            {
        where: {id},
        include: {
            model: Country,
            attributes: ['name'],
        },
            },
        )
        return res.json(actor)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const actor = await Actor.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(actor)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new ActorController()
