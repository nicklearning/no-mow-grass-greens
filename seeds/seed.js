// seeders/seed.js
const sequelize = require('../config/connection');
const { Quote } = require('../models');

const quoteData = require('./quoteData.json');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        await Quote.bulkCreate(quoteData);

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
