import usermodel from "../models/usermodels.js";
import bcrypt from "bcrypt";
import mongoose  from "mongoose";
import jwt from "jsonwebtoken";


// import validateToken from "../middleware/validationtoken.js"

import "dotenv/config";

 class Bookcontroller{
  //edits book
    async editbook (req,res){
       res.send("this is the edits book")
    }

    ///adduseradduser

    async adduser (req,res){

      try{
        const  bypass= await  bcrypt.hash(req.body.password,10);
        const email=req.body.email;
        const  username=req.body.username;
        console.log(bypass)
       const user= new  usermodel({email, username,password:bypass});

       const data= await user.save();
       res.json(data)
       console.log(data)

       }catch(err){
         res.send(err)
         console.log(err)
       }
      }


//alluser
 async   alluser (req,res){
  try{
   const data = await usermodel.find();
   if(data === null ) return res.json([])
   else return  res.json(data)
  
  }catch(err){
    res.json(err)
  }
 }


 //login the end points for the logins

 async login (req,res){
  const email=req.body.email;
  const password=req.body.password; 
const response = await usermodel.findOne({email:email});


if(response === null){
  res.json({sucess:false ,message:" no user exits"})
}else{



const depass= bcrypt.compareSync(password,response.password); //imp Sync 




//old
if(depass){

//jwt 

const token= jwt.sign({ id:response._id, username:response.username},process.env.JWT_SECRET,{
  expiresIn:"1d",
})

// res.json({token, username:response.username})
// console.log(response.username)

res.json({
  id:response._id,
  username:response.username,
  email:response.email,
  sucess:true,
  token
  
})

}else{
  res.json({sucess:false ,message:"login error"})
}

}
}


/////////////////////////////===deluser===/////////////////////////////////////////////////////


  async deluser (req,res){
    try{                                                                                                                                                                                                                             
       const data= await usermodel.deleteMany();
       console.log(data)
       res.json({sucess:true, messsage:"delete sucessfully"})
      
    }catch(err){
      res.json({sucess:false, messsage:"delete filed dfsd"})
    }
    

  }

 }


export default Bookcontroller;































































































