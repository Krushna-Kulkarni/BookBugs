import { createContext } from "react"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext()
export const ToastProvider = ({ children }) => {

    const notify = (action) => {
        switch (action) {
            case "addToCart":
                return toast.info("Item Added to cart!", { position: "bottom-right", autoClose: 2000 })
            case "removeFromCart":
                return toast.info("Item Removed From cart!", { position: "bottom-right", autoClose: 2000 })
            case "addToWishlist":
                return toast.info("Item Added To Wishlist!", { position: "bottom-right", autoClose: 2000 })
            case "removeFromWishlist":
                return toast.info("Item Removed From Wishlist!", { position: "bottom-right", autoClose: 2000 })
            case "emailPasswordIncorrect":
                return toast.error("Email or Password is incorrect!", { position: "bottom-right", autoClose: 2000 })
            case "userLoggedIn":
                return toast.success("Logged In Successfully!", { position: "bottom-right", autoClose: 2000 })
            case "userLoggedOut":
                return toast.info("Logged Out Successfully!", { position: "bottom-right", autoClose: 2000 })
            case "pleaseLogin":
                return toast.info("Please Login To Continue!", { position: "bottom-right", autoClose: 2000 })
            default:
                return toast.error("something went wrong", { position: "bottom-right", autoClose: 2000 })
        }
    }


    return (<ToastContext.Provider value={{ notify }}>{children}</ToastContext.Provider>)
}