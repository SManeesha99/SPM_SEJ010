const router = require('express').Router();
let UserRegstration = require('../models/UserRegstration.models');
const jwt =require('jsonwebtoken');


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

//update--------------------------------

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{firstName,lastName,mobileNumber,field,email,password}=req.body;

    const updateUser={
        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password
        
    }
    const update = await UserRegstration.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "User Details Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
 
})

//login----------------------------------------

router.post("/login", async (req, res) => {
   
    const user = await UserRegstration.findOne({email:req.body.email, password:req.body.password});
    if (user){

        
    const tokendetails= {email:req.body.email};
    const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});

    const data = {
        status:true,
        email:user.email,
        id:user._id,
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