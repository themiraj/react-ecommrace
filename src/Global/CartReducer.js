export  const CartReducer = (state,action) =>{
    const {shopingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch(action.type){
        case 'ADD_TO_CART':
            const check = shopingCart.find(product => product.id === action.id);
            if(check){
                return state;
            }else{
                product = action.product;
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                return{shopingCart:[product,...shopingCart],totalPrice:updatedPrice,qty:updatedQty}  
            }
            break;

            case 'INC':
                product = action.cart;
                product.qty = product.qty + 1;
                updatedPrice = totalPrice + product.price;
                // updatedQty = qty + product.qty;
                index = shopingCart.findIndex(cart => cart.id === action.id);
                shopingCart[index] = product;
                return {shopingCart:[...shopingCart],totalPrice:updatedPrice}
            default:
                return state;
    }
}