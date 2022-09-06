// const registationStudent = require("../models/StudentsRegstration.models");
// const messages = require("../messages/messages");
// const jwt = require("jsonwebtoken");

// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;
// const fetch = require("node-fetch");
// const { ValidEmail } = require("../messages/messages");

// const { CLIENT_URL } = process.env;


// const STUDENTControllers = {
//     registationStudent: async function (req, res) {
//         console.log("1");
//         try{
//             const{
//                 firstName,
//                 lastName,
//                 mobileNumber,
//                 Field,
//                 email,
//                 password,
//                 userRoleStatus,
//                 accountStatus,
//             }=req.body;

//             if(
//                 !firstName||
//                 !lastName||
//                 !mobileNumber||
//                 !Field||
//                 !email||
//                 !password||
//                 !userRoleStatus||
//                 !accountStatus )
//              {
//                 console.log("2")
//                 return res.status(200).json({
//                     code: messages.BadCode,
//                     success: messages.NotSuccess,
//                     status: messages.BadStatus,
//                     message: messages.ContentEmpty,

//                 });
//             }
//             console.log("validemail");
//             if(!ValidateEmail(email)){
//                 return res.status(200).json({
//                     code: messages.BadCode,
//                     success: messages.NotSuccess,
//                     status: messages.BadStatus,
//                     message: messages.ValidEmail,
//                   });
//             }
//             console.log("email");
//             const StudentMail = await registationStudent.findOne({email});
//             console.log("email2");
//             if(StudentMail){
//                 return res.status(200).json({
//                     code: messages.BadCode,
//                     success: messages.NotSuccess,
//                     status: messages.BadStatus,
//                     message: messages.AlreadyExistEmail,
//                 });
//             }
            
//             const studentMobile = await registationStudent.findOne({mobileNumber});
//             if(studentMobile){
//                 return res.status(200).json({
//                     code: messages.BadCode,
//                     success: messages.NotSuccess,
//                     status: messages.BadStatus,
//                     message: "Mobile Number Alrady exits",
//                 });
//             }
//             console.log("3");

//             const newStudent = {
//                 firstName,
//                 lastName,
//                 mobileNumber,
//                 Field,
//                 email,
//                 password,
//                 userRoleStatus,
//                 accountStatus,
//             };

//             const activation_token = createActivationToken(newStudent);

//             const url = `${CLIENT_URL}/stu`
//         }catch(err){

//         }
//     }
// }
