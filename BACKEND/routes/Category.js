const router = require("express").Router();
const Category = require("../models/Category.model");
// const multer = require("multer");
let Category_models = require("../models/Category.model");


router.route("/add").post((req,res)=>{

    const categoryTitle = req.body.categoryTitle;
    const categoryDescription = req.body.categoryDescription;

    const newCategory_models = new Category_models({

        // iusername,
        categoryTitle,
        categoryDescription
    })

    newCategory_models.save().then(()=>{
        res.json("New Category Added")
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/").get((req,res)=>{

    Category_models.find().then((Category)=>{
        res.json(Category)
    }).catch((err)=>{
        console.log(err)
    })

})




router.route("/update/:id").put(async (req, res) =>{
    let categoryId = req.params.id;
    const {categoryTitle, categoryDescription} = req.body;

    const updateCategory ={
        categoryTitle,
        categoryDescription
    }

    const update = await Category_models.findByIdAndUpdate(categoryId, updateCategory)
    .then(() => {
        res.status(200).send({status: "Category updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: " Error with updating data", error: err.message});
    })
  
})


router.route("/delete/:id").delete(async (req, res) => {
    let categoryId = req.params.id;

    await Category_models.findByIdAndDelete(categoryId)
    .then(() => {
        res.status(200).send({status: "Category Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error withe delete course", error: err.message});
    })
})


router.get("/category/:id",(req,res)=>{

    let CategoryId = req.params.id;
    
    Category_models.findById(CategoryId,(err,category)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            category
        });
    });
});




module.exports = router;