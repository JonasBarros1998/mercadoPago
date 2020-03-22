const express = require('express');
require('marko/node-require').install()
require('marko/express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true, 
}))
app.use(cors())

const routes = require('../routes/routes.js')
routes(app)


module.exports = app