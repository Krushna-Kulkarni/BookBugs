import { useContext } from "react";
import { NavigationBar } from "../../components/NavigationBar"
import { CartContext } from "../../contexts/CartContext"
import "./Cart.css"
import { WishListContext } from "../../contexts/WishListContext";
export const Cart = () => {
    const { cart, addToCartHandler } = useContext(CartContext);
    const { wishList, addToWishListHandler } = useContext(WishListContext);
    return (
        <>

            <NavigationBar />

            <div className="cartBox">
                <div className="cartHeading">
                    <h2>My Cart({cart.length})</h2>
                </div>
                {cart.length === 0 ? (<div className="emptyCart"><h3>There are no books in theIn The Cart</h3></div>) : (<div className="cart">
                    <div className="cartItemsDiv">
                        {
                            cart.map((item) => {
                                const { _id, name, img, author, price, rating } = item;
                                return (
                                    <div key={_id} className="cartItem">
                                        <div className="cartItemDetailsDiv">
                                            <div className="cartItemImg"><img src={`${img}`} alt="cartItmImg" width="150px" height="250px" /></div>
                                            <div className="cartItemDetails">
                                                <h4>{name}</h4>
                                                <h5>Author: <b>{author}</b></h5>
                                                <h5>Rating: <b>{rating}</b></h5>
                                                <h4>₹ {price}</h4>
                                                <div className="quantity"><button>+</button>
                                                    <div type="Number" className="quantityDiv">0</div>
                                                    <button>-</button></div>
                                            </div>
                                        </div>
                                        <div className="cartItemActionBtns">
                                            <button onClick={() => addToCartHandler(item)} className="cartItemActionBtn" >Remove</button>
                                            {wishList.includes(item) ? (<button onClick={() => addToWishListHandler(item)} className="cartItemActionBtn">Remove From WishList</button>) : (<button onClick={() => addToWishListHandler(item)} className="cartItemActionBtn">Move to WishList</button>)}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="cartItemsSummaryDiv">
                        <div className="couponDiv">
                            <p>Have Coupon ?</p>
                            <button className="couponBtn">Apply Coupon</button>
                        </div>
                        <div className="ItemDetailsandPrice">
                            <div className="ItemDetails">
                                <p>Price</p>
                                <p>Discount</p>
                                <p>Delivery Charges</p>
                                <p>Coupon Discount</p>
                                <p><b>Total Amount</b></p>
                            </div>
                            <div className="ItemPriceDetails">
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                                <p><b>12345</b></p>
                            </div>
                        </div>
                        <div className="checkoutDiv">
                            <p>You will save 1234 on this order</p>
                            <button className="actionBtn">CheckOut</button>
                        </div>
                    </div>
                </div>)}

            </div>
        </>
    )
}