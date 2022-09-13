const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,


});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected");
});



const makeReviewRoutes = require('./routes/makeReview');
app.use("/makeReview",makeReviewRoutes);


// const StudentRoutes = require('./routes/StudentRegistration');
// app.use("StudentRegister",StudentRoutes);


const CourseRoutes = require('./routes/Courses');
app.use("/Courses",CourseRoutes);


// app.use('/admin', require('./routes/AdminRegister'));
// app.use("/admin", adminRouter);

const StudentRoutes = require('./routes/StudentRegistration');
app.use("/Student",StudentRoutes);


// const adminRoutes = require('./routes/AdminRegister');
// app.use("/admin", adminRoutes);

const offerRoutes = require('./routes/offers');
app.use("/offer", offerRoutes);


const categoryRoutes = require('./routes/Category');
app.use("/category", categoryRoutes);


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
