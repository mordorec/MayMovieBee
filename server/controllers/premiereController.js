const uuid = require('uuid')
const path = require('path')
const {Premiere, Movie} = require('../models/models')
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class PremiereController {
    async create(req, res, next) {
        try {
        let {movie_id, date} = req.body
        const premiere = await Premiere.create({movie_id, date})
        return res.json(premiere)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const today = new Date();
        const premieres = await Premiere.findAll({
          where: {
            date: {
              [Op.gte]: today
            }
          },
          include: [
            { model: Movie, attributes: ['name'] },
            { model: Movie, attributes: ['img'] },
        ],
          order: [
            ['date', 'ASC']
          ]
        });
        return res.json(premieres);
      }

    async getOne(req, res) {
        const {id} = req.params
        const premiere = await Premiere.findOne(
                {
            where: {id},
                },
            )
            return res.json(premiere)
        }

    async delete(req, res) {
        try {
            const {id} = req.params
            const premiere = await Premiere.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(premiere)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
}

module.exports = new PremiereController()
