const mongoose = require("mongoose");
const {Schema} = mongoose;

const OrderSchema= new Schema({
    Username:{
        type: String,
        
    },
     adderss:{
        type:Array,
        require: true,
     },
     orderItem:{
        type:Array,
        require: true,
     },
     SellerEmail:{
        type: String,
        default: "text@gmail.com",
        required: true,
        match: /\S+@\S+\.\S+/,
        lowercase: true
    },
    createdAt:{
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default:Date.now,
   },
   orderStatus:{
    type: String,
    required: true,
    default: "failed",
    enum: ["paid", "pending","failed"]
   },
   orderDeliveryStatus:{
    type: String,
    required: true,
    default: "pending",
    enum: ["in_process", "pending","delivered"]
   },
    OrderCreated:{
    type: [mongoose.Types.ObjectId],
    ref: "User"
   }
   
});


const userModel = mongoose.model("Order", OrderSchema);
module.exports = userModel;