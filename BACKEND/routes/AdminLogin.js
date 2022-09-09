const router = require('express').Router();
const {Admin} = require('../models/RegisterAdmin.models');
const joi = require('joi');
const bcrypt = require('bcrypt');

router.post("/",async(req,res)=>{
    try{

        const{err} = validate(req.body);
        if(err)
        return res.status(400).send({message: err.details[0].message});

        const admin = await Admin.findOne({email: req.body.email});

        if(!admin)
        return res.status(401).send({message: "Invalid Email or Password"});

        const validPassword = await bcrypt.compare(
          req.body.password, admin.password  
        );
        if(!validPassword)
        return res.status(401).send({message: "Invalid Email or Password"});

        const token = admin.generateAuthToken();
        res.status(200).send({data: token, message:"Logged in successfully"})

    }catch(err){
        res.status(500).send({message: "Internal server error"})

    }
})

const validate = (data)=>{
    const schema =joi.object({
        email: joi.string().email().require().label("Email"),
        password: joi.string().require().label("Password")
    });
    return schema.validate(data);
}

module.exports = router;