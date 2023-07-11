const express = require('express');
const router = express.Router();
const login = require("../middleware/loginAuthenticator")



router.get("/", function(req,res){
    res.status(200).send("Hello")
})


router.post("/", async (req,res,next)=>{
    if(!req || !req.headers.authorization){
        res.status(401).send(`<html>
        <body align=center>        
                    <img height=100% src='https://http.cat/401.jpg'/>
                    </body>
                </html>`)
    }
    else{
        let base64Encoding = req.headers.authorization.split(" ")[1];
        let credentials = Buffer.from(base64Encoding, "base64").toString().split(":");
        const email = credentials[0];
        const password = credentials[1];
        const isAuthenticated = await login.authenticateUser(email, password)
        if(isAuthenticated.length != 0){
            res.status(200).send({
                "message": "user authenticated"
            })
        }
        else{
            res.status(400).send({
                "message": "no match"
            })
        }
    }
})


module.exports = router;