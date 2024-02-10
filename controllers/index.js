const router = require('express').Router();

const galleryRoutes = require('./galleryController')
const quoteRoutes = require('./quoteController')

router.use('/', galleryRoutes);
router.use('/get-a-quote', quoteRoutes)

module.exports = router;