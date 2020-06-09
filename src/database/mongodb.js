const mongoose = require('mongoose');
const db = require('../../config/database.json');

mongoose.connect(db.mongodb.link, { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;