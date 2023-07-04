const UserService = require('../services/user.service');

const GetallUser = async(req, res) =>{
   
    try{
        const response = await UserService.GetallUser();
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

const GetIDUser = async(req,res) =>{
    try{
        const response = await UserService.GetIDUser(req.params);
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
// update User by id 
const updateUser  = async(req, res) =>{
    try{
        const response = await UserService.updateUser(req.params, req.body);
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
// Delete User by id 
const deleteUser  = async(req, res) =>{
    try{
        const response = await UserService.deleteUser(req.params);
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

module.exports = {deleteUser,updateUser,GetIDUser,GetallUser}