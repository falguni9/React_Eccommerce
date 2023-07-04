const User = require("../models/User.model");
const Order = require("../models/Order.model")
const createOrder = async(data) =>{

    const response = {};
    try{
        const userObj = {
            Username: data.Username,
            SellerEmail: data.SellerEmail,
            adderss: data.adderss,
            orderItem: data.orderItem,
            orderStatus: data.orderStatus,
           
        }
        response.order = await Order.create(userObj);
        return response;
    }catch(err){
        console.log("Error: ", err);
        response.error = err.message;
        return response;
    }
}

const getAllOrder = async (data) =>{
    let order =[];
    if(data.SellerEmail){
        order = await GetOrderByemail(data.SellerEmail);
    }else if(data.Username){
        order = await GetOrderByUserEmail(data.Username);
    }
    else{
        order = await Order.find();
    }
    return order;
}
const GetOrderByUserEmail = async(UserEmail) =>{
    try {  
        const orderByEmail = await Order.find({Username: UserEmail});
        return orderByEmail;
        
    } catch (error) {
        return error
    }
  
}

const GetOrderByemail = async(UserEmail) =>{
    try {  
        const orderByEmail = await Order.find({SellerEmail: UserEmail});
        return orderByEmail;
        
    } catch (error) {
        return error
    }
  
}

const GetOrderById = async(orderID) =>{
    try{
        const validateOrder = await validateOrderID(orderID.id);

        if(!validateOrder || validateOrder.error){
            return {
                error: "invalid product id"
            }
        }
        const response = validateOrder;
        return response;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}

// for verify currentUser and order id 

const validateOrderID = async(orderID)=>{
    const response = {};
    try {
        const productData = await Order.findOne({_id: orderID});
        if(productData === null ){//product  not found
            response.error = "Invalid product";
        }else{//product found
            
            return productData;
        }
        
    } catch (error) {
        console.log("Error: ", err);
        response.error = err.message;
        return response;
    }
    }

const updateOderBYid = async(orderID, data) =>{
try{
    const validateOrder = await validateOrderID(orderID.id);

    if(!validateOrder || validateOrder.error){
        return {
            error: "invalid product id"
        }
    }
    const filter = { _id: orderID.id };
    const update = data;

    const response = await Order.findOneAndUpdate(
        filter, 
        update,
        {
            new: true // return the updated document
        }
    );
   
    return response;
}
catch(err){
    console.log(err);
    return err.message;
}
}
const deleteOrderByID = async(orderID) =>{
try{
    const validateOrder = await validateOrderID(orderID.id);

    if(!validateOrder || validateOrder.error){
        return {
            error: "invalid product id"
        }
    }

    const response = await Order.deleteOne({ _id: orderID.id });
   
    return response;
}
catch(err){
    console.log(err);
    return err.message;
}
}

module.exports = {createOrder, getAllOrder, deleteOrderByID, updateOderBYid, GetOrderById, GetOrderByemail  }