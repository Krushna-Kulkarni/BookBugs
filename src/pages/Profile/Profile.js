// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import moment from 'moment';
import { NavigationBar } from "../../components/NavigationBar"
import "./Profile.css"
import { useState } from 'react';



export const Profile = () => {

    const loggedIn = true;

    const [shouldShowTab, setShouldShowTab] = useState("profile");

    const toogleTab = (tab) => {
        setShouldShowTab(shouldShowTab => shouldShowTab = tab)
    }

    return (
        <>

            <NavigationBar />

            <div className="profileBox">
                <div className="profileHeading">
                    <h2>My Account</h2>
                </div>
                {!loggedIn ? <div className="userNotLoggedIn">User Not Logged In. Please Log In or Sign Up</div> : <div className="userLoggedIn">
                    <div className="userDetailsDiv">
                        <div className="userDetailsHeaderBtnsDiv">
                            <div onClick={() => toogleTab("profile")} className={shouldShowTab === "profile" ? "headerBtn-active" : "headerBtn"}>
                                <h3 >Profile</h3>
                            </div>
                            <div onClick={() => toogleTab("address")} className={shouldShowTab === "address" ? "headerBtn-active" : "headerBtn"}>
                                <h3 >Addresses</h3>
                            </div>
                        </div>
                        {shouldShowTab === "address" ? (<div className="userAddressDiv">
                            <div className="addressDetails">
                                <div className="addressDetailsRow">
                                    <h3>Krushna Kulkarni </h3>
                                    <p>Tirupati Colony, Pangri Road</p>
                                    <p>Beed, Maharashtra</p>
                                    <p>Pin : 431122</p>
                                    <p>Phone : 9420101718</p>
                                </div>
                                <div className="addressActionBtns">
                                    <button className="editAddressBtn"> <i class="fa fa-edit"></i> Edit</button>
                                    <button className="deleteAddressBtn"><i class="fa fa-trash"></i> Delete</button>
                                </div>
                            </div>
                            <div className="addNewAddressBtn">
                                <button className="addnewAddressBtn"><i class="fa fa-plus"></i> Add New Address</button>
                            </div>
                        </div>) :
                            (<div className="profileDiv">
                                <div className="profileDetails">
                                    <div className="profileDetailsLeftColumn">
                                        <h3>Name: </h3>
                                        <h3>Username: </h3>
                                        <h3>SignUp Date: </h3>
                                    </div>
                                    <div className="profileDetailsRightColumn">
                                        <h3>Krushna Kulkarni</h3>
                                        <h3>KrushnaKulkarni</h3>
                                        <h3>{moment(Date.now()).format("MMM Do YY")}</h3>
                                    </div>
                                </div>
                                <div className="profileActionBtns">
                                    <button className="logoutBtn"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
                                </div>
                            </div>)}
                    </div>
                </div>}
            </div>
        </>
    )
}