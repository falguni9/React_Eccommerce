const paymentConroller = require('../controllers/payment.controller')
module.exports = function(app){
    app.post("/create-checkout-session", paymentConroller.payment);
      
}