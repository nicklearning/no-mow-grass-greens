const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/thank-you', (req, res) => {
    res.render('thank-you')
});



module.exports = router;
