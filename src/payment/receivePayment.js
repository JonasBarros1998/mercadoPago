const mercadopago = require('../config/mercadopago.js')

module.exports = {

  async payment(req, res) {

    try {
      const preference = await mercadopago.preferences.create(req.body);
      return res.json({ "redirect": preference.body.init_point });
    } catch (err) {
      return res.send(err.message);
    }
  }
}
