import { useContext } from "react";
import { NavigationBar } from "../../components/NavigationBar"
import { CartContext } from "../../contexts/CartContext"
import "./Cart.css"
import { WishListContext } from "../../contexts/WishListContext";
export const Cart = () => {
    const { cart, totalItems, priceOfAllItems, totalPriceDiscount, couponDiscount, totalPrice, applyCouponHandler, isCouponApplied, removeFromCartCartHandler, productQuantityIncrement, productQuantityDecrement } = useContext(CartContext);
    const { wishList, addToWishListHandler } = useContext(WishListContext);
    return (
        <>

            <NavigationBar />

            <div className="cartBox">
                <div className="cartHeading">
                    <h2>My Cart({cart.length})</h2>
                </div>
                {cart.length === 0 ? (<div className="emptyCart"><h3>There are no books in the cart</h3></div>) : (<div className="cart">
                    <div className="cartItemsDiv">
                        {
                            cart.map((item) => {
                                const { _id, name, img, author, price, originalPrice, rating, quantity } = item;
                                return (
                                    <div key={_id} className="cartItem">
                                        <div className="cartItemDetailsDiv">
                                            <div className="cartItemImg"><img src={`${img}`} alt="cartItmImg" width="150px" height="250px" /></div>
                                            <div className="cartItemDetails">
                                                <h4>{name}</h4>
                                                <h5>Author: <b>{author}</b></h5>
                                                <h5>Rating: <b>{rating}</b></h5>
                                                <h4><b>₹{price}</b> <s> ₹{originalPrice}</s> <small className="discountPercentage">{Math.round(((originalPrice - price) / originalPrice) * 100)}% off</small> </h4>
                                                <div className="quantity"><button onClick={() => productQuantityDecrement(item)} disabled={quantity === 1}>-</button>
                                                    <div type="Number" className="quantityDiv">{quantity}</div>
                                                    <button onClick={() => productQuantityIncrement(item)}>+</button></div>
                                            </div>
                                        </div>
                                        <div className="cartItemActionBtns">
                                            <button onClick={() => removeFromCartCartHandler(item)} className="cartItemActionBtn" >Remove</button>
                                            {wishList.includes(item) ? (<button onClick={() => addToWishListHandler(item)} className="cartItemActionBtn">Remove From WishList</button>) : (<button onClick={() => addToWishListHandler(item)} className="cartItemActionBtn">Move to WishList</button>)}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="cartItemsSummaryDiv">
                        <div className="couponDiv">
                            <p>Get 5% off ?</p>
                            <button disabled={isCouponApplied} onClick={() => applyCouponHandler()} className="couponBtn">Apply Coupon</button>
                        </div>
                        <div className="ItemDetailsandPrice">
                            <div className="ItemDetails">
                                <p>Price : ({totalItems} items)</p>
                                <p>Discount</p>
                                <p>Delivery Charges</p>
                                <p>Coupon Discount</p>
                                <p><b>Total Amount</b></p>
                            </div>
                            <div className="ItemPriceDetails">
                                <p>₹{priceOfAllItems}</p>
                                <p>₹{totalPriceDiscount}</p>
                                <p>Free</p>
                                <p>₹{couponDiscount}</p>
                                <p><b>₹{totalPrice}</b></p>
                            </div>
                        </div>
                        <div className="checkoutDiv">
                            <p className="discountPercentage">You will save ₹{totalPriceDiscount + couponDiscount} on this order</p>
                            <button className="actionBtn">CheckOut</button>
                        </div>
                    </div>
                </div>)}

            </div>
        </>
    )
}