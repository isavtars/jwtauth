import React, { useContext, useState } from 'react'
import Api from "../../Api/Api.js"
import {DARkContext} from "../../context/darkmodContext/darkCont"
import "./Home.css"
import {BiNotepad} from "react-icons/bi"

const Home = () => {
  const [data, setdata] = useState([])
  const {moad} = useContext(DARkContext)

  const load= localStorage.getItem("moad")
  console.log(load)
// useEffect(() => {
  const getuser=async()=>{
    const response= await  Api.get("/users/alluser",  
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token:  JSON.parse(localStorage.getItem("user")).token
      
       }
    })
    console.log( JSON.parse(localStorage.getItem("user")).token)
    // console.log(response.data)
    setdata(response.data)
  }
//   getuser()
// }, [])

  


  return (
    <div>
      {/* <h1>{location}</h1> */}
       <h1>this is user list</h1>
       <button style={{padding:"10px",backgroundColor:"green",outline:"none",margin:"5px"}} onClick={getuser} >fetch users</button>
       {
        data.map((mapp,index)=>{
          return <div key={index}>  
              <table style={{border:"1px solid red",width:"100vw"}}>
                <thead>
               
                </thead>

                <tbody>
                 

                <tr >
                  <th>username</th>
                  <th>email</th>
                  <th>xx</th>
                  <th>xxx</th>
                </tr>

                <tr>
                  <td>{mapp.username} </td>
                  <td> {mapp.email} </td>
                  <td>xx</td>
                  <td>xxx</td>
                </tr>
                </tbody>

              </table>

          </div>
        })
       }


       <div className={moad?"darkmoad":"lightmoad"}>
        <div className="dacon">

        <BiNotepad size={40} color="blue"/>
          <h2>BiBEK CHHETRI</h2>
          <p>The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
       </div>
       </div>


    </div>
  )
}

export default Home