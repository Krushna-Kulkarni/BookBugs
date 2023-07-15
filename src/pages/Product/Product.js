import { useParams, NavLink, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";
import "./Product.css"
import { NavigationBar } from "../../components/NavigationBar";
import { WishListContext } from "../../contexts/WishListContext";
import { CartContext } from "../../contexts/CartContext";
import { ToastContext } from "../../contexts/ToastContext";
export const Product = () => {

    const { cart, addToCartHandler } = useContext(CartContext)
    const { wishList, addToWishListHandler } = useContext(WishListContext);
    const { notify } = useContext(ToastContext)

    const { productsData } = useContext(ProductsContext)
    const { productId } = useParams();
    const currentProduct = productsData.find(({ _id }) => productId === _id)

    const navigate = useNavigate();
    !currentProduct && navigate("/products")
    return (
        <><div className="productMain">
            <NavigationBar />
            <h1 className="heading">Book Details</h1>
            <div className="productContentDiv"><div classkey={currentProduct?._id} className="product-Div">
                <div className="img-Div"><img className="productImg" src={`${currentProduct?.img}`} alt="book" width="250px" height="370px" /></div>
                <div className="bookDetailsDiv">
                    <div className="titleDiv">
                        <p className="productName">{currentProduct?.name}</p>
                        <p className="productAuthor">₹{currentProduct?.price}</p>
                    </div>
                    <div className="genericProductDetails">
                        <p><i className="fa fa-tag" aria-hidden="true"></i> Fastest Delivery</p>
                        <p><i className="fa fa-tag" aria-hidden="true"></i> Inclusive of All Taxes</p>
                        <p><i className="fa fa-tag" aria-hidden="true"></i> Cash On Delivery Available</p>
                    </div>
                    <div className="productDetailsDiv">
                        <p><b>Author:</b> {currentProduct?.author}</p>
                        <p><b>Category:</b> {currentProduct?.category}</p>
                        <p><b>Binding:</b> Hard Cover</p>
                        <p><b>Language:</b> English</p>
                    </div>
                    <div className="buttonsDiv">
                        {cart.find((product) => product?._id === currentProduct?._id) ?
                            <NavLink to="/cart"> <button className="actionBtn"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Go to Cart </button></NavLink>
                            :
                            <button onClick={() => { notify("addToCart"); addToCartHandler(currentProduct) }} className="actionBtn"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
                        }

                        {wishList.find((product) => product._id === currentProduct._id) ? (<button onClick={() => { notify("removeFromWishlist"); addToWishListHandler(currentProduct) }} className="actionBtn">Remove From WishList</button>) : (<button onClick={() => { notify("addToWishlist"); addToWishListHandler(currentProduct) }} className="actionBtn"><i className="fa fa-heart" aria-hidden="true"></i> Move to WishList</button>)}
                    </div>
                </div>
            </div></div>
        </div>
        </>
    )
}