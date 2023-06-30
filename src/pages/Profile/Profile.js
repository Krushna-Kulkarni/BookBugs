// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import moment from 'moment';
import { NavigationBar } from "../../components/NavigationBar"
import "./Profile.css"
import { useContext, useState } from 'react';
import { UserDetailsContext } from '../../contexts/UserDetailsContext';



export const Profile = () => {

    const { addresses, currentAddress, currentUser } = useContext(UserDetailsContext)



    // ///////////////////////////////////////////
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
                            {
                                addresses.map((item) => {
                                    const { firstName, lastName, street, district, state, pinCode, phone } = item;
                                    return (
                                        <>
                                            <div className="addressDetails">
                                                <div className="addressDetailsRow">
                                                    <h3>{firstName + " " + lastName} </h3>
                                                    <p>{street}</p>
                                                    <p>{district}, {state}</p>
                                                    <p>Pin: {pinCode}</p>
                                                    <p>Phone: {phone}</p>
                                                </div>
                                                <div className="addressActionBtns">
                                                    <button className="editAddressBtn"> <i class="fa fa-edit"></i> Edit</button>
                                                    <button className="deleteAddressBtn"><i class="fa fa-trash"></i> Delete</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            <div className="addNewAddressBtnDiv">
                                <button className="addnewAddressBtn"><i class="fa fa-plus"></i> Add New Address</button>
                            </div>
                        </div>) :
                            (<div className="profileDiv">
                                <div className="profileDetails">
                                    <div className="profileDetailsLeftColumn">
                                        <h3>Name: </h3>
                                        <h3>Email: </h3>
                                        <h3>SignUp Date: </h3>
                                    </div>
                                    <div className="profileDetailsRightColumn">
                                        <h3>{currentUser.firstName + " " + currentUser.lastName}</h3>
                                        <h3>{currentUser.email}</h3>
                                        {/* <h3>{moment(Date.now()).format("MMM Do YY")}</h3> */}
                                        <h3>{moment(currentUser.createdAt).format("MMM Do YY")}</h3>
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