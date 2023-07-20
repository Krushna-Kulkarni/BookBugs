import { createContext, useContext, useState } from "react"
import { UserDetailsContext } from "./UserDetailsContext";
import { ToastContext } from "./ToastContext";
import { useLocation, useNavigate } from "react-router";


export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const { notify } = useContext(ToastContext);

  const {allUsers, setCurrentUser,setAddresses} = useContext(UserDetailsContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const emptyLoginFormData = {
      email:"",
      password:""
  }
  const dummyLoginData = {
    email:allUsers[0].email,
    password:allUsers[0].password
  }

  const [fillLoginData, setFillLoginData] = useState(emptyLoginFormData)

  const location = useLocation();
  const navigate = useNavigate();
  let userDetailsExists = null;

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const getLoginDetails = Object?.fromEntries(formData?.entries());
    
    userDetailsExists = allUsers?.find((user) => user?.email === getLoginDetails.email && user?.password === getLoginDetails.password)


    navigateuser();
   
  }

    const navigateuser = () => 
 {  
  if( userDetailsExists) {
    setIsLoggedIn(true);
    setCurrentUser(userDetailsExists);
    setAddresses(userDetailsExists?.addresses);
    notify("userLoggedIn");
    setFillLoginData(emptyLoginFormData);
    navigate(location?.state?.from?.pathname);
    }
    else{ 
      notify("emailPasswordIncorrect")
    };
  }



const fillLoginDataHandler = (data) => {
  setFillLoginData(data)
}

  


   
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn,loginSubmitHandler,userDetailsExists,fillLoginData, fillLoginDataHandler,dummyLoginData}}>
        {children}
    </AuthContext.Provider>
  )
}
