

const Productlist = require('../models/model.product');

const CreatProductlist = async (data) =>{
    
    try{
       
        const Productlistobj = {

            name:data.name,
            company:data.company,
            price: data.price,
            colors: data.colors,
            image: data.image,
            description: data.description,
            category: data.category,
            stars:data.stars,
            createdBy: data.createdBy,
            stock:data.stock,
            reviews:data.reviews,
            featured:data.featured,
            shipping:data.shipping,
        }

        const Product = await Productlist.create(Productlistobj);
        return {
            Product: Product
        }
    }
    catch(err){
        console.log(err.message);
        return err.message;
    }
}

const GetallProductlist = async() =>{
    try{
        const response = await Productlist.find();
        return response;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}
const GetIDProduct = async(productID) =>{
    try{
        const validateproduct = await validateproductID(productID.id);

        if(!validateproduct || validateproduct.error){
            return {
                error: "invalid product id"
            }
        }
        const response = validateproduct;
        return response;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}

// for verify currentUser and product id 

    const validateproductID = async(productID)=>{
        const response = {};
        try {
            const productData = await Productlist.findOne({_id: productID});
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

const updateProductlist = async(productID, data) =>{
    try{
        const validateproduct = await validateproductID(productID.id);

        if(!validateproduct || validateproduct.error){
            return {
                error: "invalid product id"
            }
        }
        const filter = { _id: productID.id };
        const update = data;
   
        const response = await Productlist.findOneAndUpdate(
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
const deleteProductlist = async(productID) =>{
    try{
        const validateproduct = await validateproductID(productID.id);

        if(!validateproduct || validateproduct.error){
            return {
                error: "invalid product id"
            }
        }

        const response = await Productlist.deleteOne({ _id: productID.id });
       
        return response;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}



module.exports = {CreatProductlist, GetallProductlist, updateProductlist , deleteProductlist, GetIDProduct };




