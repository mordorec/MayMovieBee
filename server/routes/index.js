const Router = require('express')
const router = new Router()
const actorRouter = require('./actorRouter')
const articlesRouter = require('./articlesRouter')
const awardRouter = require('./awardRouter')
const countryRouter = require('./countryRouter')
const directorRouter = require('./directorRouter')
const festivalRouter = require('./festivalRouter')
const genreRouter = require('./genreRouter')
const movieRouter = require('./movieRouter')
const newsRouter = require('./newsRouter')
const premiereRouter = require('./premiereRouter')
const trailerRouter = require('./trailerRouter')
const userRouter = require('./userRouter')
const listRouter = require('./listRouter')
const movieactorRouter = require('./movieactorRouter')
const movielistRouter = require('./movielistRouter')


router.use('/user', userRouter)
router.use('/list', listRouter)
router.use('/movie', movieRouter)
router.use('/news', newsRouter)
router.use('/articles', articlesRouter)
router.use('/country', countryRouter)
router.use('/award', awardRouter)
router.use('/director', directorRouter)
router.use('/actor', actorRouter)
router.use('/premiere', premiereRouter)
router.use('/festival', festivalRouter)
router.use('/trailer', trailerRouter)
router.use('/genre', genreRouter)
router.use('/movieactor', movieactorRouter)
router.use('/movielist', movielistRouter)

module.exports = router