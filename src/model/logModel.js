const mongoose = require('../../Database');

const LogModel = new mongoose.Schema({
    user: {
        type: Number // ID do Usuario
    },
    ip: {
        type: String // IP Do Usuario
    },
    date: {
        type: Date // Data Da Requisição
    },
    page: {
        type: String // Link da Pagina
    },
    type: {
        type: String // GET, POST, PUT, DELETE
    },
    body: {
        type: String // Corpo da Requisição
    },
    query: {
        type: String // Query da Requisição
    },
    params: {
        type: String // Parametros da Requisição
    },
    result: {
        type: String //Resultado
    },
});

module.exports = mongoose.model('Log', LogModel);