import { useContext, useEffect } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import "./Products.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { NavigationBar } from "../../components/NavigationBar"
import { CartContext } from "../../contexts/CartContext"
import { WishListContext } from "../../contexts/WishListContext"
import { ToastContext } from "../../contexts/ToastContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Loader } from "../../components/Loader/Loader"

export const Products = () => {
        const { myFilters, sortFiltered, clearFilters, priceSliderHandler, checkboxHandler, radioHandler, sortHandler } = useContext(ProductsContext)
        const { cart, addToCartHandler } = useContext(CartContext)
        const { wishList, addToWishListHandler } = useContext(WishListContext);
        const {isLoggedIn} = useContext(AuthContext)
        const { notify } = useContext(ToastContext)

        const location = useLocation();
        const navigate = useNavigate();
        const {
            priceFilter,
            categoryFilter,
            ratingFilter,
            sortFilter } = myFilters
            const {isLoading, setIsLoading} = useContext(ProductsContext)
            useEffect(() => {
              document.body.style.zoom = "90%";
          
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
          
            }, [setIsLoading]);

        return (
            <>
              {isLoading && <Loader/>}
                <div className="main">
                    <NavigationBar />
                    <div className="contentAndFilterDiv">
                        <div className="filterDiv">
                            <div className="clearFilter">
                                <h3>Filters</h3>
                                <button className="clearFilterBtn" onClick={clearFilters}>Clear</button>
                            </div>
                            <h3>Price : {priceFilter}</h3>
                            <div className="price-range">
                                <p>100</p>
                                <p>500</p>
                                <p>1000</p>
                            </div>
                            <div className="SliderFilterDiv">
                                <label><input onChange={(e) => priceSliderHandler(e.target.value)} className="slider" type="range" min="100" max="1000" value={priceFilter} /></label>
                            </div>
                            <h3>Category</h3>
                            <div className="CheckBoxFilterDiv">

                                <label><input onChange={(e) => checkboxHandler(e.target.value)} checked={categoryFilter.includes("Fiction")} value="Fiction" type="checkbox" />Fiction</label>
                                <label><input onChange={(e) => checkboxHandler(e.target.value)} checked={categoryFilter.includes("Non Fiction")} value="Non Fiction" type="checkbox" />Non-Fiction</label>
                                <label><input onChange={(e) => checkboxHandler(e.target.value)} checked={categoryFilter.includes("Self Help")} value="Self Help" type="checkbox" />Self Help</label>
                            </div>
                            <h3>Rating</h3>
                            <div className="radioFilterDiv">
                                <label><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 1} type="radio" name="radio" value="1" />1 star and above</label>
                                <label><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 2} type="radio" name="radio" value="2" />2 star and above</label>
                                <label><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 3} type="radio" name="radio" value="3" />3 star and above</label>
                                <label><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 4} type="radio" name="radio" value="4" />4 star and above</label>
                            </div>
                            <h3>Sort By</h3>
                            <div className="radioFilterDiv">
                                <label><input onChange={(e) => sortHandler(e.target.value)} checked={sortFilter === "lToH"} type="radio" name="radio1" value="lToH" />Price - Low To High</label>
                                <label><input onChange={(e) => sortHandler(e.target.value)} checked={sortFilter === "hToL"} type="radio" name="radio1" value="hToL" />Price - High To Low</label>
                            </div>
                        </div>
                        <div className="showingResultsDiv">
                            <div className="showingResultsHeader">
                                <p>Showing All Products ({sortFiltered.length})</p>
                                <p className="filterIcon"><i className="fa fa-filter" aria-hidden="true"></i></p>
                            </div>
                            <div className="productsDiv">
                            {
                                sortFiltered.map((product) => {
                                    const { _id, name, img, author, price, originalPrice, rating } = product;
                                    return (
                                        <div key={_id} className="productDiv">

                                            <NavLink to={`/products/${_id}`}><div className="card-img">
                                                <img className="bookImg" src={`${img}`} alt="book" />
                                            </div></NavLink>
                                            {wishList.find((item) => item._id === product._id) ? (<span onClick={() => { notify("removeFromWishlist"); addToWishListHandler(product) }} role="button" className="wishlist-icon-filled" disabled=""><i className="fa fa-heart" aria-hidden="true"></i></span>) :
                                                (<span onClick={() => { notify("addToWishlist"); addToWishListHandler(product) }} role="button" className="wishlist-icon" disabled=""><i className="fa fa-heart" aria-hidden="true"></i></span>)}
                                            <div className="card-details">
                                                <div className="card-title-rating">
                                                    <div className="card-title">
                                                        <p className="card-title-header"><NavLink to={`/products/${_id}`}>{name}</NavLink> </p>
                                                        <p>{author}</p>
                                                    </div>
                                                    <div className="card-rating">
                                                        <p><small>{rating}&#9733;</small></p>
                                                    </div>
                                                </div>
                                                <div className="card-price">
                                                    <p><b>₹{price}</b> <s> ₹{originalPrice}</s> <small className="discountPercentage">{Math.round(((originalPrice - price) / originalPrice) * 100)}% off</small> </p>
                                                </div>
                                                {cart.find((item) => item._id === product._id) ? <div className="addToCartBtn" >
                                                    <NavLink to="/cart"><button className="goToCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Go to Cart </button></NavLink>
                                                </div> : <div className="addToCartBtn">
                                                    <button onClick={isLoggedIn ? () => { notify("addToCart"); addToCartHandler(product) } : () => { notify("pleaseLogin");navigate("/login", {state: {from:location}} ) }} className="addToCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
                                                </div>}


                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        </div>
                    </div>
                </div >

            </>
        )
    }