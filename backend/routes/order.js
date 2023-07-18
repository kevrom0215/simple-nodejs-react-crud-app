const express = require('express');
const { getButtonTimer, getAllButtonTimer, updateButtonTimer } = require('../services/orderService')
const router = express.Router();


router.get("/", async (req,res,next)=>{
    try{
        await getAllButtonTimer(req,res)
    }
    catch(e){
        console.log(e)
    }
})

router.post("/get", async (req,res,next)=>{
    try{
        await getButtonTimer(req,res)
    }
    catch(e){
        console.log(e)
        console.log("error here")
    }
})

router.put("/", async (req,res,next)=>{
    try{
        await updateButtonTimer(req,res)
    }
    catch(e){
        console.log(e)
    }
})


module.exports = router;