/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "../Reducer/AuthReducer";

const initialState = {
    user: localStorage.getItem("Auth") ? JSON.parse(localStorage.getItem("Auth")) : {
        userName:"",
        email:"",
        password: "",
        isAuth:false    
    }
}

const AuthContext = createContext(initialState);



const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, initialState);
    
    useEffect(()=> {
            localStorage.setItem("Auth", JSON.stringify(authState.user));
    },[authState])
    
    const register = (email, password, userName) => {
        dispatch({type:"REGISTER", payload:{email, password, userName}})
    }

    const login = () => {
        dispatch({type:"LOGIN"})
    }

    const logout= () => {
        dispatch({type:"LOGOUT"})
    }

   return <AuthContext.Provider value={{
        user: authState.user,
        register,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;