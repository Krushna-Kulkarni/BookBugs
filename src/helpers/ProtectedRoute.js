import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to="/login"/>
}
