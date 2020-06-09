import { Request, Response } from 'express';

// Requerimentos
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const response =require('../middleware/Response');

// Configurações
const authKey = require('../../../config/auth.json');
const multerConfig = require('../../../Config/multer');

// Models
const Users = require('../model/userModel');

// Funções
function generateToken(params = {}) {
    return jwt.sign(params, authKey.secret, { expiresIn: 21600 });
}

// Declarando variaveis
var result = {};

//Declarando constantes
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


// Register


router.post('register', multer(multerConfig).single(), async (req: Request, res: Response) => {
    try {
        if (req.body == undefined) {
            throw new Error(2004);
        }

        if ( ! req.body.email || req.body.email == undefined || req.body.email == null) {
            throw new Error(1001);
        }

        if ( ! req.body.password || req.body.password == undefined || req.body.password == null) {
            throw new Error(1002);
        }

        if ( ! req.body.name || req.body.name == undefined || req.body.name == null) {
            throw new Error(1003);
        }

        if ( ! emailRegex.test(email)) {
            throw new Error(2001);
        }

        if (User.findOne({ email })) {
            throw new Error(3001);
        }

        if (! passwordRegex.test(password)) {
            throw new Error(2002);
        }

        const createdUser = await Users.create( req.body );

        result = { token: generateToken({ id: createdUser.id }) };

        const retorno = await formatReturn(0001, result);

        return res.status(retorno["http"]).send(retorno["msg"]);
    } catch (err) {
        var retorno;
        if (typeof err.message == Number) {
            retorno = await formatReturn(err.message, err);
        } else {
            retorno = await formatReturn(0000, err);
        }

        return res.status(retorno["http"]).send(retorno["msg"]);
    }
}, response(req, res, code, data));