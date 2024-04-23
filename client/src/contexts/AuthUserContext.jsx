import React, { createContext, useContext, useState } from 'react'

const AuthUserContext = createContext(null);

export const useAuthUser = ()=>{
    return useContext(AuthUserContext);
}

export const AuthUserContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("auth-user")));
  return (
    <AuthUserContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthUserContext.Provider>
  )
}