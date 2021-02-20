import React, { useContext } from "react";
import Banner from "./Banner";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
const Products = () =>{
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    // console.log(data);
    // console.log(products);
    return (
        <div className="container">
            <Banner /> 
            <div className="products">
                {products.map((product) =>(
                    <div className="product" key={product.id}>
                        <div className="cover"> 
                        <div className="product-image">
                            <img src={product.image} alt="not fount"/>
                        </div> 
                        <div className="product-datails">
                            <div className="product-name">
                                {product.name}    
                            </div> 
                            <div className="product-price">
                                {product.price}
                            </div> 
                        </div>
                        {product.status === 'hot' ? <div className="hot">Hot</div>:''} 
                        {product.status === 'new' ? <div className="new">new</div>:''} 
                        </div>
                        <div className="add-to-cart" onClick={() => dispatch({type:'ADD_TO_CART',id:product.id,product})}>add to cart</div> 
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;