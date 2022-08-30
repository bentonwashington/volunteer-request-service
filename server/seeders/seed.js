const db = require('../config/connection');
const { Category, Request, User } = require('../models');

const categoryData = require('./categoryData.json');

db.once('open'), async () => {
// clean database
await Category.deleteMany({});

// bulk create each model
const categories = await Category.insertMany(categoryData);

console.log('all done!');
process.exit(0);
} ;


