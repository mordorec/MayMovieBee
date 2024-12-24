const Router = require('express')
const router = new Router()
const directorController = require('../controllers/directorController')

router.post('/', directorController.create) 
router.get('/', directorController.getAll)
router.get('/:id', directorController.getOne)
router.delete('/:id', directorController.delete)

module.exports = router 
