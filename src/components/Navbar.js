import React,{useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from '../Global/CartContext';
const Navbar = () => {
    const {qty} = useContext(CartContext);
    console.log(qty);
    return(
        <nav>
            <ul className="left">
                <li><Link to="/">IndiaExpress</Link></li>
            </ul>
            <ul className="right">
                <li>
                    <Link to="cart">
                        <span className="shopingCart">
                            <i className="fas fa-cart-plus"></i>
                            <span className="cartCount">{qty}</span>
                        </span>

                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;