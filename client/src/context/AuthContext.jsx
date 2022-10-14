import { useState } from "react";
import { createContext } from "react";
import jwtDecode from 'jwt-decode'
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({ userId: 0, userName: "" })
    const [auth, setAuth] = useState(false)

    const toast = useToast()
    const navigate = useNavigate()

    const IsLogged = async () => {
        const token = localStorage.getItem('token')
        try {
            if (token) {
                setAuth(true)
                const decode = await jwtDecode(token)
                setUser({ userId: decode.user.id, userName: decode.user.userName })
            }
            else {
                 localStorage.removeItem("token")
                setAuth(false)
                setUser({userId:0,userName:""})
            }
        } catch (error) {
            localStorage.removeItem("token")
            setAuth(false)
            setUser({userId:0,userName:""})
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        setAuth(false)
        navigate("/")
    }

    useEffect(() => {
        IsLogged()
    }, [auth])

    const values = {
        setAuth,
        auth,
        logout,
        user
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContext

