import { useContext } from "react";
import { NavigationBar } from "../../components/NavigationBar"
import { WishListContext } from "../../contexts/WishListContext"
import "./WishList.css"
export const WishList = () => {
    const { wishList, addToWishListHandler } = useContext(WishListContext);
    return (
        <>

            <NavigationBar />

            <div className="wishListBox">
                <div className="wishListHeading">
                    <h2>My WishList({wishList.length})</h2>
                </div>
                {wishList.length === 0 ? (<div className="EmptyWishList"><h3>There are no books in the WishList</h3></div>) : (<div className="wishList">
                    <div className="wishListItemsDiv">
                        {
                            wishList.map((item) => {
                                const { _id, name, img, author, price, originalPrice, rating } = item;
                                return (
                                    <div key={_id} className="wishListItem">
                                        <div className="wishListItemDetailsDiv">
                                            <div className="wishListItemImg"><img src={`${img}`} alt="wishListItmImg" width="150px" height="250px" /></div>
                                            <div className="wishListItemDetails">
                                                <h4>{name}</h4>
                                                <h5>Author: <b>{author}</b></h5>
                                                <h5>Rating: <b>{rating}</b></h5>
                                                <h4><b>₹{price}</b> <s> ₹{originalPrice}</s> <small className="discountPercentage">{Math.round(((originalPrice - price) / originalPrice) * 100)}% off</small></h4>
                                            </div>
                                        </div>
                                        <div className="wishListItemActionBtns">
                                            <button onClick={() => addToWishListHandler(item)} className="wishListItemActionBtn" >Remove</button>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>)}

            </div>
        </>
    )
}