const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const requestSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            maxlength: 150,
        },
        details: {
            type: String
        },
        requestAuthor: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },
        category: {
                type: Schema.Types.ObjectId,
                ref: 'Category',
                required: true
            },
    }
);

const Request = model('Request', requestSchema);

module.exports = Request;