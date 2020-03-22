const  paymentControlller  = require('../payment/receivePayment.js')
const cors = require("cors")

module.exports = (app) => {
    app.post('/checkout/', cors(), (req, res) => {
        paymentControlller.payment(req, res)
    })
}
