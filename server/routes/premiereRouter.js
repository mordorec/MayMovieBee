const Router = require('express')
const router = new Router()
const premiereController = require('../controllers/premiereController.js')

router.post('/', premiereController.create) 
router.get('/', premiereController.getAll)
router.get('/:id', premiereController.getOne)
router.delete('/:id', premiereController.delete)

module.exports = router