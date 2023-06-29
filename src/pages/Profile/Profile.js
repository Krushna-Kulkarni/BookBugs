import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar"
import "./Profile.css"



export const Profile = () => {

    const loggedIn = true;

    return (
        <>

            <NavigationBar />

            <div className="profileBox">
                <div className="profileHeading">
                    <h2>My Profile</h2>
                </div>
                {loggedIn ? <div className="userNotLoggedIn">User Not Logged In. Please Log In or Sign Up</div> : <div className="userLoggedIn">
                    <div className="profileDiv">
                        <p>Name : Krushna Kulkarni</p>
                        <p>Username : Krushna Kulkarni</p>
                        <p>SignUp Date : {Date.now()}</p>
                    </div>
                </div>}
            </div>
        </>
    )
}