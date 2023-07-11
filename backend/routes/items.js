const express = require('express');
const { listItems, addItem, editItem, deleteItem } = require('../services/itemsService');
const router = express.Router();
const app = express();

router.get("/", async (req,res, next)=>{
    await listItems(req,res)
})

//add
router.post("/", async (req,res,next)=>{
    await addItem(req,res)
})

//update
router.put("/", async(req,res,next)=>{
    await editItem(req,res)
})

//delete
router.delete("/", async(req,res,next)=>{
    await deleteItem(req,res)
})


module.exports = router;