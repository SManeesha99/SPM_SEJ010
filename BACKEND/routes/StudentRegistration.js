const express = require('express');
const StudentsRegstration = require('../models/StudentsRegstration.models');

const router = express.Router();

// register student----------------------------

router.route("/add").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNumber = req.body.mobileNumber;
    const field = req.body.field;
    const email = req.body.email;
    const password = req.body.password;
    

    const newstudent = new StudentsRegstration({
        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password
        // userRoleStatus,
        // accountStatus,
        
    })

    newstudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//---------------------------------------------------

//get all-----------------------------------------------

router.route("/").get((req,res)=>{
    StudentsRegstration.find().then((Student)=>{
        res.json(Student)
    }).catch((err)=>{
        console.log(err);
    })
})

//----------------------------------------

//delete---------------------------------

router.route("/delete/:id").delete(async (req, res) => {
    let studentId = req.params.id;

    await StudentsRegstration.findByIdAndDelete(studentId)
    .then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error withe delete User", error: err.message});
    })
})

//--------------------------------------

//get one-----------------------------


router.get("/get/:id",(req,res)=>{

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

//--------------------------------------

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