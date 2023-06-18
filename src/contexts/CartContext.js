import { createContext, useState } from "react"


export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [isCouponApplied, setIsCouponApplied] = useState(false);


    const addToCartHandler = (product) => {
        cart.includes(product) ? setCart([...cart].filter((item) => item !== product)) : setCart([...cart, product]);
    }


    const applyCouponHandler = () => {
        setIsCouponApplied(isCouponApplied => isCouponApplied = true);
    }



    let { priceOfAllItems, couponDiscount, totalPriceDiscount, totalPrice } = cart.reduce((acc, { originalPrice, price }) => {
        acc.priceOfAllItems += originalPrice;
        acc.totalPriceDiscount += (originalPrice - price);
        acc.couponDiscount += isCouponApplied ? Math.round(price * 0.05) : 0;
        acc.totalPrice += isCouponApplied ? Math.round(price * 0.95) : price;
        return acc;
    }, {
        priceOfAllItems: 0,
        totalPriceDiscount: 0,
        couponDiscount: 0,
        totalPrice: 0
    })


    return (<CartContext.Provider value={{ cart, addToCartHandler, priceOfAllItems, totalPriceDiscount, couponDiscount, totalPrice, isCouponApplied, applyCouponHandler }}>
        {children}
    </CartContext.Provider>)
}