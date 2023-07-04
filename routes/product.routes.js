const productController = require('../controllers/productlist.controller');

module.exports = function(app){
    // to create a product
    app.post('/reacteccomBack/api/v1/productlist', productController.CreatProductlist);
     //get all product 
     app.get('/reacteccomBack/api/v1/productlist/all', productController.GetallProductlist);
     //get product by id
     app.get('/reacteccomBack/api/v1/productlist/:id', productController.GetIDProduct);
     
     app.patch('/reacteccomBack/api/v1/productlist/update/:id' , productController.updateProductlist);
     
     app.post('/reacteccomBack/api/v1/productlist/delete/:id' , productController.deleteProductlist);
}