const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const cookieParser = require('cookie-parse');
const fileUpload = require("express-fileupload");
// const routes = require(".routes");

const PORT = process.env.PORT || 8090;

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))



const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
    
    useNewUrlParser:true,
    useUnifiedTopology:true 
 
 });

 const connection = mongoose.connection;

 connection.once("open",()=>{
    console.log("MongoDB Connected");
});

const StudentRoutes = require('./routes/StudentRegistration');
app.use(StudentRoutes);


const CourseRoutes = require('./routes/Courses');
app.use("/Courses",CourseRoutes);

app.use('/admin', require('./routes/AdminRegister'))


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
