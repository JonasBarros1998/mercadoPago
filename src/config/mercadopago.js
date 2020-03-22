require('dotenv/config')

const mercadopago = require('mercadopago')

const accessToken = process.env.ACCESS_TOKEN

mercadopago.configure({
    sandbox: true,
    access_token: accessToken
  });

module.exports = mercadopago