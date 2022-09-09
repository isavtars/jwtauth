import mongoose from "mongoose"
import dotenv from 'dotenv/config'

 const connections= ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("dbb coonnections sucessfull")
    }).catch((err)=>{
    console.log(err)
    })
}


export default  connections;