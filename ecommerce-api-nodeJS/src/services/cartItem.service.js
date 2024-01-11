const CartItems = require('../models/cartItems.js');
const userService = require('../services/user.service.js') ;



async function updateCartItem (userId, cartItemId, cartItemData){
    try {
        
        const item = await findCartItemById(cartItemId) ;
        if(!item){
            throw new Error("cart item not found : ", cartItemId)
        }

        const user = await userService.findUserById(item.userId) ;
        if (!user){
            throw new Error("user not found : ", item.userId)
        }

        if (user._id.toString() === userId.toString()){
            item.quantity = cartItemData.quantity ;
            item.price = item.quantity * item.product.price ;
            item.discountedPrice = item.quantity * item.product.discountedPrice ;
            const updatedCartItem = await item.save() ;
            return updatedCartItem  ;
        }else {
            throw new Error ("you can't update this cart item") ;
        }

    } catch (error) {
        throw new Error(error.message) ;
    }
}


async function removeCartItem(userId, cartItemId){
    const cartItem = await findCartItemById(cartItemId) ;
    const user = await userService.findUserById(userId) ;

    if (user._id.toString() === cartItemId.userId.toString()) {
        await CartItems.findByIdAndDelete(cartItemId) ;
    }

    throw new Error("You cant remove another user's item") ;
}


async function findCartItemById(cartItemId) {
    const cartItem = await findCartItemById(cartItemId) ;
    if (!cartItem) {
        return cartItem
    }else {
        throw new NotFoundError('Cartitem not found with id', cartItemId) ;
    }
}


module.exports = {
    findCartItemById,
    removeCartItem,
    updateCartItem
}