const productListService = require('../services/service.product');

const CreatProductlist = async(req, res) =>{
   try{
        const response = await productListService.CreatProductlist(req.body);
      
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

const GetIDProduct = async(req,res) =>{
    try{
        const response = await productListService.GetIDProduct(req.params);
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


// update Productlist by id 
const updateProductlist  = async(req, res) =>{
    try{
        const response = await productListService.updateProductlist(req.params, req.body);
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
const deleteProductlist  = async(req, res) =>{
    try{
        const response = await productListService.deleteProductlist(req.params);
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



module.exports = {CreatProductlist, GetallProductlist, updateProductlist, deleteProductlist ,GetIDProduct }