import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";
import "./Product.css"
import { NavigationBar } from "../../components/NavigationBar";
export const Product = () => {
    const { productsData } = useContext(ProductsContext)
    const { productId } = useParams();
    const currentProduct = productsData.find(({ _id }) => productId === _id)

    return (
        <>
            <NavigationBar />
            <h1 class="heading">Book Details</h1>
            <div classkey={currentProduct._id} className="product-Div">
                <div className="img-Div"><img src={`${currentProduct.img}`} alt="book" width="250px" height="370px" /></div>
                <div className="bookDetailsDiv">
                    <div className="titleDiv">
                        <h2>{currentProduct.name}</h2>
                        <h3>₹{currentProduct.price}</h3>
                    </div>
                    <div className="genericProductDetails">
                        <p><i class="fa fa-tag" aria-hidden="true"></i> Fastest Delivery</p>
                        <p><i class="fa fa-tag" aria-hidden="true"></i> Inclusive of All Taxes</p>
                        <p><i class="fa fa-tag" aria-hidden="true"></i> Cash On Delivery Available</p>
                    </div>
                    <div className="productDetailsDiv">
                        <p><b>Author:</b> {currentProduct.author}</p>
                        <p><b>Category:</b> {currentProduct.category}</p>
                        <p><b>Binding:</b> Hard Cover</p>
                        <p><b>Language:</b> English</p>
                    </div>
                    <div className="buttonsDiv">
                        <button className="actionBtn"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To cart</button>

                        <button className="actionBtn"><i class="fa fa-heart" aria-hidden="false"></i> Add To wishlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}