const db = require('../config/connection');
const { Category } = require('../models');
const { Request } = require('../models');
const { User } = require('../models');

const categoryData = require('./categoryData.json');
const requestData = require('./requestData.json');
const userData = require('./userData.json');

db.once('open', async () => {

    try {
        // clean database
        await Category.deleteMany({});
        await User.deleteMany({});
        await Request.deleteMany({});

        // insert data
        await Category.insertMany(categoryData);
        await User.insertMany(userData);
        await Request.insertMany(requestData);


        console.log('all done!');
        process.exit(0);
    }   catch (err) {
        throw err;
    }

    }) ;


