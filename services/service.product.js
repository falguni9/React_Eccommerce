
const Productlist = require('../models/model.product');

const CreatProductlist = async (data) =>{
    console.log(data,"++++++++++++++++++data")
    try{
       
        const Productlistobj = {
            
            id:data.id,
            name:data.name,
            company:data.company,
            price: data.price,
            colors: data.colors.split(","),
            image: data.image.split(","),
            description: data.description,
            category: data.category,
            featured: data.featured


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

module.exports = {CreatProductlist, GetallProductlist};




