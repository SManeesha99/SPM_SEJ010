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


router.get('/',(req,res)=>{
    OfferRequest.find({status:'unavailable'}).then((OfferRequest)=>{
        res.json(OfferRequest)

    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/updateStatus/:id").put(async(req,res)=>{
    let requestId = req.params.id;
    const{status}=req.body;

    const updatestatus={
        status: 'active'
    }
    const update = await OfferRequest.findByIdAndUpdate(requestId,updatestatus).then(()=>{
        res.json("active")
    }).catch((err)=>{
        console.log(err);
        res.json("unavailable")
    })
})

module.exports = router;