// import express, { Router } from 'express';

// import { addInsructors, getAllTest } from "../controllers/test.controller.js";

// const router = express.Router();

// router.post('/add', addInsructors);
// router.get('/getAllTest', getAllTest);

// export default router;



const router = require('express').Router();
let Test = require('../models/test');
const jwt =require('jsonwebtoken');


// register User----------------------------

router.route("/add").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNumber = req.body.mobileNumber;
    const field = req.body.field;
    const email = req.body.email;
    const password = req.body.password;
    

    const newtest = new Test({
        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password
        // userRoleStatus,
        // accountStatus,
        
    })

    newtest.save().then(()=>{
        res.json("New User Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//---------------------------------------------------


router.route("/").get((req,res)=>{
    Test.find().then((Test)=>{
        res.json(Test)
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/test/:id",(req,res)=>{

    let testId = req.params.id;
    
    Test.findById(testId,(err,test)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            test
        });
    });
});


// router.get("/test/instructor",(req,res)=>{
//     let testId = "instructor";
    
//     Test.find(testId,(err,test)=>{
//         if(err){
//             return res.status(400).json({success:false, err});
//         }

//         return res.status(200).json({
//             success:true,
//             test
//         });
//     });
// });

// router.put("/approve-Test/:id", TestRoutes.AproveeTest);

module.exports = router;