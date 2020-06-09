const sequelize = require('sequelize');
const mysql = require('../src/database/mysql');

/***************************************************************************
 *
 *                       Atenção
 *
 * Ao Criar uma nova tabela, o sequelize já trata automaticamente de criar os campos:
 * Id, CreatedAt e ModifiedAt
 *
 ***************************************************************************/

const Users = mysql.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    picture: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = Users;