const Admin = require('../models/RegisterAdmin.models')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')

const adminCtrl = {
    register : async(req, res) => {
        try{
            const {firstName, lastName, mobileNumber, email, password} = req.body

            if(!firstName || !lastName || !mobileNumber || !email || !password)
            return res.status(400).json({msg: "please fill in all fields"})

            if(!validateEmail(email))
            return res.status(400).json({msg: "Invalid email"})

            const admin = await Admin.findOne({email})
            if(admin) return res.status(400).json({msg: "This email already exixts."})

            if(password.length < 5)
            return res.status(400).json({msg: "Password must be at least 5 characters."})



            res.json({msg: "Register Test"})
        }catch(err){
            return res.status(500).json({msg: err.mssage})
        }
    }
}

function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

module.exports = adminCtrl