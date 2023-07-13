const db = require("../connection");
const { listItemsDAO, addItemDAO, editItemDAO, deleteItemDAO, checkItemDAO } = require("../models/itemsDAO");

const listItems = async function(req,res){
    return new Promise((resolve, reject) =>{
        sql = listItemsDAO
        db.all(sql, [], (err, rows) =>{
            if(err) return res.status(500).send('Internal Server Error');
            resolve(rows);
            res.status(200).send(rows)
        });
    });
};

const addItem = async function(req,res){
    //need to check for duplicates
    if (await checkItem(req,res)){
        res.status(400).send("Item already exists")
    }
    else{
        return new Promise((resolve,reject) => {
            sql = addItemDAO
            db.run(sql,[req.body.name, req.body.quantity], (err)=>{
                if (err) return res.status(500).send('Internal Server Error');
                res.status(200).send(`Added item ${req.body.name} - ${req.body.quantity}`)
            })
        })
    }
    
}

const editItem = async function(req, res) {
    //check if existing
    if (await checkItem(req,res)){
        return new Promise((resolve, reject) => {
            const sql = editItemDAO;
            console.log(sql)
            db.run(sql, [req.body.quantity, req.body.name], (err) => {
                if (err) {
                    console.error(err.message);
                    return res.status(500).send('Internal Server Error');
                }
                res.status(200).send(`Edited item ${req.body.name}`);
            });
        });
    }
    else{
        console.log("Something went wrong")
        res.status(500).send('Something went wrong');
    }
    
    
};

const checkItem = async function(req,res){
    console.log("checking item")
    return new Promise((resolve, reject) => {
        const sql = checkItemDAO;
        db.get(sql, [req.body.name], (err, row) =>{
            if(err){
                console.error(err.message);
                reject();
            }
            else{
                const exists = row ? true : false;
                resolve(exists);
            }
        }) 
    })
}

const deleteItem = async function(req, res){
    console.log("Delete Triggered")
    return new Promise((resolve, reject) =>{
        sql = deleteItemDAO
        db.run(sql, [req.body.name], (err)=>{
            if (err) {
                console.error(err.message);
                return res.status(500).send('Internal Server Error');
            }
            console.log(`Deleted item ${req.body.name}`)
            res.status(200).send(`Deleted item ${req.body.name}`)
        })
    })
}

module.exports = {
    listItems,
    addItem,
    editItem,
    deleteItem
}