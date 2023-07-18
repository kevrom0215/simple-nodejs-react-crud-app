const db = require("../connection");
const {getButtonTimerDAO,getAllButtonTimerDAO,updateButtonTimerDAO} = require("../models/orderDAO")

const getButtonTimer = async function(req,res){
    return new Promise((resolve, reject)=>{
        sql = getButtonTimerDAO
        db.get(sql, [req.body.item], (err,rows) =>{
            if(err){
                console.log(err)
                return res.status(500).send("Invalid Request")
            }
            else{
                resolve(rows)
                res.status(200).send(rows)
            }
        })
    })
}

const getAllButtonTimer = async function(req,res){
    return new Promise((resolve, reject) =>{
        sql = getAllButtonTimerDAO
        db.all(sql, [], (err, rows) =>{
            if(err) return res.status(500).send('Internal Server Error');
            resolve(rows);
            res.status(200).send(rows)
        });
    });
}

const updateButtonTimer = async function(req,res){
    const buttonName = "kenneth"
    const currentDate = new Date();
    return new Promise((resolve, reject) =>{
        sql = updateButtonTimerDAO
        db.run(sql, [currentDate,buttonName], (err,rows) =>{
            if(err) return res.status(500).send("Internal Server Error");
            res.status(200).send(`Edited item ${buttonName}`)
        })
    })
}

module.exports = {
    getButtonTimer,
    getAllButtonTimer,
    updateButtonTimer
}