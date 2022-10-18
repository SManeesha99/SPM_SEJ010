const router = require("express").Router();
// const multer = require("multer");
let Review_models = require("../models/ReviewModel");


// -------------------review make review--------------------

    
router.route("/makeReview").post((req,res)=>{

    // const iusername = req.body.iusername;
    const StudentId = req.body.StudentId;
    const SludentfName = req.body.StudentfName;
    const StudentlName = req.body.StudentlName;
    const InstructorId = req.body.InstructorId;
    const InstructorfName = req.body.InstructorfName;
    const InstructorlName = req.body.InstructorlName;
    const courseId = req.body.CourseId;
    const ctitle = req.body.ctitle;
    const review = req.body.review;
    /*const cvideo = req.body.cvideo;*/

    const newCoursesmakeReview_models = new Review_models({

        // iusername,
        StudentId,
        SludentfName,
        StudentlName,
        InstructorId,
        InstructorfName,
        InstructorlName,
        courseId,
        ctitle,
        reviewAt:Date.now(),
        review

        // cvideo
    })

    newCoursesmakeReview_models.save().then(()=>{
        res.json("Review Added")
    }).catch((err)=>{
        console.log(err)
    })

})


// -------------------course make review--------------------