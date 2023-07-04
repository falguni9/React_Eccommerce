const stripe = require('stripe')(process.env.Secret_key)

const payment = async(req,res) =>{
    const line_items = await req.body.Orderdata.chatItems.map(item => {
        return {
          price_data: {
            currency: 'inr',
            product_data: {
              name: item.name,
              images:[item.image],
             
            },
            unit_amount: item.price,
          },
          quantity: item.amount,
        };
      });
//    console.log( line_items[0])
      const session = await stripe.checkout.sessions.create({
        
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 0,
                currency: 'inr',
              },
              display_name: 'Free shipping',
              delivery_estimate: {
                minimum: {
                  unit: 'hour',
                  value: 5,
                },
                maximum: {
                  unit: 'hour',
                  value: 7,
                },
              },
            },
          },
          
        ],
       
  
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/paysuccess',
        cancel_url: 'http://localhost:3000/payfailed',
      });
    //   console.log(req.body.Orderdata)
      res.send({url:session.url})

}

module.exports = {payment}