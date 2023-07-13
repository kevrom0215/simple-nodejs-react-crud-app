const express = require('express');
const { listItems, addItem, editItem, deleteItem } = require('../services/itemsService');
const router = express.Router();
const app = express();

//getAll
router.get("/", async (req,res, next)=>{
    try{
        await listItems(req,res)
    }
    catch(e){
        console.log(e)
    }
})

//add
router.post("/", async (req,res,next)=>{
    try{
       await addItem(req,res)
    }
    catch(e){
        console.log(e)
    }
    
})

//updateQuantity
router.put("/", async(req,res,next)=>{
    try{
       await editItem(req,res)
    }
    catch(e){
        console.log(e)
    }
})

//deleteItem
router.delete("/", async(req,res,next)=>{
    try{
        await deleteItem(req,res)
    }
    catch(e){
        console.log(e)
    }
})


module.exports = router;