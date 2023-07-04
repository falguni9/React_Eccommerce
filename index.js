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
// app.use(bodyParser.json());
// app.use(express.json({limit: '100mb'}));
app.use(cookieParser());
// app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
productRoutes(app)
authRoutes(app);
orderRoutes(app);
payment(app);
userRoutes(app);

// git remote add origin https://github.com/falguni9/React_Eccommerce.git
// app.post('/create-checkout-session', async (req, res) => {
//     const line_items = await req.body.Orderdata.chatItems.map(item => {
//       return {
//         price_data: {
//           currency: 'inr',
//           product_data: {
//             name: item.name,
//             images:[item.image],
           
//           },
//           unit_amount: item.price,
//         },
//         quantity: item.amount,
//       };
//     });
//  console.log( line_items[0])
//     const session = await stripe.checkout.sessions.create({
      
//       shipping_options: [
//         {
//           shipping_rate_data: {
//             type: 'fixed_amount',
//             fixed_amount: {
//               amount: 0,
//               currency: 'inr',
//             },
//             display_name: 'Free shipping',
//             delivery_estimate: {
//               minimum: {
//                 unit: 'hour',
//                 value: 5,
//               },
//               maximum: {
//                 unit: 'hour',
//                 value: 7,
//               },
//             },
//           },
//         },
        
//       ],
     

//       line_items,
//       mode: 'payment',
//       success_url: 'http://localhost:3000/paysuccess',
//       cancel_url: 'http://localhost:3000/payfailed',
//     });
//     console.log(req.body.Orderdata)
//     res.send({url:session.url})
  
//   });
  

  let endpointSecret ;

  app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    const sig = request.headers['stripe-signature'];

    let eventType;
    let data;

  if(endpointSecret){
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
        data = event.data.object;
        eventType = event.type;
    }
    
  }else{
    data = request.body.data.object;
    eventType = request.body.type;

  }
  
    // Handle the event
   
  
    // Return a 200 response to acknowledge receipt of the event
    response.send();
    console.log(data)
  });


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