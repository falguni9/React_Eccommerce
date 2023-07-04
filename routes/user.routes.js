const userController = require("../controllers/user.controller");
const userValidator = require('../middleware/auth.validetor')
module.exports = function(app){
   
    app.put("/ecom/api/v1/user/update/:id",userValidator.isUserAuthenticated,userValidator.isAdmin, userController.updateUser);
    app.delete("/ecom/api/v1/user/delete/:id",userValidator.isUserAuthenticated,userValidator.isAdmin, userController.deleteUser);
    app.get("/ecom/api/v1/user/alluser",userValidator.isUserAuthenticated,userValidator.isAdmin, userController.GetallUser);
    app.get("/ecom/api/v1/user/idUser/:id",userValidator.isUserAuthenticated,userValidator.isAdmin, userController.GetIDUser);
}