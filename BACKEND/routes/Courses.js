const router = require("express").Router();
// const multer = require("multer");
let Courses_models = require("../models/Courses_models");
// let Offers = require("../models/offers");

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null,"./FRONTEND/public/uploads/");
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname);
//     }
// })

// const upload = multer({storage: storage});

//Course Insert----------------

router.route("/add").post((req,res)=>{

    // const iusername = req.body.iusername;
    const InstructorId = req.body.InstructorId;
    const InstructorfName = req.body.InstructorfName;
    const InstructorlName = req.body.InstructorlName;
    const ctitle = req.body.ctitle;
    const cduration = req.body.cduration;
    const cprice = req.body.cprice;
    const cdescription = req.body.cdescription;
    
    const tittle = req.body.tittle;
    const description = req.body.description;
    const discount = req.body.discount;
    const closingDate = req.body.closingDate;
    /*const cvideo = req.body.cvideo;*/

    const newCourses_models = new Courses_models({

        // iusername,
        InstructorId,
        InstructorfName,
        InstructorlName,
        ctitle,
        cduration,
        cprice,
        cdescription,
        uploadAt:Date.now(),
        isTopCourseRequest :false,
        isTopCourseRequestApprove :false,
        isCart:false,
        tittle,
        description,
        discount,
        closingDate

        // cvideo
    })

    newCourses_models.save().then(()=>{
        res.json("Courses Added")
    }).catch((err)=>{
        console.log(err)
    })

})

//------------------------------------

//get all courses---------------------

router.route("/").get((req,res)=>{

    Courses_models.find().then((Courses)=>{
        res.json(Courses)
    }).catch((err)=>{
        console.log(err)
    })

})

//get owncourse--------------------------

router.route("/owncourse/:id").get((req,res)=>{

    const id = req.params.id;

    Courses_models.find({InstructorId:id}).then((Courses)=>{
        res.json(Courses)
    }).catch((err)=>{
        console.log(err)
    })

})

//-------------------------------------

//update course details----------------

router.route("/update/:id").put(async (req, res) =>{
    let courseId = req.params.id;
    const {ctitle, cduration, cprice, cdescription, tittle, description,discount, closingDate} = req.body;

    const updateCourse ={
        ctitle,
        cduration,
        cprice,
        cdescription,
        tittle,
        description,
        discount,
        closingDate
    }

    const update = await Courses_models.findByIdAndUpdate(courseId, updateCourse)
    .then(() => {
        res.status(200).send({status: "course updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: " Error with updating data", error: err.message});
    })
  
})

//----------------------------------------

//delete course---------------------------

router.route("/delete/:id").delete(async (req, res) => {
    let courseId = req.params.id;

    await Courses_models.findByIdAndDelete(courseId)
    .then(() => {
        res.status(200).send({status: "Course Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error withe delete course", error: err.message});
    })
})

//------------------------------------

//get one course----------------------

router.get("/Courses/:id",(req,res)=>{

    let courseId = req.params.id;
    
    Courses_models.findById(courseId,(err,courses)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            courses
        });
    });
});

//--------------------------------------



router.route("/updateTopCourse/:id").put(async(req,res)=>{
    let courseId = req.params.id;
     try {
        let courseId = req.params.id;
        let TopcourseRequest = await Courses_models.findOneAndUpdate({_id: courseId }, {
            isTopCourseRequest:true
        },
            {
                upsert: true,
            }
        )
        return res.status(200).json({
            success: true,
            message: "Top Course Request Success",
            result: TopcourseRequest
        });

        
     } catch (error) {
         return res.json({
              success:false,
              message:"Error"
         })
     }
      
});

router.get('/topCourseRequest',(req,res)=>{
    Courses_models.find({isTopCourseRequest:true} ).then((TopcourseRequest)=>{
        res.json(TopcourseRequest)

    }).catch((err)=>{
        console.log(err);
    })
});


router.route("/updateTopCourseApprove/:id").put(async(req,res)=>{
    let courseId = req.params.id;
     try {
        let courseId = req.params.id;
        let TopCourseApprove = await Courses_models.findOneAndUpdate({_id: courseId }, {
            isTopCourseRequestApprove:true
        },
            {
                upsert: true,
            }
        )
        return res.status(200).json({
            success: true,
            message: "Top Course Request Approve Success",
            result: TopCourseApprove
        });

        
     } catch (error) {
         return res.json({
              success:false,
              message:"Error"
         })
     }
      
});


router.get('/TopCourse',(req,res)=>{
    Courses_models.find({isTopCourseRequestApprove:true} ).then((Topcourses)=>{
        res.json(Topcourses)

    }).catch((err)=>{
        console.log(err);
    })
});


router.route("/updateTopCourseReject/:id").put(async(req,res)=>{
    let courseId = req.params.id;
     try {
        let courseId = req.params.id;
        let TopCourseReject = await Courses_models.findOneAndUpdate({_id: courseId }, {
            isTopCourseRequest:false
        },
            {
                upsert: true,
            }
        )
        return res.status(200).json({
            success: true,
            message: "Top Course Request Rejected",
            result: TopCourseReject
        });

        
     } catch (error) {
         return res.json({
              success:false,
              message:"Error"
         })
     }
      
});


router.route("/cart/:id").put(async(req,res)=>{
    let courseId = req.params.id;
     try {
        let courseId = req.params.id;
        let CourseCart = await Courses_models.findOneAndUpdate({_id: courseId }, {
            isCart:true
        },
            {
                upsert: true,
            }
        )
        return res.status(200).json({
            success: true,
            message: "Course Carted",
            result: CourseCart
        });

        
     } catch (error) {
         return res.json({
              success:false,
              message:"Error"
         })
     }
      
});


router.get('/cart',(req,res)=>{
    Courses_models.find({isCart:true}).then((TopcourseRequest)=>{
        res.json(TopcourseRequest)

    }).catch((err)=>{
        console.log(err);
    })
});

// router.get('/OwnCourses',(req,res)=>{
//     UserRegstration.find({InstructorId:localStorage.getItem("id")}).then((Courses)=>{
//         res.json(Courses)

//     }).catch((err)=>{
//         console.log(err);
//     })
// });








module.exports = router;