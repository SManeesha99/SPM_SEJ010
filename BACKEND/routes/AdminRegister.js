// const router =require('express').Router()
// const adminCtrl = require('../controllers/AdminRegister.controller')

// router.post('/register',adminCtrl.register)
// router.post('/activation',adminCtrl.activateEmail)
// router.post('/login',adminCtrl.login)


// module.exports = router


// const express = require('express');
// const {Admin, validate} = require('../models/RegisterAdmin.models.js');
// const router = express.Router();
// const bcrypt = require("bcrypt");




// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const admin = await Admin.findOne({ email: req.body.email });
// 		if (admin)
// 			return res
// 				.status(409)
// 				.send({ message: "User with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		await new Admin({ ...req.body, password: hashPassword }).save();
// 		res.status(201).send({ message: "User created successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });






// module.exports = router;