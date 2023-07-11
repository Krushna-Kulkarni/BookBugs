import { useContext } from "react";
import { NavigationBar } from "../../components/NavigationBar"
import { CartContext } from "../../contexts/CartContext"
import "./Checkout.css"
import { UserDetailsContext } from "../../contexts/UserDetailsContext"
import { ToastContext } from "../../contexts/ToastContext";
export const Checkout = () => {
    const { cart, totalItems, priceOfAllItems, totalPriceDiscount, couponDiscount, totalPrice, } = useContext(CartContext);
    const { addresses, currentAddress, currentAddressSelector } = useContext(UserDetailsContext)
    const { notify } = useContext(ToastContext);

    return (
        <>

            <NavigationBar />

            <div className="checkoutBox">
                <div className="checkoutHeading">
                    <h2>Checkout</h2>
                </div>

                <div className="checkout">
                    <div className="checkoutItemsSummaryDetailsDiv">

                        <div className="checkoutItemsSummaryDiv">
                            <div>
                                <h3 className="orderHeader">Order Details</h3>
                                <hr />
                            </div>
                            <div className="ItemQuantitySummary">
                                <div className="itemQuantityHeader">
                                    <p>Item</p>
                                    <p>Quantity</p>
                                </div>

                                {
                                    cart.map((item) => {
                                        return (
                                            <div className="itemQuantityBody">
                                                <div className="item">{item.name}</div>
                                                <div className="quantity">{item.quantity}</div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div>
                                <hr />
                            </div>
                            <div className="ItemDetailsandPrice">
                                <div className="ItemDetails">
                                    <p>Price : ({totalItems} items)</p>
                                    <p>Discount</p>
                                    <p>Delivery Charges</p>
                                    <p>Coupon Discount</p>
                                    <p><b>Total Amount</b></p>
                                    <p className="discountPercentage">You will save ₹{totalPriceDiscount + couponDiscount} on this order</p>
                                </div>
                                <div className="ItemPriceDetails">
                                    <p>₹{priceOfAllItems}</p>
                                    <p>₹{totalPriceDiscount}</p>
                                    <p>Free</p>
                                    <p>₹{couponDiscount}</p>
                                    <p><b>₹{totalPrice}</b></p>
                                </div>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div className="checkoutAddressDetailsDiv">
                                <p><b>Deliver To:</b> </p>
                                <p>{currentAddress.firstName + " " + currentAddress.lastName} </p>
                                <p>{currentAddress.street}</p>
                                <p>{currentAddress.district}, {currentAddress.state}</p>
                                <p>Pin: {currentAddress.pinCode}</p>
                                <p>Phone: {currentAddress.phone}</p>
                            </div>
                            <div className="placeOrderDiv">
                                <button className="placeOrderActionBtn">Place Order</button>
                            </div>
                        </div>
                    </div>
                    <div className="checkoutItemsDiv">
                        <div className="checkoutAddressDiv">
                            <h3>Select Address: </h3>
                            {
                                addresses.map((item) => {
                                    const { firstName,
                                        lastName,
                                        street,
                                        district,
                                        state,
                                        pinCode,
                                        phone } = item;
                                    return (
                                        <div className="checkoutAddressDetailsDiv">
                                            <label className="radioOption">
                                                <input onChange={() => currentAddressSelector(item)} className="radioInput" type="radio" name="radio" value={item} />
                                                <div className="radioInputData">
                                                    <p>{firstName + " " + lastName} </p>
                                                    <p>{street}</p>
                                                    <p>{district}, {state}</p>
                                                    <p>Pin: {pinCode}</p>
                                                    <p>Phone: {phone}</p>
                                                </div>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}