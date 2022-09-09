import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import About from './components/About';
import Home from './components/Home/Home';
import Layout from './components/Layout';
import Login from "./components/login/Login";
import Rejister from './components/register/Rejister';
import Dashbaord from './components/dashbaord';


//using context api
 
import{ AuthContext}  from "../src/context/authcontext/acontext"


const App = () => {

  const {user}=useContext(AuthContext);
  return (
    <React.Fragment>

    <Router>

       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route  index  element={ <Home /> } ></Route>
          <Route path="about" element={<About/>}></Route>
        </Route>
        <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  ></Route>
       <Route path="/register" element={<Rejister/>}></Route>

       {
        user &&(
          <>
           <Route path="/dashboard" element={<Dashbaord/>}></Route>
          </>
        )
       }
      
      </Routes>
   
      
    </Router>
    </React.Fragment>
     )
}

export default App;