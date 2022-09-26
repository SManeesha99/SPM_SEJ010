const router = require("express").Router();
let Admin = require("../models/AdminRegister");
const jwt =require('jsonwebtoken');


router.route("/add").post((req,res)=>{

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    const newAdmin = new Admin({
        firstname,
        lastname,
        email,
        password
    })

    newAdmin.save().then(()=>{
        res.json("new Admin Added")
    }).catch((err)=>{
        console.log(err)
    })
});

//login----------------------------------------

router.post("/adminlogin", async (req, res) => {
   
    const admin = await Admin.findOne({email:req.body.email, password:req.body.password});
    if (admin){

        
    const tokendetails= {email:req.body.email};
    const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});

    const data = {
        status:true,
        email:admin.email,
        id:admin._id,
        accesstoken: accessToken,

    };

        res.send(data)
    }else{
        res.send({
            status:false
        })
    }

  });

//---------------------------------------------


//get one-----------------------------


router.get("/get/:id",(req,res)=>{

    let adminId = req.params.id;
    
    Admin.findById(adminId,(err,Admin)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            Admin
        });
    });
});


module.exports = router;







// const router =require('express').Router()
// const adminCtrl = require('../controllers/AdminRegister.controller')

// router.post('/register',adminCtrl.register)
// router.post('/activation',adminCtrl.activateEmail)
// router.post('/login',adminCtrl.login)


// module.exports = router


// const express = require('express');
// const {Admin, validate} = require('../models/RegisterAdmin.models.js');
// const router = express.Router();
// const bcrypt = require("bcrypt");




// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const admin = await Admin.findOne({ email: req.body.email });
// 		if (admin)
// 			return res
// 				.status(409)
// 				.send({ message: "User with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		await new Admin({ ...req.body, password: hashPassword }).save();
// 		res.status(201).send({ message: "User created successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

// module.exports = router;

