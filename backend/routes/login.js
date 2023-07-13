const express = require('express');
const router = express.Router();
const {authenticate} = require("../services/loginService")



router.get("/", function(req,res){
    res.status(200).send("Hello")
})


router.post("/", async (req,res,next)=>{
    try{
        await authenticate(req,res)
    }
    catch(e){
        console.error(e)
    }
})


module.exports = router;