const express = require('express');
const StudentsRegstration = require('../models/StudentsRegstration.models');

const router = express.Router();

router.route("/add").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNumber = req.body.mobileNumber;
    const Field = req.body.Field;
    const email = req.body.email;
    

    const newstudent = new Notice({
        firstName,
        lastName,
        mobileNumber,
        Field,
        email,
        passwor
        // userRoleStatus,
        // accountStatus,
        
    })

    newstudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{
    StudentsRegstration.find().then((Student)=>{
        res.json(Student)
    }).catch((err)=>{
        console.log(err);
    })
})


router.get("/studentregister/:id",(req,res)=>{

    let studentId = req.params.id;
    
    StudentsRegstration.findById(studentId,(err,student)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            student
        });
    });
});

// router.route("/update/:id").put(async(req,res)=>{
//     let noticeID = req.params.id;
//     const{select,date,time,subject,message}=req.body;

//     const updateNotice={
//         select,
//         date,
//         time,
//         subject,
//         message
        
//     }
//     const update = await Notice.findByIdAndUpdate(noticeID,updateNotice).then(()=>{
//         res.status(200).send({status: "Notice updated"})
//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status:"Error with updating data",error:err.message})
//     })
 
// })

// router.route("/delete/:id").delete(async(req,res)=>{
//     let noticeID = req.params.id;

//     await Notice.findByIdAndDelete(noticeID).then(()=>{
//         res.status(200).send({status:"notice deleted"});
//     }).catch((errr)=>{
//         console.log(errr.message);
//         res.status(500).send({status: "Error with delete company notice"})
//     })
    
// })

module.exports = router;