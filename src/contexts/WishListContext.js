import { createContext, useState } from "react"


export const WishListContext = createContext();
export const WishListProvider = ({ children }) => {

    const [wishList, setWishList] = useState([]);

    const addToWishListHandler = (product) => {
        wishList.includes(product) ? setWishList([...wishList].filter((item) => item !== product)) : setWishList([...wishList, product]);


    }



    return (<WishListContext.Provider value={{ wishList, addToWishListHandler }}>
        {children}
    </WishListContext.Provider>)
}