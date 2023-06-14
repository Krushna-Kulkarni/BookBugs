import { createContext, useState } from "react"


export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCartHandler = (product) => {
        cart.includes(product) ? setCart([...cart].filter((item) => item !== product)) : setCart([...cart, product]);


    }



    return (<CartContext.Provider value={{ cart, addToCartHandler }}>
        {children}
    </CartContext.Provider>)
}