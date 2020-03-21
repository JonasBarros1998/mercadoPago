module.exports = (app) =>{
    app.get('/receive-payment', (req, res)=>{
        require('../receivePayment/receivePayment.js')
        //console.log("route: receiver-payment")
    })
    app.get('/payment-installments', (req, res)=>{
        console.log("route: payment-installments")
    })
}