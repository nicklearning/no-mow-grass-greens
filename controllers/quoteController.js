const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('getQuote');
});


module.exports = router;
