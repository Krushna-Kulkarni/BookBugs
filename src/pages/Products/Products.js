import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import "./Products.css"

export const Products
 = () => {
    const {productsData} = useContext(ProductsContext)
    

    return(
        <>
        <div className = "main">
            <div className = "navigationDiv">
                <div className = "logoDiv">
                    <h1>BookBugs</h1>
                </div>
                <div className = "searchBarDiv">
                    <input type="text" className = "searchbar" placeholder="Search books..."/>
                    <button className = "searchbtn">Search</button>
                </div>
                <div className = "profileDetailsDiv">
                    <p>Logout</p>
                    <p><i class="fa fa-shopping-cart" aria-hidden="true"></i>(0)</p>
                    <p><i class="fa fa-heart" aria-hidden="true"></i>(0)</p>
                    <p>Profile</p>
                </div>
            </div>
            <div className = "contentAndFilterDiv">
                <div className = "filterDiv">
                    <div className = "clearFilter">
                        <h3>Filters</h3>
                        <h4>Clear</h4>
                    </div>
                <h3>Price</h3>
                    <div className = "price-range">
                        <p>100</p>
                        <p>500</p>
                        <p>1000</p>
                    </div>
                    <div className = "SliderFilterDiv">
                        <label><input className = "slider" type="range" min="100" max="1000" /></label> 
                    </div>
                <h3>Category</h3>
                    <div className = "CheckBoxFilterDiv">
                        
                        <label><input type= "checkbox"/>Fiction</label> 
                        <label><input type= "checkbox"/>Non-Fiction</label>
                        <label><input type= "checkbox"/>Self Help</label>
                    </div>
                    <h3>Rating</h3>
                    <div className = "radioFilterDiv">
                        <label><input type= "radio"  name="radio"/>1 star and above</label> 
                        <label><input type= "radio" name="radio" />2 star and above</label>
                        <label><input type= "radio"  name="radio"/>3 star and above</label> 
                        <label><input type= "radio" name="radio" />4 star and above</label>
                    </div>
                    <h3>Sort By</h3>
                    <div className = "radioFilterDiv">
                    <label><input type= "radio"  name="radio1"/>Price - Low To High</label> 
                        <label><input type= "radio" name="radio1" />Price - High To Low</label>
                    </div>
                </div>
                <div className = "productsDiv">
              {
                productsData.map((product)=>{
                    const {name,img,author,price, rating, id} = product;
                    return (
                        <div key = {id} className = "productDiv">
                        <div className = "card-img">
                            <img src={`${img}`} alt="book" width="200px" height="300px"/>
                        </div>
                        <span role="button" class="wishlist-icon" disabled=""><i class="fa fa-heart" aria-hidden="true"></i></span>
                        <div className = "card-details">
                            <div className="card-title-rating">
                            <div className = "card-title">
                                <h4>{name}</h4>
                                <p>{author}</p>
                            </div>
                            <div className = "card-rating">
                            <p><small>{rating}&#9733;</small></p> 
                            </div>
                            </div>
                            <div className = "card-price">
                                <p><b>₹ {price}</b> </p>
                            </div>
                            <div className="addToCartBtn">
                            <button className="addToCart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
                            </div>


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