// models/testimonial.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Import any other models if needed
// const User = require('./User');

class Testimonial extends Model { }

Testimonial.init(
    {
        text: {
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
        modelName: 'Testimonial',
    }
);

module.exports = Testimonial;
