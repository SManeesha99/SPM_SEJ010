const router = require("express").Router();
let Offers = require("../models/offers");

router.route("/add").post((req,res)=>{

    const tittle = req.body.tittle;
    const description = req.body.description;
    const discount = req.body.discount;
    const closingDate = req.body.closingDate;

    const newOffer = new Offers({

        tittle,
        description,
        discount,
        closingDate

        
    })

    newOffer.save().then(()=>{
        res.json("New offer Added")
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;