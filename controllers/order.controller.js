const OrderService = require('../services/order.service')

const createOrder = async(req,res) =>{
    try {
        
        const response = await OrderService.createOrder(req.body);
        if(!response){
            result = {
                massage:"Invailid Order",
                response:response
            }
            return res.status(404).send(result)
        }else{
            result = {
                massage:"All Order List",
                response:response,
            }
            return res.status(201).send(result)
        }
        
    } catch (err) {
        console.log(err)
    }

}

const getAllOrder = async(req,res) =>{
   
    try {
        const response = await OrderService.getAllOrder(req.query);
        if(!response){
            result = {
                massage:"order not found",
                response:response
            }
            return res.status(404).send(result)
        }else{
            result = {
                massage:"All Order List",
                response:response,
            }
            return res.status(201).send(result)
        }
    } catch (error) {
        console.log(error)
    }

   

}
const GetOrderByemail = async(req,res) =>{
    try{
        const response = await OrderService.GetOrderByemail(req.params);
        if(response.error){
            res.status(401).send({
                result: response.error
            })
        }else{
            res.status(201).send({
                result: response
            })
        }
    }
    catch(err){
        res.status(500).send({
            result: err
        })
    }
}

const GetOrderById = async(req,res) =>{
    try{
        const response = await OrderService.GetOrderById(req.params);
        if(response.error){
            res.status(401).send({
                result: response.error
            })
        }else{
            res.status(201).send({
                result: response
            })
        }
    }
    catch(err){
        res.status(500).send({
            result: err
        })
    }
}


// update Order by id 
const updateOderBYid  = async(req, res) =>{
    try{
        const response = await OrderService.updateOderBYid(req.params, req.body);
        if(response.error){
            res.status(401).send({
                result: response.error
            })
        }else{
            res.status(201).send({
                result: response
            })
        }
    }
    catch(err){
        res.status(500).send({
            result: err
        })
    }
}
// Delete Productlist by id 
const deleteOrderByID  = async(req, res) =>{
    try{
        const response = await OrderService.deleteOrderByID(req.params);
        if(response.error){
            res.status(401).send({
                result: response.error
            })
        }else{
            res.status(201).send({
                result: response
            })
        }
    }
    catch(err){
        res.status(500).send({
            result: err
        })
    }
}

module.exports = {GetOrderByemail, createOrder, getAllOrder, deleteOrderByID, updateOderBYid, GetOrderById }