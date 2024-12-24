const uuid = require('uuid')
const path = require('path')
const {Director, Country} = require('../models/models')
const ApiError = require('../error/ApiError');

class DirectorController {
    async create(req, res, next) {
        console.log("Received request to create director");
        try {
            let {name, height, country_id, town, birth} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '../static', filename))
            const director = await Director.create({name, height, country_id, town, birth, img: filename})
            return res.json(director)
        } catch (e) {
            console.error("Error creating director:", e.message);
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const directors = await Director.findAll()
        return res.json(directors)
    }

    async getOne(req, res) {
        const {id} = req.params
        const director = await Director.findOne(
            {
        where: {id},
        include: {
            model: Country,
            attributes: ['name'],
        },
            },
        )
        return res.json(director)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const director = await Director.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(director)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new DirectorController()
