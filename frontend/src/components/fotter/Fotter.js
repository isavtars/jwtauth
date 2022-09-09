import { useState } from 'react';


import Image from "../../image/bibek.jpg"
import "./fottercss.css"

const Footer = () => {

    const d = new Date();
    const text = d.getFullYear();

    
    return (
        <div className="fcontainer">
         {/* left */}
         <div className="fitem">
          
<img src={Image} alt=""className="images"/>
          
         
         
</div>

              

              {/* right */}
         <div className="fitem">

         <div className="cards">

         <div className="card">
         <h1 className="texth1"> ItGARAGE</h1>
         <p className="texth2" >About Us</p>
         <p className="texth2" >Connects with us</p>
         <p className="texth2" >service</p>
         <p className="texth2" >Blog</p>      
         </div>




         <div className="card">
         <h1 className="texth1"> GET HELP</h1>
         <p className="texth2" >How to contacts us</p>
         <p className="texth2" >FAQs</p>
         <p className="texth2" >Contact Us</p>
         <p className="texth2" >Help desk </p>
         </div>


         <div className="card">
         <h1 className="texth1"> offices</h1>
         <p className="texth2" >Pokhara: 9802859990</p>
         <p className="texth2" > butwal:9843111113</p>
         <p className="texth2" > kathmandu:9862240866</p>
         <p className="texth2" > chitwan:9843111113</p>
         

         </div>


        
         <div className="card">
         <div className="download">
         <h1 className="texth1"> Download App</h1>
       
         <p   className="texth2">playstore</p>
         <p  className="texth2">Appsore</p>
         <p   className="texth2">connected with us</p>
         <p className="texth2">Social medoia</p>
         </div>

         </div>
         <div>
         </div>     
         </div>
         <div className="under">
         <hr  className="hr" />
         <ul className="ulitem">
             <li className="list">Terms of Usage | Privacy Policy</li>
             <li className="list">© {text} ItGARAGE Pvt. Ltd. All Rights Reserved</li>
         </ul>


         <ul className="ulitem2">

             <li className="list1"> ||power by ||| ITGARAGE </li>
         </ul>
        
           </div>
        </div>
        
        </div>
    );
}

export default Footer;