const router = require('express').Router();

const homePageRoutes = require('./galleryController')
const quoteRoutes = require('./quoteController')

router.use('/', homePageRoutes);
router.use('/get-a-quote', quoteRoutes)

module.exports = router;