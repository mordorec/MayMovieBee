const uuid = require('uuid')
const path = require('path')
const {Festival} = require('../models/models')
const ApiError = require('../error/ApiError');

class FestivalController {
    async create(req, res, next) {
        try {
        let {name, short_description, long_description, date} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '../static', filename))
        const festival = await Festival.create({name, short_description, long_description, date, img: filename})
        return res.json(festival)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 6
        let offset = page * limit - limit
        const festival = await Festival.findAndCountAll({limit, offset})
        return res.json(festival)
    }

    async getOne(req, res) {
        const {id} = req.params
        const festival = await Festival.findOne(
            {
        where: {id},
            },
        )
        return res.json(festival)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const festival = await Festival.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(festival)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
}

module.exports = new FestivalController()
