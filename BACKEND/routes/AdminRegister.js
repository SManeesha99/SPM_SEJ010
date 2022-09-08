// const router =require('express').Router()
// const adminCtrl = require('../controllers/AdminRegister.controller')

// router.post('/register',adminCtrl.register)
// router.post('/activation',adminCtrl.activateEmail)
// router.post('/login',adminCtrl.login)


// module.exports = router


const express = require('express');
const Admin = require('../models/RegisterAdmin.models.js');
const router = express.Router();

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const  email = req.body.email;
    const password = req.body.password;
    
    const newAdmin = new Admin({
        name,
        email,
        password
        
    })

    newAdmin.save().then(()=>{
        res.json("Admin Profile Created")
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router