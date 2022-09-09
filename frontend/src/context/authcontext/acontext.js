import React, { useContext, useEffect, useReducer } from 'react'

import AuthReducer from "./authReducer"

const AuthContext = React.createContext();

const INITALSTATE={

    
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
}

const Authprovider=({children})=>{

    //hook reducers initials states
    const [state, dispatch] = useReducer(AuthReducer,INITALSTATE);

    
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);


    return(

        <AuthContext.Provider value={{

            user:state.user, //this is the changing showing states come from reducer
            isFetching:state.user,
            error:state.error,
            dispatch
        }}>
         {children}
        </AuthContext.Provider>
    )
}


//this is lama context pattern

// make using context like a custome hook
const useAuthGlobal=()=>{
 return useContext(AuthContext)
}


//export 
export  {Authprovider,useAuthGlobal,AuthContext};