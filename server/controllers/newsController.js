const uuid = require('uuid')
const path = require('path')
const {News} = require('../models/models')
const ApiError = require('../error/ApiError');

class NewsController {
    async create(req, res, next) {
        try {
        let {name, description, date} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '../static', filename))
        const news = await News.create({name, description, date, img: filename})
        return res.json(news)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 15
        let offset = page * limit - limit
        const news = await News.findAndCountAll({limit, offset})
        return res.json(news)
    }

    async getOne(req, res) {
        const {id} = req.params
        const news = await News.findOne(
            {
        where: {id},
            },
        )
        return res.json(news)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const news = await News.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(news)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
}

module.exports = new NewsController()
