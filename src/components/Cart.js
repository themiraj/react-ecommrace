import React,{useContext} from "react";
import {CartContext} from "../Global/CartContext";
import StripeCheckout from "react-stripe-checkout";
import Products from "./Products";
import axios from "axios";
const  Cart = () => {
    const {shopingCart,totalPrice,qty,dispatch} = useContext(CartContext);
    const onToken = (token) => {
        console.log(token);
    }
    return(
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:'100px'}}>
                {shopingCart.length > 0 ? 
                    shopingCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <span className="cart-image"><img src={cart.image} alt="not found"/></span>
                            <span className="cart-product-name">{cart.name}</span>
                            <span className="cart-product-price">${cart.price}.00</span>
                            <span className="inc" onClick={() => dispatch({type:'INC',id:cart.id,cart})}><i className="fas fa-plus"></i></span>
                            <span className="product-quantity">{cart.qty}</span>   
                            <span className="dec" onClick={() => dispatch({type:'DEC',id:cart.id,cart})}><i className="fas fa-minus"></i></span>
                            <span className="product-total-price">${cart.price * cart.qty}</span>
                            <span className="delete-product" onClick={()=> dispatch({type:'DELETE',id:cart.id, cart})}><i className="fas fa-trash-alt"></i></span> 
                        </div>
                    ))
                :'Sorry your cart is empty'}
            </div> 
            {shopingCart.length > 0 ? 
                <div className="cart-summary">
                    <div className="summary">
                        <h3>Cart Summary</h3>
                        <div className="total-item">
                            <div  className="items">Total Item</div>
                            <div className="item-count">{qty}</div>
                        </div>
                        <div className="total-price-section">
                            <div className="just-title">Total Price</div>
                            <div  className="item-price">${totalPrice}.00</div>
                        </div>
                        <div  className="stripe-button">
                        <StripeCheckout
                            token={onToken}
                            stripeKey="pk_test_51HafAWAT5LLTROXbf1tiSBHidN7cWkQfvoSpo9GsOUchvAevblbK8ftOOrKqUlhixMnFh3tumH6zraAdelSwWqCF00ppKydIyl"
                            name=""
                            description=""
                            image=""
                            panelLabel="Donate"
                            amount={2500} // cents
                            currency="USD"
                            locale="auto"
                            zipCode={false}
                            billingAddress={true}
                        />
                            {/* <StripeCheckout
                                token={handleToken}
                                stripeKey="pk_test_51HafAWAT5LLTROXbf1tiSBHidN7cWkQfvoSpo9GsOUchvAevblbK8ftOOrKqUlhixMnFh3tumH6zraAdelSwWqCF00ppKydIyl"
                                amount={totalPrice * 100}
                                name="All products"
                            >
                            </StripeCheckout>         */}
                        </div>
                    </div>
                </div>
            :'sdsdsdsdsd'}
        </div>
    )
}

export default Cart;