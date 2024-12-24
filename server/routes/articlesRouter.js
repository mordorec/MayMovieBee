const Router = require('express')
const router = new Router()
const articlesController = require('../controllers/articlesController')

router.post('/', articlesController.create) 
router.get('/', articlesController.getAll)
router.get('/:id', articlesController.getOne)
router.delete('/:id', articlesController.delete)

module.exports = router
