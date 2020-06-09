// Requerimentos
const sequelize = require('sequelize');
const mysql = require('../src/database/mysql');


// Tabelas
const Users = require('./userModel');


// Executando
Users.sync();