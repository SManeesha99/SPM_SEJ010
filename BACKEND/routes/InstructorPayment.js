const router = require('express').Router();
let Payment_model = require("../models/InstructorPayment");
const jwt =require('jsonwebtoken');

router.route("/add").post((req,res)=>{

    const courseTitle = req.body.courseTitle;
    const coursePrice = req.body.coursePrice;
    const pname = req.body.pname; 
    const pcardNum = req.body.pcardNum;
    const pexpiryDate = req.body.pexpiryDate;
    const cvc = req.body.cvc;
    const InstructorId = req.body.InstructorId;
    const InstructorfName = req.body.InstructorfName;
    const InstructorlName = req.body.InstructorlName;
    const cdescription = req.body.cdescription;
    const uploadAt = req.body.uploadAt;
    const date = req.body.date;
    const paymentPrice = 2000.00;

    const newPayment_model = new Payment_model({

        courseTitle,
        coursePrice,
        pname,
        pcardNum,
        pexpiryDate,
        cvc,
        InstructorId,
        InstructorfName,
        InstructorlName,
        cdescription,
        uploadAt,
        date,
        paymentPrice

       
    })

    newPayment_model.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err)
    })

})

//get paymet courses---------------------

router.route("/viewCourse/:id").get( async (req,res)=>{

    const studentId = req.params.id;

    await Payment_model.find({StudentId: studentId})
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err)
    })
    
})

//delete paid courses--------------------------------

router.route("/delete/:id").delete(async (req, res) => {
    let PaymentId = req.params.id;

    await Payment_model.findByIdAndDelete(PaymentId)
    .then(() => {
        res.status(200).send({status: "Course Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Course", error: err.message});
    })
})



//get all-----------------------------------------------

router.route("/").get((req,res)=>{
    Payment_model.find().then((Payment)=>{
        res.json(Payment)
    }).catch((err)=>{
        console.log(err);
    })
})

//-----------------------------------------------------



module.exports = router;

