const express = require("express");
const router = express.Router();

//middleware

const auth = function(req,res,next) {
    console.log("this is auth middleware");
    req.user = {userId:1, role:"admin"};
    if(req.user){
        next();
    }
    else{
        res.json({
            success:false,
            message:"not a valid user",
        })
    }
}

const isStudent = function(req,res,next){
    console.log("this is isStudent middleware");
    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"only student can access this route",
        })
    }
}

const isAdmin = function(req,res,next){
    console.log("this is admin middleware");
    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"only admin can access this route",
        })
    }
}

//routes

router.get("/student", auth, isStudent, (req,res)=>{
    console.log("this is student route handler");
    res.send("student route");
})

router.get("/admin", auth, isAdmin, (req,res)=>{
    console.log("this is admin route handler");
    res.send("admin route");
})


module.exports = router;
