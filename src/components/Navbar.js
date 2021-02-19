import React from "react";

const Navbar = () => {
    return(
        <nav>
            <ul className="left">
                <li><a href="">IndiaExpress</a></li>
            </ul>
            <ul className="right">
                <li>
                    <a href="">
                        <span className="shopingCart">
                            <i className="fas fa-cart-plus"></i>
                            <span className="cartCount">0</span>
                        </span>

                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;