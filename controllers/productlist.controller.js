const productListService = require('../services/service.product');

const CreatProductlist = async(req, res) =>{
   try{
        const response = await productListService.CreatProductlist(req.body);
        // console.log("++++++++++++++req.body",req)
        if(response.Product){
            res.status(201).send({
                data: response.Product,
                status: "Product is created"
            });
        }else{
            res.status(500).send({
                status: "Product is not created",
                data: response
            });
        }
   }catch(err){
        
        res.status(500).send({
            error: err
        })
   }
}

const GetallProductlist = async(req, res) =>{
   
    try{
        const response = await productListService.GetallProductlist();
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


module.exports = {CreatProductlist, GetallProductlist }