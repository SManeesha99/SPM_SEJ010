const router = require("express").Router();
let OfferRequest = require("../models/OfferRequest.js");

router.route("/add").post((req,res)=>{

    const ctitle = req.body.ctitle;
    const cduration = req.body.cduration;
    const cprice = req.body.cprice;
    const cdescription = req.body.cdescription;
    const tittle = req.body.tittle;
    const description = req.body.description;
    const discount = req.body.discount;
    const closingDate = req.body.closingDate;
    const status = req.body.status;

    const newOffer = new OfferRequest({

        ctitle,
        cduration,
        cprice,
        cdescription,
        tittle,
        description,
        discount,
        closingDate,
        status: "unavailable"

        
    })

    newOffer.save().then(()=>{
        res.json("Request Send")
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;