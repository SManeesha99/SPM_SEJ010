const router = require("express").Router();
const jwt =require('jsonwebtoken');

router.route("/").post((req,res)=>{

    const email = req.body.email;
    const password = req.body.password;
    const status = true;

    const tokendetails= {email:email};
    const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});

    const data = {
        
        email:email,
        accesstoken: accessToken,
        sts:status

    };

     res.json(data)
    




})

module.exports = router;