import { createContext, useState } from "react";
// import React, { createContext } from "react";
import dslr from '../assets/dslr.jpg';
import headerphone from '../assets/headphone.jpg';
import iphone from '../assets/iphone.jpg';
import microphone from '../assets/micophone.jpg';
import perfume from '../assets/perfume.jpg';
import ring from '../assets/ring.jpg';
import shoes from '../assets/shoes.jpg';
import watch from '../assets/watches.jpg';
export const ProductsContext = createContext();
const ProductsContextProvider = (props) =>{
    const [products] = useState([
        {id:1,name:'Dslr',price:300,image:dslr, status:'hot'},
        {id:2,name:'Headerphone',price:30,image:headerphone, status:'new'},
        {id:3,name:'Iphone',price:400,image:iphone, status:'hot'},
        {id:4,name:'Microphone',price:200,image:microphone, status:'new'},
        {id:5,name:'Perfume',price:500,image:perfume, status:'hot'},
        {id:6,name:'Ring',price:100,image:ring, status:'new'},
        {id:7,name:'Shoes',price:80,image:shoes, status:'hot'},
        {id:8,name:'Watch',price:300,image:watch, status:'hot'}
    ]);
    return(
        <ProductsContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider;