const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const PaymentSchema = new mongoose.Schema(
    {
      courseId:{type: String, requried: true, trim: true},
      courseTitle: {type: String, requried: true, trim: true},
      coursePrice:{type: String, requried: true,trim: true},
      pname: {type: String, requried: true, trim: true},
      pcardNum:{type: String, requried: true,trim: true},
      pexpiryDate: {type: Date,required: false,},
      cvc: {type: String,required: false,}
     
    }
 
  );
  
const Payment = mongoose.model("Payment",PaymentSchema);
module.exports = Payment; 