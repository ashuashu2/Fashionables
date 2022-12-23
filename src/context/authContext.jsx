import { createContext, useContext, useState } from "react";

const  AuthContext = createContext()
const AuthProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn] =useState({
        token : "",
        username: "user",
        login: false
       
    })
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = ()=>useContext(AuthContext)
export {useAuth,AuthProvider}