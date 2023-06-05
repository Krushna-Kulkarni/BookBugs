import { NavigationBar } from "../../components/NavigationBar"
import "./Cart.css"
export const Cart = () => {
    return (
        <>

            <NavigationBar />

            <div className="cartBox">
                <div className="cartHeading">
                    <h2>My Cart(4)</h2>
                </div>
                <div className="cart">
                    <div className="cartItemsDiv">
                        <div className="cartItem">
                            <div className="cartItemDetailsDiv">
                                <div className="cartItemImg"><img src="https://m.media-amazon.com/images/I/71Kezi+HZeL._AC_UY327_FMwebp_QL65_.jpg" alt="cartItmImg" width="150px" height="250px" /></div>
                                <div className="cartItemDetails">
                                    <h4>BookName</h4>
                                    <h4>₹ 450</h4>
                                    <div className="quantity"><button>+</button>
                                        <div type="Number" className="quantityDiv">0</div>
                                        <button>-</button></div>
                                </div>
                            </div>
                            <div className="cartItemActionBtns">
                                <button className="cartItemActionBtn">Remove</button>
                                <button className="cartItemActionBtn">Move to WishList</button>
                            </div>
                        </div>

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
                </div>

            </div>
        </>
    )
}