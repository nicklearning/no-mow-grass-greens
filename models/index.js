// models/index.js
const BeforeAfter = require('./beforeAfter');
const Testimonial = require('./testimonial');
const Quote = require('./quote');

// Define associations between models if needed
// For example:
// BeforeAfter.hasMany(Testimonial);
// Testimonial.belongsTo(BeforeAfter);

module.exports = {
    BeforeAfter,
    Testimonial,
    Quote,
};