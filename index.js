require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = require("./config/server.config") ;
const dbUri = require("./config/db.config")  ;
const authRoutes = require('./routes/auth.routes');
const orderRoutes = require('./routes/order.routes');
const productRoutes = require('./routes/product.routes');
const payment = require('./routes/payment.routes');
const userRoutes = require('./routes/user.routes')

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
productRoutes(app)
authRoutes(app);
orderRoutes(app);
payment(app);
userRoutes(app);

app.listen(PORT, ()=>{
    console.log("server is listening to the port: ", PORT);
    /* connect to mongo db */
    mongoose.connect(dbUri).then(
        () => { 
            /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
            console.log("connected to mongo db successfully");
        },
        err => { 
            /** handle initial connection error */
            console.log("Error occurred: ", err);
        }
    );
})