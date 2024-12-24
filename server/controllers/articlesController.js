const uuid = require('uuid')
const path = require('path')
const {Articles} = require('../models/models')
const ApiError = require('../error/ApiError');

class ArticlesController {
    async create(req, res, next) {
        try {
        let {name, short_description, long_description, date} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '../static', filename))
        const articles = await Articles.create({name, short_description, long_description, date, img: filename})
        return res.json(articles)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 6
        let offset = page * limit - limit
        const articles = await Articles.findAndCountAll({limit, offset})
        return res.json(articles)
    }

    async getOne(req, res) {
        const {id} = req.params
        const articles = await Articles.findOne(
            {
        where: {id},
            },
        )
        return res.json(articles)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const articles = await Articles.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(articles)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
}

module.exports = new ArticlesController()
