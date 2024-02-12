const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (error) {
        // Handle errors if any
        console.error('Error rendering homepage:', error);
        res.status(500).send('Internal server error');
    }
});
router.get('/thank-you', (req, res) => {
    res.render('thank-you')
});



module.exports = router;
