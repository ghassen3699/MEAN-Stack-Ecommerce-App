const Cart = require('../models/cart');
const CartItems = require('../models/cartItems');
const CartItem = require('../models/cartItems') ;
const Product = require('../models/product') ;


async function createCart (user) {
    try{
        const cart = new Cart({user}) ;
        const createdCart = await cart.save() ;
        return createdCart ;
    }catch( error ){
        throw new Error(error.message) ;
    }
}


async function findUserCart (userId) {
    try{
        let cart = await Cart.findOne({user:user});
        let cartItems = await CartItem.find({cart: cart._id}).populate('products') ;

        cart.cartItems = cartItems ;

        let totalPrice = 0 ;
        let totalDiscountedPrice = 0 ;
        let totalItems = 0 ;

        for(let cartItem of cart.cartItems){
            totalPrice += cartItems.price ;
            totalDiscountedPrice += cartItem.discountedPrice ;
            totalItems+= cartItem.quntity ; 
        }

        cart.totalPrice = totalPrice ;
        cart.totalItems = totalItems ;
        cart.discount = totalPrice - totalDiscountedPrice ;

        return cart ;
    }catch(error){
        throw new Error(error.message)
    }
}


async function addCartItems(userId, req){
    try{
        const cart = await Cart.findOne({user: userId}) ;
        const product = await Product.findById(req.productId) ;

        const isPresent = await CartItems.findOne({cart: cart._id, product: product._id, userId}) ;

        if(!isPresent){
            const cartItem = new CartItems({
                product:product._id, 
                cart: cart._id,
                quantity:1 ,
                userId,
                price: product.price ,
                size: req.size ,
                discountedPrice: product.discountPrice,
            })

            const createdCartItem = await cartItem.save() ;
            cart.items.push(createdCartItem);
            await cart.save() ;
            return "Item added to cart" ;
        }
    }catch (error){

    }
}


module.exports = {createCart, findUserCart, addCartItems}