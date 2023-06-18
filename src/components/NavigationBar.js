import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { NavLink } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
import { WishListContext } from "../contexts/WishListContext"

export const NavigationBar = () => {
    const { searchTextHandler, searchClickHandler } = useContext(ProductsContext)
    const { cart } = useContext(CartContext);
    const { wishList } = useContext(WishListContext);
    return (
        <>
            <div className="navigationDiv">
                <div className="logoDiv">
                    <NavLink to="/products"><h1>BookBugs</h1></NavLink>
                </div>
                <div className="searchBarDiv">
                    <input onChange={(e) => searchTextHandler(e.target.value)} type="text" className="searchbar" placeholder="Search books..." />
                    <button onClick={searchClickHandler} className="searchbtn"><NavLink to="/products"><i class="fa fa-search"></i></NavLink></button>
                </div>
                <div className="profileDetailsDiv">
                    <p><i class="fa fa-sign-out" aria-hidden="true"></i></p>
                    <p><NavLink to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>({cart.length})</NavLink></p>
                    <p><NavLink to="/wishList"><i class="fa fa-heart" aria-hidden="true"></i>({wishList.length})</NavLink></p>
                    <p><i class="fa fa-user-circle-o"></i></p>
                </div>
            </div>
        </>
    )
}