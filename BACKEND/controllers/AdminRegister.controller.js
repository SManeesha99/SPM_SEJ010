





// const Admin = require('../models/RegisterAdmin.models')
// const bcrypt =require('bcrypt')
// const jwt = require('jsonwebtoken')
// const sendMail = require('./Mail/sendMail');

// const {CLIENT_URL} = process.env

// const adminCtrl = {
//     register : async(req, res) => {
//         try{
            
//              const {name, email, password} = req.body

//             if(!name || !email || !password)
//             return res.status(400).json({msg: "please fill in all fields"});

//             if(!validateEmail(email))
//             return res.status(400).json({msg: "Invalid email"})

//             const admin = await Admin.findOne({email})
//             if(admin) return res.status(400).json({msg: "This email already exixts."})

//             if(password.length < 5)
//             return res.status(400).json({msg: "Password must be at least 5 characters."})

//             const passwordHash = await bcrypt.hash(password, 10)
            
//             const newAdmin = {
//                 name, email, password: passwordHash
//             };

            
//             const activation_token = createActivationToken(newAdmin)

//             const url = `${CLIENT_URL}/admin/activate/${activation_token}`;
//             sendMail(email, url, "Verify your email address", name);



//             res.json({msg: "Register Success! Please active your email to start."});
//         }catch(err){
//             return res.status(500).json({msg: err.mssage});
//         }
//     },

//     activateEmail: async (req, res) => {
//     try{
//         const {activation_token} = req.body
//         const admin = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

//         const {
//             name,
//             email,
//             password
//           } = newAdmin;

//           const check = await Admin.findOne({ email });
//       if (check) {
//         return res.status(200).json({msg:"This email already exists."})
//       }

//       const newAdmin = new Admin({
//         name, email, password
//     })

//     await newAdmin.save()

//             res.json({msg: "Account has been activated!"})

//     }catch(err){
//         return res.status(500).json({msg: err.mssage});
//     }
//    },

//    login: async (req, res) => {
//     try {
//         const {email, password} = req.body
//         const admin = await Admin.findOne({email})
//         if(!admin) return res.status(400).json({msg: "This email does not exist."})

//         const isMatch = await bcrypt.compare(password, admin.password)
//         if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

//         const refresh_token = createRefreshToken({id: admin._id})
//         res.cookie('refreshtoken', refresh_token, {
//             httpOnly: true,
//             path: '/admin/refresh_token',
//             maxAge: 7*24*60*60*1000 // 7 days
//         })

//         res.json({msg: "Login success!"})
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// },
// }

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

// const createActivationToken = (payload) => {
//     return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '10m'})
// }

// const createAccessToken = (payload) => {
//     return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
// }

// const createRefreshToken = (payload) => {
//     return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
// }


// module.exports = adminCtrl