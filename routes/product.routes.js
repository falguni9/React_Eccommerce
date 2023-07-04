const productController = require('../controllers/productlist.controller');
const userValidator = require('../middleware/auth.validetor')

module.exports = function(app){
    // to create a product
    app.post('/reacteccomBack/api/v1/productlist',userValidator.isUserAuthenticated,userValidator.isAdminOrSeller, productController.CreatProductlist);
     //get all product 
     app.get('/reacteccomBack/api/v1/productlist/all', productController.GetallProductlist);
     //get product by id
     app.get('/reacteccomBack/api/v1/productlist/:id', productController.GetIDProduct);
     
     app.patch('/reacteccomBack/api/v1/productlist/update/:id' ,userValidator.isUserAuthenticated,userValidator.isAdminOrSeller, productController.updateProductlist);
     
     app.post('/reacteccomBack/api/v1/productlist/delete/:id' ,userValidator.isUserAuthenticated,userValidator.isAdminOrSeller, productController.deleteProductlist);
}  