const express = require('express');
const app = express();

const teste = function () {
    console.log(x);
}

app.get('/', (req, res, next) => {
    const x = 1;
    next();
}, teste);

app.listen(8080);