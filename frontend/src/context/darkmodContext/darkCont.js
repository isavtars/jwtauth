import React, { useEffect, useReducer } from 'react'
import {DarkReducer} from "./DarkReducer"


const DARkContext=React.createContext();


const INITIALSTATE={

   moad: localStorage.getItem("moad") ,
}





const Darkprovider=({children})=>{
    //hook reduce

     const [state, eispatch] = useReducer(DarkReducer, INITIALSTATE)


     
 useEffect(() => {
      localStorage.setItem("moad", state.moad);  
 }, [state.moad])

     return(
        
        <DARkContext.Provider value={{
           moad:state.moad,
            eispatch,
        }}>
        {children}
        </DARkContext.Provider>


     )
}


export {DARkContext,Darkprovider} ;



