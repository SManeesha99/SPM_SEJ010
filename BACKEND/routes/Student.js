// const router = require("express").Router();

// let StudentProfile = require("../models/StudentProfile.model");

// router.route("/add").post((req,res)=>{

//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;
//     const password = req.body.password;

//     const newStudent = new StudentProfile({
//         firstName,
//         lastName,
//         email,
//         password
//     })

//     newStudent.save().then(()=>{
//         res.json("Student Added")
//     }).catch((err)=>{
//         console.log(err)
//     })

// })

// router.route("/").get((req,res)=>{

//     StudentProfile.find().then((Student)=>{
//         res.json(Student)
//     }).catch((err)=>{
//         console.log(err)
//     })

// })


// router.route("/update/:id").put(async (req, res) =>{
//     let studentId = req.params.id;
//     const {firstName, lastName, email, password} = req.body;

//     const updateStudentDetails ={
//         firstName,
//         lastName,
//         email,
//         password
//     }

//     const update = await StudentProfile.findByIdAndUpdate(studentId, updateStudentDetails)
//     .then(() => {
//         res.status(200).send({status: "Student Details updated"})
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({status: " Error with updating data", error: err.message});
//     })
  
// })


// router.get("/get/:id",(req,res)=>{

//     let studentId = req.params.id;
    
//     StudentProfile.findById(studentId,(err,courses)=>{
//         if(err){
//             return res.status(400).json({success:false, err});
//         }

//         return res.status(200).json({
//             success:true,
//             courses
//         });
//     });
// });


// router.route("/delete/:id").delete(async (req, res) => {
//     let studentId = req.params.id;

//     await StudentProfile.findByIdAndDelete(studentId)
//     .then(() => {
//         res.status(200).send({status: "Student Deleted"});
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "Error withe delete student", error: err.message});
//     })
// })



// module.exports = router;