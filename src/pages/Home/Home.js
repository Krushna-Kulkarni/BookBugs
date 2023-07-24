import { NavLink } from "react-router-dom"
import "./Home.css"
import { NavigationBar } from "../../components/NavigationBar"
import { useContext, useEffect } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { Loader } from "../../components/Loader/Loader"

export const Home = () => {

    const { isLoading, setIsLoading,checkboxHandler } = useContext(ProductsContext)
  
            useEffect(() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
          
            }, [setIsLoading]);

    return (
<>
{isLoading && <Loader/>}
        <div className="homeMain">
            <NavigationBar />
            <div className="homeBox">
                <div className="heroImage">
                    <div className="myHero">
                        <div className="HeroHeading">
                            <div className="homeHeading">This is BookBugs</div>
                            <div className="homeSubHeading">Your online destination for captivating stories, inspiring knowledge, and endless literary adventures. Explore, discover, and indulge in the world of books with us.</div>
                            <div className="heroBtn">    <NavLink to="/products" className="redirectToProductsPage"> <button className="productsPageBtn"> Explore Available Books <i className="fa fa-arrow-right" aria-hidden="true"></i></button></NavLink></div>
                        </div>
                    </div>
                </div>

                <div className="categorySectionHeading">
                    <h1>Explore Catogories</h1>
                </div>

                <div className="homeCategories">

                    <NavLink to="/products"><div onClick={() => checkboxHandler("Self Help")} className="categoryVector">
                        <div className="categoryType">Self Help</div>
                        <img src="https://static.vecteezy.com/system/resources/previews/023/414/778/original/help-yourself-grow-flat-concept-spot-illustration-self-improvement-woman-2d-cartoon-character-on-white-for-web-ui-design-personal-development-i-love-me-isolated-editable-creative-hero-image-vector.jpg" alt="self help" width="100%" height="100%" />

                    </div></NavLink>
                    <NavLink to="/products"><div onClick={() => checkboxHandler("Fiction")} className="categoryVector">
                        <div className="categoryType">Fiction</div>
                        <img src="https://img.freepik.com/premium-photo/magic-fairy-tale-book-with-galaxy-landscape_23-2150132993.jpg" alt="fiction" width="100%" height="100%" />

                    </div></NavLink>
                    <NavLink to="/products"><div onClick={() => checkboxHandler("Non Fiction")} className="categoryVector">
                        <div className="categoryType">Non-Fiction</div>
                        <img src="https://st.depositphotos.com/1526816/2616/v/600/depositphotos_26162277-stock-illustration-a-book-with-a-castle.jpg" alt="non fiction" width="100%" height="100%" />

                    </div></NavLink>
                </div>

                <div className="footer">
                    <div className="footerHeader">Made with {`</>`} by Krushna Kulkarni</div>
                    <div className="socialLinks">

                        <a className="link" href="https://github.com/Krushna-Kulkarni" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>


                        <a className="link" href="https://twitter.com/Krushnatweets" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>


                        <a className="link" href="https://linkedin.com/in/krushna-kulkarni" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>

                    </div>
                </div>

            </div>
        </div >
</>
    )
}