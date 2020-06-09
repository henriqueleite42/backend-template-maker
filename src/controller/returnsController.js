const errors = require('../../config/errors')

const formatReturn = function(code, data = {}) {
    var retorno;

    if (data != {}) {
        retorno = {
            "http": errors[code]["status"],
            "msg": {
                code: code,
                msg: errors[code]["msg"],
                data: data
            }
        };
    } else {
        retorno = {
            "http": errors[code]["status"],
            "msg": {
                code: code,
                msg: errors[code]["msg"]
            }
        };
    }

    return retorno;
}

module.exports = formatReturn;