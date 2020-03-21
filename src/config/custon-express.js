const express = require('express');

const app = express();

const routes = require('../routes/routes.js')
routes(app)

module.exports = app