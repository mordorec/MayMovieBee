const uuid = require('uuid')
const path = require('path')
const {List} = require('../models/models')
const ApiError = require('../error/ApiError');

class ListController {
    async create(req, res, next) {
        try {
        let {name} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".webp"
        img.mv(path.resolve(__dirname, '../static', filename))
        const list = await List.create({name, img: filename})
        return res.json(list)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 6
        let offset = page * limit - limit
        const lists = await List.findAndCountAll({limit, offset})
        return res.json(lists)
    }
}
module.exports = new ListController()