import express from "express"
import Bookcontroller from "../controller/bookController.js";
const router = express.Router();
import usermodel from "../models/usermodels.js"

import validateToken from "../middleware/validationtoken.js"

//use the obj inside the class
const bookcontroller = new Bookcontroller();

// the all routing i9n book/
router.get("/",(req,res)=>{
res.send("this is users home")
})


// router.get("/alluser",async(req,res)=>{
//     const data =await usermodel.find();
//     res.status(200).send(data)
// })

router.post("/add",bookcontroller.adduser)
    


router.get("/alluser", validateToken, bookcontroller.alluser);




router.post("/login",bookcontroller.login)

router.delete("/deluser",bookcontroller.deluser)


export default router;