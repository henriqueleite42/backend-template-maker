const sequelize = require('sequelize');
const db = require('../../config/database.json');

const mysql = new sequelize(
    db.mysql.database,
    db.mysql.user,
    db.mysql.password,
    {
        host: db.mysql.host,
        dialect: 'mysql'
    }
);

module.exports = mysql;