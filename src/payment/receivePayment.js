require('dotenv/config')
const mercadopago = require('mercadopago')

const accessToken = process.env.ACCESS_TOKEN
console.log(accessToken)

mercadopago.configurations(
    {
        accessToken: accessToken
    })

