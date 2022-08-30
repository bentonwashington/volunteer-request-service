const { Schema, model } = require('mongoose');

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
        createdAt: {
            type: Date, 
            default: Date.now
        },
        category: {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            },
    }
);

const Request = model('Request', requestSchema);

module.exports = Request;