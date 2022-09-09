import React, { useContext, useState } from 'react'
import "./Nqavbar.css"
import { AppBar,Container,Toolbar, Typography,Box ,Menu,Avatar,Button,Tooltip,IconButton, styled, ListItem, ListItemButton, ListItemText, } from '@mui/material'
import { Link } from 'react-router-dom'
// import {useAuthGlobal} from "../../context/authcontext/acontext"

import {MdDarkMode,MdOutlineNightsStay } from "react-icons/md";


//state mangement
import {DARkContext} from "../../context/darkmodContext/darkCont"
//this is lama tecnqe
import {AuthContext} from "../../context/authcontext/acontext"
import {logout} from "../../context/authcontext/authActions"
import {lightmod,darkmod} from "../../context/darkmodContext/darkACTion"

const BlueBox=styled(Box)(({theme})=>({

backgroundColor:"red",
height:"300px",
width:"300px",
//for my laptop screen


[theme.breakpoints.up('xs')]:{
  backgroundColor:"orange",
},

[theme.breakpoints.up('lg')]:{
  backgroundColor:"green",
},



}))


const Navbar = () => {
  // const name=useAuthGlobal();
 

  const {user, dispatch} = useContext(AuthContext);

  const {moad,eispatch} = useContext(DARkContext);
//  const username= user.username;
// console.log(user)


const [click, setclick] = useState(false)

const [click1, setclick1] = useState(true)


  return (
    
<>
<AppBar position="sticky" sx={{top:0,height:60}}>

   <div className="con">
    <div className="logo">jwt</div>
    <div className="nav">
      <ul className='ul'>


      <li><Link to="/">home</Link></li>
      <li><Link to="/login">login</Link></li>

      <li><Link to="/register">register</Link></li>
   
  
      </ul>
      </div>
   {/* tooglrbtn */}
      {/* <div className="darkmoadto" >
        <div className="light" onClick={()=> setclick1(!click1)}> <MdOutlineNightsStay size={25}  color="red" /></div>
        <div className="dark" onClick={()=> setclick1(!click1)}> <MdDarkMode size={25}  color="red"/></div>
       <div className={click1?"empty":"empty1"} ></div>
      </div> */}


      <div className="darkmoadto" >
        <div className="light"  onClick={()=> eispatch(lightmod())}> <MdOutlineNightsStay size={25}  color="red" /></div>
        <div className="dark" onClick={()=> eispatch(darkmod())}> <MdDarkMode size={25}  color="red"/></div>
       <div className={!moad?"empty":"empty1"} ></div>
      </div>




      <div className="profil" onClick={()=>setclick(!click)}>
      {user?<h4>{user.username}</h4>:""}

        <div className={click? 'showprofile':'noprofile'}>
        <button className='logbutton'>
        <span onClick={() => dispatch(logout())}>Logout</span>
        
          </button> 
        </div>
            
      </div>
   </div>
    
    </AppBar>

    
    </>
  )
}

export default Navbar;