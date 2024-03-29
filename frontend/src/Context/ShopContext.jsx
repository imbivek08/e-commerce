import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    for(let index=0;index<=all_product.length;index++){
        cart[index]=0;
    }
    return cart
}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems)
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const totalPrice = ()=>{
        let totalprice = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let  itemInfo = all_product.find((product)=>product.id===Number(item))
                totalprice += itemInfo.new_price * cartItems[item];
            }
        }
        return totalprice;
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,totalPrice}
   

    return (
       <ShopContext.Provider value={contextValue}>
        {props.children}
       </ShopContext.Provider> 
    )
}

export default ShopContextProvider;