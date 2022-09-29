const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const PaymentSchema = new mongoose.Schema(
    {
      CourseId:{type: String, requried: true, trim: true},
      CourseTitle: {type: String, requried: true, trim: true},
      CoursePrice:{type: String, requried: true,trim: true},
      PName: {type: String, requried: true, trim: true},
      PCardNum:{type: String, requried: true,trim: true},
      PExpiryDate: {type: String,required: false,},
      CVC: {type: String,required: false,}
     
    }
 
  );
  
const Payment = mongoose.model("Payment",PaymentSchema);
module.exports = Payment; 