import { v4 as uuid } from "uuid";
import { createContext, useState } from "react";
import { users } from "../backend/db/users";

export const UserDetailsContext = createContext();
export const UserDetailsProvider = ({ children }) => {

    // const [currentUser, setCurrentUser] = useState(users[0])
    const currentUser = users[0]


    const [addresses, setAddresses] = useState([{
        id: uuid(),
        firstName: "Krushna",
        lastName: "Kulkarni",
        street: "Ganesh Nagar, Paud Road",
        district: "Pune",
        state: "Maharashtra",
        pinCode: "411057",
        phone: "1256394870"
    }, {
        id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        street: "Tirupati Colony, Pangri Road",
        district: "Beed",
        state: "Maharashtra",
        pinCode: "431122",
        phone: "9420101718"
    }])
    const [currentAddress, setCurrentAddress] = useState(addresses[0])
    const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);


    const dummyData = {
        id: null,
        firstName: "Dummy",
        lastName: "User",
        street: "Dummy Street, Dummy Road",
        district: "DummyDistrict",
        state: "DummyState",
        pinCode: "123456",
        phone: "123456789"
    }

    const emptyFormData = {
        id: null,
        firstName: "",
        lastName: "",
        street: "",
        district: "",
        state: "",
        pinCode: "",
        phone: ""
    }
    const [fillData, setFillData] = useState(emptyFormData)


    const currentAddressSelector = (item) => {
        setCurrentAddress(item);
    }

    const formSubmitHandler = (e) => {
        setIsAddressFormOpen(false);

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const getAddress = Object.fromEntries(formData.entries());

        if (getAddress.id === '') {
            const newAddress = { ...getAddress, id: uuid() };
            setAddresses([...addresses, newAddress]);
        } else {
            setAddresses([...addresses].map((addr) => addr.id === getAddress.id ? getAddress : addr))
        }

    }

    const updateAddressFormHandler = (item) => {
        setIsAddressFormOpen(true);
        setFillData(item);
    }
    const deleteAddressFormHandler = (id) => {
        setAddresses([...addresses].filter((addr) => addr.id !== id))
    }

    return (<UserDetailsContext.Provider value={{ isAddressFormOpen, setIsAddressFormOpen, addresses, currentAddress, currentUser, currentAddressSelector, formSubmitHandler, updateAddressFormHandler, deleteAddressFormHandler, fillData, setFillData, emptyFormData, dummyData }}>
        {children}
    </UserDetailsContext.Provider>)
}