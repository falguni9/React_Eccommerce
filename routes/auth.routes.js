const authController = require("../controllers/auth.controller");

module.exports = function(app){
    app.post("/ecom/api/v1/auth/signup", authController.signup);
    app.post("/ecom/api/v1/auth/signin", authController.signin);
    
}