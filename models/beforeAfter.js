// models/beforeAfter.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Import any other models if needed
// const User = require('./User');

class BeforeAfter extends Model { }

BeforeAfter.init(
    {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        beforeImageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: true,
            }
        },
        afterImageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: true,
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'BeforeAfter',
    }
);

module.exports = BeforeAfter;
