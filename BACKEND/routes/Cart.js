const router = require("express").Router();
// const multer = require("multer");
let Cart_models = require("../models/CartModel");


router.route("/addCart").post(async (req,res)=>{
    // console.log(req.body)


    // const iusername = req.body.iusername;
    const InstructorId = req.body.InstructorId;
    const InstructorfName = req.body.InstructorfName;
    const InstructorlName = req.body.InstructorlName;

    const studentId = req.body.studentId;
    const orderId = req.body.OrderId;
    const isPayed = req.body.isPayed;
    const OrderedDate = req.body.OrderedDate;
    const courseId = req.body.courseId;

    const uploadAt = req.body.uploadAt;
    const ctitle = req.body.ctitle;
    const cduration = req.body.cduration;
    const cprice = req.body.cprice;
    const cdescription = req.body.cdescription;
    
    const tittle = req.body.tittle;
    const description = req.body.description;
    const discount = req.body.discount;
    const closingDate = req.body.closingDate;
    /*const cvideo = req.body.cvideo;*/

    await Cart_models.find({StudentId: studentId, courseId: courseId})
    .then((result)=>{
        console.log(result);
        if (result.length <= 0) {
            const newCart_models = new Cart_models({

                // iusername,
                InstructorId,
                InstructorfName,
                InstructorlName,

                StudentId: studentId,
                OrderId: orderId,
                OrderedDate: OrderedDate,
                isPayed: isPayed,
                courseId,


                ctitle,
                cduration,
                cprice,
                cdescription,
                uploadAt,
                isTopCourseRequest :false,
                isTopCourseRequestApprove :false,
                tittle,
                description,
                discount,
                closingDate

                // cvideo
            })

            newCart_models.save().then(()=>{
                res.json("Course successfully added to the cart")
            }).catch((err)=>{
                console.log(err)
            })
        } else {
            res.json("Course already is in the users cart")
        }
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/madePayment/:id").post( async (req,res)=>{

    const orderId = req.params.id;

    await newCart_models.updateMany(
        { OrderId: id }, { $set: { isPayed: true } }
    )
    .then(()=>{
        res.json("Made Payment")
    }).catch((err)=>{
        console.log(err)
    })
    
})

router.route("/viewCart/:id").get( async (req,res)=>{

    const studentId = req.params.id;

    await Cart_models.find({StudentId: studentId})
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err)
    })
    
})

router.route("/checkCourse/:studentId/:courseId").get( async (req,res)=>{

    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

    await Cart_models.find({StudentId: studentId, courseId: courseId})
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err)
    })
    
})

module.exports = router;