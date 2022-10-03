const router = require('express').Router();
let Payment_model = require("../models/Payment_model");
const jwt =require('jsonwebtoken');

router.route("/add").post((req,res)=>{

    // const iusername = req.body.iusername;
    const courseId = req.body.courseId;
    const courseTitle = req.body.courseTitle;
    const coursePrice = req.body.coursePrice;
    const pname = req.body.pname; 
    const pcardNum = req.body.pcardNum;
    const pexpiryDate = req.body.pexpiryDate;
    const cvc = req.body.cvc;

    const newPayment_model = new Payment_model({

        courseId,
        courseTitle,
        coursePrice,
        pname,
        pcardNum,
        pexpiryDate,
        cvc
       
    })

    newPayment_model.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err)
    })

})


module.exports = router;

