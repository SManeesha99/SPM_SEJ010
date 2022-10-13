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
    const status = req.body.status;
    

    const newtest = new Test({
        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password,
        status:"pending"
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


// router.route("/").get((req,res)=>{
//     Test.find().then((Test)=>{
//         res.json(Test)
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

router.get('/',(req,res)=>{
    Test.find({status:'pending'}).then((Test)=>{
        res.json(Test)

    }).catch((err)=>{
        console.log(err);
    })
});

// router.put('/updateStatus/:id',(req,res)=>{
    
//     Test.findOneAndUpdate({id:req.body.id, status: "active"}).then((Test)=>{
//         console.log(Test)

//     }).catch((err)=>{
//         console.log(err);
//     })
// })

// router.route("/updateStatus/:id").put(
//     async (req, res) => {
//         try {
//             console.log(req.body.id);
//             const test = await Test.findOneAndUpdate(
//                 {
//                     _id: req.body.id
//                 },
//                 {
//                     status: "Active"
//                 },
//                 {
//                     new:true
//                 }
//                 );
    
//             if (test) {
//                 res.send({
//                     details: test 
//                 });
//             }
    
//         } catch (error) {
//             console.log(error.messaga)
//         }
//     }
// )

router.route("/updateStatus/:id").put(async(req,res)=>{
    let testId = req.params.id;
    const{status}=req.body;

    const updatestatus={
        status: 'active'
    }
    const update = await Test.findByIdAndUpdate(testId,updatestatus).then(()=>{
        res.json("active")
    }).catch((err)=>{
        console.log(err);
        res.json("pending")
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