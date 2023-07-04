const orderController = require('../controllers/order.controller');
module.exports = function(app){
    app.post('/reacteccomBack/api/v1/orderCreate',orderController.createOrder);
    app.get('/reacteccomBack/api/v1/getAllorder',orderController.getAllOrder)
    app.get('/reacteccomBack/api/v1/order/:id', orderController.GetOrderById);
    app.get('/reacteccomBack/api/v1/order/:email', orderController.GetOrderByemail);
     
    app.patch('/reacteccomBack/api/v1/order/update/:id' , orderController.updateOderBYid);
    
    app.delete('/reacteccomBack/api/v1/order/delete/:id' , orderController.deleteOrderByID);
}