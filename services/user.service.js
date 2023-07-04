const bcrypt = require("bcrypt");
const User = require("../models/User.model");

const createUser = async(data) =>{
    const response = {};
    try{
        const userObj = {
            name: data.name,
            email: data.email,
            userType: data.userType,
            password: data.password,
            userStatus: data.userStatus,
        }
        response.user = await User.create(userObj);
        return response;
    }catch(err){
        console.log("Error: ", err);
        response.error = err.message;
        return response;
    }
}

const verifyUser = async(data) =>{
    const response = {};
    try{
        const userData = await User.findOne({email: data.email});
        if(userData === null){//email not found
            response.error = "Invalid Email";
        }else{//email found
            const result = bcrypt.compareSync(data.password, userData.password);
            if(result){
                response.success = true;
            }else{
                response.error = "Invalid Password";
            }
        }
        return response;
    }catch(err){
        console.log("Error: ", err);
        response.error = err.message;
        return response;
    }
}
const getUserByEmail = async(data) => { 
    try{
        let userInfo= await User.findOne({email: data.email});
        return userInfo;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}

const GetallUser = async() =>{
    try{
        const response = await User.find();
        return response;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}
const GetIDUser = async(UserID) =>{
    try{
        const validateUser = await validateUserID(UserID.id);

        if(!validateUser || validateUser.error){
            return {
                error: "invalid User id"
            }
        }
        const response = validateUser;
        return response;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}

// for verify currentUser and User id 

    const validateUserID = async(UserID)=>{
        const response = {};
        try {
            const UserData = await User.findOne({_id: UserID});
            if(UserData === null ){//User  not found
                response.error = "Invalid User";
            }else{//User found
                
                return UserData;
            }
            
        } catch (error) {
            console.log("Error: ", err);
            response.error = err.message;
            return response;
        }
        }

const updateUser = async(UserID, data) =>{
    try{
        const validateUser = await validateUserID(UserID.id);

        if(!validateUser || validateUser.error){
            return {
                error: "invalid User id"
            }
        }
        const filter = { _id: UserID.id };
        const update = data;
   
        const response = await User.findOneAndUpdate(
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
const deleteUser = async(UserID) =>{
    try{
        const validateUser = await validateUserID(UserID.id);

        if(!validateUser || validateUser.error){
            return {
                error: "invalid User id"
            }
        }

        const response = await User.deleteOne({ _id: UserID.id });
       
        return response;
    }
    catch(err){
        console.log(err);
        return err.message;
    }
}
  


module.exports = {createUser ,verifyUser, getUserByEmail,deleteUser,updateUser,GetIDUser,GetallUser}
