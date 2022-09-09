import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App'; 
import {Authprovider} from "./context/authcontext/acontext"
import {Darkprovider} from "./context/darkmodContext/darkCont"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Darkprovider> 
    <Authprovider>
    <App />
    </Authprovider>
    </Darkprovider>
  </React.StrictMode>
);


