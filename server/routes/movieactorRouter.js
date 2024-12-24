const Router = require('express')
const router = new Router()
const movieactorController = require('../controllers/movieactorController')

router.post('/', movieactorController.addActorToMovie) 
router.get('/', movieactorController.getAll)


module.exports = router 
