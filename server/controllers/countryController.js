const {Country} = require('../models/models')
// const ApiError = require('../error/apiError');

class CountryController {
    async create(req, res) {
        const {name} = req.body
        const country = await Country.create({name})
        return res.json(country)
    }

    async getAll(req, res) {
        const countries = await Country.findAll()
        return res.json(countries)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const country = await Country.destroy(
                {
                    where: {id}
                }
            ).then((res) => {
                console.log(res)
            })
            return res.json(country)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new CountryController()
