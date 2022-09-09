import React, { useContext, useState } from 'react'
import "./login.css";
import Api from '../../Api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

//context appi
import { loginFailure, loginStart, loginSuccess } from "../../context/authcontext/authActions";
import {AuthContext} from "../../context/authcontext/acontext" 


const Login = () => {
  const  navigate = useNavigate();

  const {isFetching, dispatch} = useContext(AuthContext)
  const [input, setinput] =useState({});

  const handlechange=(e)=>{
    setinput((click)=>{
   return{...click, [e.target.name]:e.target.value}
    })
  }

  const handlesubmit=async(e)=>{
  
    e.preventDefault();

      dispatch(loginStart());
    try{
     const response= await Api.post("/users/login",
     {   ...input  } )//this is the data to 
     console.log(response.data)
   
          if(response.data.token){
            console.log("sucessfull login")
            e.target.reset();
            setinput({})
            toast.success("login sucessfull")
                // localStorage.setItem("token",response.data.token)
                // localStorage.setItem("user", JSON.stringify(response.data));

                setTimeout(()=>{
                  navigate("/");
                },2000)

                //context api
                dispatch(loginSuccess(response.data));
          }else{
       
            console.log("login failed")
               toast.error("login failed")
             
          }
        }catch(err){
          //login failled dispatch
          dispatch(loginFailure());

        }
         
       
    //  }else{
    //   console.log("login failed")
    //   toast.error("login failed")
    //  }

  }



  return (

    <>   
    <Navbar/>
     <div style={{height:"80vh"}}>
         <ToastContainer/>
      <div className="form">
      <form action="" onSubmit={handlesubmit}>
        <div className="extradiv"><h1>login</h1></div>
        <div className="email">
        <h5>email</h5>
        <input type="email" placeholder='email'  name="email"  onChange={handlechange} />
        </div>

        <div className="password">
          <h5>password</h5>
        <input type="password"  placeholder='password' name="password"  onChange={handlechange}/>
        </div>
       
        <div className="submit">
        <input type="submit"  value="login"/>
        </div>
      </form>
      </div>

      <button disabled={isFetching}>

         users
      </button>
    </div>
    </>

  )
}

export default Login;

// export const login = async (user, dispatch) => {
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("auth/login", user);
//     res.data.isAdmin && dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };