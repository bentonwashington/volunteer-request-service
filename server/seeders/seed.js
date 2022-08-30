const db = require('../config/connection');
const { Category } = require('../models');
const { Request } = require('../models');

const categoryData = require('./categoryData.json');
const requestData = require('./requestData.json');

db.once('open', async () => {

    try {
        // clean database
        await Category.deleteMany({});
        await Request.deleteMany({});

        // insert data
        await Category.insertMany(categoryData);
        await Request.insertMany(requestData);


        console.log('all done!');
        process.exit(0);
    }   catch (err) {
        throw err;
    }

    }) ;


