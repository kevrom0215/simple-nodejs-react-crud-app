const express = require('express');
const router = express.Router();
const {authenticate} = require("../services/loginService")

router.post("/", async (req,res,next)=>{
    try{
        await authenticate(req,res)
    }
    catch(e){
        console.error(e)
    }
})


module.exports = router;