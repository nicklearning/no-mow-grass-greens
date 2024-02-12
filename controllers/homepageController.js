const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

router.get('/', async (req, res) => {
    try {
        const imageDir = path.join(__dirname, '../public/imgs/results');
        const resizedImages = [];

        // Read images from directory
        fs.readdir(imageDir, async (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                return res.status(500).send('Internal Server Error');
            }

            // Filter out non-image files (e.g., hidden files, directories)
            const images = files.filter(file => {
                const extname = path.extname(file).toLowerCase();
                return ['.jpg', '.jpeg', '.png', '.gif'].includes(extname);
            });

            // Resize each image using sharp in parallel
            await Promise.all(images.map(async (image) => {
                const inputImagePath = path.join(imageDir, image);
                const outputImagePath = path.join(__dirname, '../public/imgs/resized', image);
                const width = 300; // Set desired width
                const height = 200; // Set desired height

                try {
                    await sharp(inputImagePath)
                        .resize(width, height, {
                            fit: 'fill',
                            position: 'center',
                            interpolation: 'bicubic' // Specify interpolation method here
                        })
                        .toFile(outputImagePath);

                    // Store path to resized image
                    resizedImages.push('/imgs/resized/' + image);
                } catch (error) {
                    console.error('Error resizing image:', error);
                }
            }));

            // Render the Handlebars template with resized image data
            res.render('homepage', { images: resizedImages });
        });
    } catch (error) {
        // Handle errors if any
        console.error('Error rendering homepage:', error);
        res.status(500).send('Internal server error');
    }
});

router.get('/thank-you', (req, res) => {
    res.render('thank-you');
});

module.exports = router;
