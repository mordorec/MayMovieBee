const Router = require('express')
const router = new Router()
const movielistController = require('../controllers/movielistController')

router.post('/', movielistController.addMovieToList) 
router.get('/', movielistController.getAll)


module.exports = router 
