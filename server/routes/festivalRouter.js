const Router = require('express')
const router = new Router()
const festivalController = require('../controllers/festivalController')

router.post('/', festivalController.create) 
router.get('/', festivalController.getAll)
router.get('/:id', festivalController.getOne)
router.delete('/:id', festivalController.delete)

module.exports = router
