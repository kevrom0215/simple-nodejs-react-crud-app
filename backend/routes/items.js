const express = require('express');
const { listItems, addItem, editItem, deleteItem } = require('../services/itemsService');
const router = express.Router();
const app = express();

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
    if (Object.keys(req.body).length === 0) {
        // Request body is empty or not present
        res.status(400).send("Request body is required");
    } else {
        try{
            await addItem(req,res)
        }
        catch(e){
            console.log(e)
        
        }
    }
})

//update
router.put("/", async(req,res,next)=>{
    if (Object.keys(req.body).length === 0) {
        // Request body is empty or not present
        res.status(400).send("Request body is required");
    } 
    else{
        try{
            await editItem(req,res)
        }
        catch(e){
            console.log(e)
        }
    }
})

//delete
router.delete("/", async(req,res,next)=>{
    if (Object.keys(req.body).length === 0) {
        // Request body is empty or not present
        res.status(400).send("Request body is required");
    } 
    else{
        try{
            await deleteItem(req,res)
        }
        catch(e){
            console.log(e)
        }
    }
})


module.exports = router;