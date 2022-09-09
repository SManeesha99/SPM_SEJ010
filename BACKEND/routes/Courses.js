const router = require("express").Router();
// const multer = require("multer");
let Courses_models = require("../models/Courses_models");

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
    const ctitle = req.body.ctitle;
    const cduration = req.body.cduration;
    const cprice = req.body.cprice;
    const cdescription = req.body.cdescription;
    /*const cvideo = req.body.cvideo;*/

    const newCourses_models = new Courses_models({

        // iusername,
        ctitle,
        cduration,
        cprice,
        cdescription
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

//-------------------------------------

//update course details----------------

router.route("/update/:id").put(async (req, res) =>{
    let courseId = req.params.id;
    const {ctitle, cduration, cprice, cdescription} = req.body;

    const updateCourse ={
        ctitle,
        cduration,
        cprice,
        cdescription
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

module.exports = router;