import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { NavLink } from "react-router-dom"

export const NavigationBar = () => {
    const { searchTextHandler, searchClickHandler } = useContext(ProductsContext)

    return (
        <>
            <div className="navigationDiv">
                <div className="logoDiv">
                    <NavLink to="/products"><h1>BookBugs</h1></NavLink>
                </div>
                <div className="searchBarDiv">
                    <input onChange={(e) => searchTextHandler(e.target.value)} type="text" className="searchbar" placeholder="Search books..." />
                    <button onClick={searchClickHandler} className="searchbtn"><NavLink to="/products">Search</NavLink></button>
                </div>
                <div className="profileDetailsDiv">
                    <p>Logout</p>
                    <p><NavLink to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>(0)</NavLink></p>
                    <p><i class="fa fa-heart" aria-hidden="true"></i>(0)</p>
                    <p>Profile</p>
                </div>
            </div>
        </>
    )
}