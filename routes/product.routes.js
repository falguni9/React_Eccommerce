const productController = require('../controllers/productlist.controller');

module.exports = function(app){
    // to create a product
    app.post('/reacteccomBack/api/v1/productlist', productController.CreatProductlist);
     //get all tickets assigned to current user
     app.get('/reacteccomBack/api/v1/productlist/all', productController.GetallProductlist);

}