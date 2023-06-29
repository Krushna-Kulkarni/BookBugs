import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { NavLink } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
import { WishListContext } from "../contexts/WishListContext"

import "./NavigationBar.css"

export const NavigationBar = () => {
    const { searchText, searchTextHandler, searchClickHandler } = useContext(ProductsContext)
    const { cart } = useContext(CartContext);
    const { wishList } = useContext(WishListContext);



    return (
        <>
            <div className="navigationDiv">
                <div className="logoDiv">
                    <NavLink to="/"><h1>BookBugs</h1></NavLink>
                </div>
                <div className="searchBarDiv">
                    <input onChange={(e) => searchTextHandler(e.target.value)} value={searchText} type="text" className="searchbar" placeholder="Search books..." />
                    <button onClick={searchClickHandler} className="searchbtn"><NavLink to="/products"><i className="fa fa-search"></i></NavLink></button>
                </div>
                <div className="profileDetailsDiv">
                    <p><i className="fa fa-sign-out" aria-hidden="true"></i></p>
                    <p><NavLink to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>({cart.length})</NavLink></p>
                    <p><NavLink to="/wishList"><i className="fa fa-heart" aria-hidden="true"></i>({wishList.length})</NavLink></p>
                    <p><NavLink to="/user"><i className="fa fa-user-circle-o"></i></NavLink></p>
                </div>
            </div>
        </>
    )
}