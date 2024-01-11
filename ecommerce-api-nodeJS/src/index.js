const express = require('express') ;
const cors = require('cors') ;
const app = express() ;



app.use(express.json()) ;
app.use(cors()) ;


app.get('/', (req, res) => {
    return res.status(200).send({message: "Welcome to ecommerce api - node", status:true}) ;
})


const cartItemController = require('./routes/cart.routes.js') ;
app.use("/api/cart_items", cartItemController) ;  // /api is the prefix for all


const cartController = require('./routes/cart.routes.js') ;
app.use("/api/cart", cartController) ;  // /api is the prefix for all


module.exports = app ;