const router = require("express").Router();
let MakeReview = require("../models/MakeReview.model");

// Review Insert-------------------------

router.route("/add").post((req,res)=>{
    
    const Review = req.body.Review;
    const Date = req.body.Date;
    

    const newreview = new MakeReview({

        Review,
        Date
        
    })

    newreview.save().then(()=>{
        res.json("Review Added")
    }).catch((err)=>{
        console.log(err)
    })
})

// -----------------------------------------

//get all Review----------------------------

router.route("/").get((req, res) => {

    MakeReview.find().then((makeReview)=>{
        res.json(makeReview)
    }).catch((err)=>{
        console.log(err)
    })
})

//-------------------------------------------

//update course details---------------------

router.route("/update/:id").put(async (req, res)=>{
    let reviewId = req.params.id;
    const { Review, Date} = req.body;

    const updateReview = {
        Review,
        Date
    }
    
    const update = await MakeReview.findByIdAndUpdate(reviewId, updateReview)
    .then(()=>{
        res.status(200).send({status: "Review Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating review", error: err.message});
    })
})

//-------------------------------------

//delete Review------------------------

router.route("/delete/:id").delete(async (req, res)=>{
    let reviewId = req.params.id;

    await MakeReview.findByIdAndDelete(reviewId)
    .then(()=>{
        res.status(200).send({status: " Review Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete review", error: err,message});
    })
})

//--------------------------------------

//get one review------------------------

router.get("/get/:id",(req, res)=>{

    let reviewId = req.params.id;

    MakeReview.findById(reviewId,(err,review)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            review
        });
    });
});

//-----------------------------------------

module.exports = router;