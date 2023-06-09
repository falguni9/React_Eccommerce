
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = require("./config/server.config") ;
const dbUri = require("./config/db.config")  ;
const authRoutes = require('./routes/auth.routes');
// const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.json());
// app.use(express.json({limit: '100mb'}));
app.use(cookieParser());
// app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));

productRoutes(app)
authRoutes(app);
// userRoutes(app);
// ticketRoutes(app);

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



// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const routes = require('./Route');
// require('./db/config')();
// const PORT = process.env.PORT || 5000;

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(express.urlencoded({extended: true, limit: '50mb'}));
// app.use(express.json({limit: '100mb'}));

// app.use('/api/v1', routes);

// app.listen(PORT, () => {
//     console.log(`app is listening in the port ${PORT}`)
// });