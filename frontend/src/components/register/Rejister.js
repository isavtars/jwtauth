import React, { useState } from 'react'
import {Link}  from "react-router-dom";
import Api from '../../Api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './R4egister.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
function Rejister() {
 
  const  navigate = useNavigate();
  const [input, setinput] = useState({})
  
  
  const handlechange=(e)=>{
    console.log(e.target.value)
    setinput((click)=>{
     return {...click,[e.target.name]:e.target.value}
    })
  }

  const hanglesubmit=async(e)=>{
    e.preventDefault();
//add post in ui
    const response = await Api.post("/users/add",{
      ...input
    })
    console.log(response.data._id)
    console.log(response.data)

    if(response.data._id){
      e.target.reset();
      setinput({});
      toast.success("register sucessfull")

      setTimeout(()=>{
        navigate("/login", { replace: true });
      },2000)
    }else{

      console.log("something errors")
      toast.error("register failed")
    }

  }
  return (
    <> 
    <Navbar/>
       <div style={{marginBottom:"10px"}}>
        <ToastContainer />
    <div className="formr">
    <form  onSubmit={hanglesubmit}>
      <div className="extradiv"><h1>Register</h1></div>

      <div className="username">
      <h5>username</h5>
      <input type="text" placeholder='username' name='username'           onChange={handlechange} />
      </div>

      <div className="email">
      <h5>email</h5>
      <input type="email" placeholder='email' name='email'           onChange={handlechange} />
      </div>

      <div className="password">
        <h5>password</h5>
      <input type="password"  placeholder='password' name='password'  onChange={handlechange}/>
      </div>
     
      <div className="submit">
      <input type="submit"  value="submit"/>
      </div>

      <span>already register go to |  <Link to="/login">login</Link></span>
    </form>
    </div>
  </div>

  </>

  )
}


export default Rejister