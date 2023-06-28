import { createContext } from "react"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext()
export const ToastProvider = ({ children }) => {

    const notify = (action) => {
        switch (action) {
            case "addToCart":
                return toast.info("Item Added to cart!", { autoClose: 2000 })
            case "removeFromCart":
                return toast.info("Item Removed From cart!", { autoClose: 2000 })
            case "addToWishlist":
                return toast.info("Item Added To Wishlist!", { autoClose: 2000 })
            case "removeFromWishlist":
                return toast.info("Item Removed From Wishlist!", { autoClose: 2000 })
            default:
                return toast.error("something went wrong", { autoClose: 2000 })
        }
    }


    return (<ToastContext.Provider value={{ notify }}>{children}</ToastContext.Provider>)
}