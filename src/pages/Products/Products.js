import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import "./Products.css"
import { NavLink } from "react-router-dom"
import { NavigationBar } from "../../components/NavigationBar"
import { CartContext } from "../../contexts/CartContext"
import { WishListContext } from "../../contexts/WishListContext"

export const Products
    = () => {
        const { myFilters, sortFiltered, clearFilters, priceSliderHandler, checkboxHandler, radioHandler, sortHandler } = useContext(ProductsContext)

        const { cart, addToCartHandler } = useContext(CartContext)
        const { wishList, addToWishListHandler } = useContext(WishListContext);

        const {
            priceFilter,
            categoryFilter,
            ratingFilter,
            sortFilter } = myFilters

        return (
            <>
                <div className="main">
                    <NavigationBar />
                    <div className="contentAndFilterDiv">
                        <div className="filterDiv">
                            <div className="clearFilter">
                                <h3>Filters</h3>
                                <button onClick={clearFilters}>Clear</button>
                            </div>
                            <h3>Price</h3>
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
                        <div className="productsDiv">
                            {
                                sortFiltered.map((product) => {
                                    const { _id, name, img, author, price, originalPrice, rating } = product;
                                    return (
                                        <div key={_id} className="productDiv">

                                            <div className="card-img">
                                                <img src={`${img}`} alt="book" width="200px" height="300px" />
                                            </div>
                                            {wishList.includes(product) ? (<span onClick={() => addToWishListHandler(product)} role="button" className="wishlist-icon-filled" disabled=""><i className="fa fa-heart" aria-hidden="true"></i></span>) :
                                                (<span onClick={() => addToWishListHandler(product)} role="button" className="wishlist-icon" disabled=""><i className="fa fa-heart" aria-hidden="true"></i></span>)}
                                            <div className="card-details">
                                                <div className="card-title-rating">
                                                    <div className="card-title">
                                                        <h4 ><NavLink to={`/products/${_id}`}>{name}</NavLink> </h4>
                                                        <p>{author}</p>
                                                    </div>
                                                    <div className="card-rating">
                                                        <p><small>{rating}&#9733;</small></p>
                                                    </div>
                                                </div>
                                                <div className="card-price">
                                                    <p><b>₹{price}</b> <s> ₹{originalPrice}</s> <small className="discountPercentage">{Math.round(((originalPrice - price) / originalPrice) * 100)}% off</small> </p>
                                                </div>
                                                {cart.includes(product) ? <div className="addToCartBtn">
                                                    <button className="addToCart"><NavLink to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Go to Cart </NavLink></button>
                                                </div> : <div className="addToCartBtn">
                                                    <button onClick={() => addToCartHandler(product)} className="addToCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
                                                </div>}


                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </>
        )
    }