const Router = require('express')
const router = new Router()
const trailerController = require('../controllers/trailerController')

router.post('/', trailerController.create) 
router.get('/', trailerController.getAll)
router.delete('/:id', trailerController.delete)

module.exports = router