import mongoose  from "mongoose";
import validator from 'validator';


const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },

   email:{
    type:String,
    required:true,
    index: { unique: true },
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error ("invalid email")
      }
    }
   },
   
   password:{
    type:String,
    required:true,
    // validate(value){
    //     console.log("value : " + value);
    //     const hashedPassword = bcrypt.hashSync(value, 10);

    //     console.log("from end value : " + value);
    //     this.value("password", hashedPassword);
    // }
   }


})

//middle ware after the save in db but config in schema


const usermodel= new mongoose.model("users",userschema);

export default usermodel;