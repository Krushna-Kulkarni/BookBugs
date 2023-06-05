import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import "./Products.css"
import { NavLink } from "react-router-dom"
import { NavigationBar } from "../../components/NavigationBar"

export const CartContext
    = () => {
        const { sortFiltered, clearFilters, priceSliderHandler, checkboxHandler, radioHandler, sortHandler } = useContext(ProductsContext)



    }