const router = require('express').Router();
let UserRegstration = require('../models/UserRegstration.models');


// register User----------------------------

router.route("/add").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNumber = req.body.mobileNumber;
    const field = req.body.field;
    const email = req.body.email;
    const password = req.body.password;
    

    const newuser = new UserRegstration({
        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password
        // userRoleStatus,
        // accountStatus,
        
    })

    newuser.save().then(()=>{
        res.json("New User Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//---------------------------------------------------

//get all-----------------------------------------------

router.route("/").get((req,res)=>{
    UserRegstration.find().then((User)=>{
        res.json(User)
    }).catch((err)=>{
        console.log(err);
    })
})

//----------------------------------------

//delete---------------------------------

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await UserRegstration.findByIdAndDelete(userId)
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

    let userId = req.params.id;
    
    UserRegstration.findById(userId,(err,User)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            User
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