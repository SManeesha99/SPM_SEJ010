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

router.route("/").get((req,res)=>{

    Offers.find().then((offer)=>{
        res.json(offer)
    }).catch((err)=>{
        console.log(err)
    })

})


router.get("/offer/:id",(req,res)=>{

    let offerId = req.params.id;
    
    Offers.findById(offerId,(err,offer)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            offer
        });
    });
});


router.route("/update/:id").put(async(req,res)=>{
    let offerID = req.params.id;
    const{tittle,description,discount,closingDate}=req.body;

    const updateoffer={
        tittle,
        description,
        discount,
        closingDate
        
    }
    const update = await Offers.findByIdAndUpdate(offerID,updateoffer).then(()=>{
        res.status(200).send({status: "Offer updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
 
})

router.route("/delete/:id").delete(async(req,res)=>{
    let offerID = req.params.id;

    await Offers.findByIdAndDelete(offerID).then(()=>{
        res.status(200).send({status:"Offer deleted"});
    }).catch((errr)=>{
        console.log(errr.message);
        res.status(500).send({status: "Error with delete company notice"})
    })
    
})

module.exports = router;