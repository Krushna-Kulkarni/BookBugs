import { createContext, useState } from "react";
import { users } from "../backend/db/users";

export const UserDetailsContext = createContext();
export const UserDetailsProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(users[0])
    const [addresses, setAddresses] = useState([{
        firstName: "Krushna",
        lastName: "Kulkarni",
        street: "Ganesh Nagar, Paud Road",
        district: "Pune",
        state: "Maharashtra",
        pinCode: "411057",
        phone: "1256394870"
    }, {
        firstName: "Adarsh",
        lastName: "Balika",
        street: "Tirupati Colony, Pangri Road",
        district: "Beed",
        state: "Maharashtra",
        pinCode: "431122",
        phone: "9420101718"
    }])
    const [currentAddress, setCurrentAddress] = useState(addresses[0])

    return (<UserDetailsContext.Provider value={{ addresses, currentAddress, currentUser }}>
        {children}
    </UserDetailsContext.Provider>)
}