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
// app.use(StudentRoutes);



const CourseRoutes = require('./routes/Courses');
app.use("/Courses",CourseRoutes);

const CourseCartRoutes = require('./routes/Cart');
app.use("/Cart",CourseCartRoutes);


// app.use('/admin', require('./routes/AdminRegister'));
// app.use("/admin", adminRouter);

const UserRoutes = require('./routes/UserRegistration');
app.use("/User",UserRoutes);

const TestRoutes = require('./routes/Test');
app.use("/Test",TestRoutes);

const PaymentsRoutes = require('./routes/Payments');
app.use("/Payment",PaymentsRoutes);

const IndtructorPaymentsRoutes = require('./routes/InstructorPayment');
app.use("/InstructorPayment",IndtructorPaymentsRoutes);

const StudentRoutes = require('./routes/Student');
app.use("/Student",StudentRoutes);

const ReviewRoutes = require('./routes/makeReview');
app.use("/Review",ReviewRoutes);


// const offerRoutes = require('./routes/offers');
// app.use("/offer", offerRoutes);


const categoryRoutes = require('./routes/Category');
app.use("/category", categoryRoutes);

const AdminRoutes = require('./routes/AdminRegister');
app.use("/Admin", AdminRoutes);

const AdLoginRoutes = require('./routes/AdminLogin');
app.use("/adminlogin", AdLoginRoutes)

const LoginRoutes = require('./routes/Login');
app.use("/login", LoginRoutes)

const OfferRequestRoutes = require('./routes/OfferRequest');
app.use("/offerRequest", OfferRequestRoutes)


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
