import { Request, Response } from 'express';

const errors = require('../../config/errors')
const Log = require('../model/logModel');

module.exports = (req, res, code, data = {}) => {
    retorno = {
        http: errors[code]["status"],
        msg: {
            code: code,
            msg: errors[code]["msg"],
            data: data
        }
    };

    if (data != {}) {
        retorno.msg.data = data;
    }

    Log.create({
        user: req.userId,
        date: Date.now(),
        ip: req.ips,
        link: req.url,
        type: req.method,
        body: req.body,
        query: req.query,
        params: req.params,
    });

    res.status(retorno.http).send(retorno.msg);
}