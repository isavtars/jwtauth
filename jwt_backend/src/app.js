import express from "express"
const app= express();
import  connections from "../src/models/dncon.js";
import boookrouter from "./router/bookroute.js";
import   "dotenv/config"
import  cors from "cors"   



import veryfiyToken from "./middleware/validationtoken.js"


//middle ware setup 
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));




const port = process.env.PORT ||8000;




app.get("/", (req,res)=>{
  res.send("this is supper home");
})

//this 8000/book  =>route
app.use("/users",boookrouter)






app.listen(port,()=>{
    console.log(`server runn through ${port}`);
    //this is db coon fun
     connections();
})