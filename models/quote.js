// models/quote.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Import any other models if needed
// const User = require('./User');

class Quote extends Model { }

Quote.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: /^\+?[0-9]{6,}$/ // Regex for validating phone number
            }
        },
        projectDetails: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'Quote',
    }
);

module.exports = Quote;
