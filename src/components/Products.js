import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
const Products = () =>{
    const {products} = useContext(ProductsContext);
    return (
        <div className="products">
            {products.map((product) =>{
                <div className="product" key={product.id}>
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
                </div>
            })}
        </div>
    )
}
export default Products;