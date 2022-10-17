const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const InstructorPaymentSchema = new mongoose.Schema(
    {

      courseTitle: {type: String, requried: true, trim: true},
      coursePrice:{type: String, requried: true,trim: true},
      pname: {type: String, requried: true, trim: true},
      pcardNum:{type: String, requried: true,trim: true},
      pexpiryDate: {type: Date,required: false,},
      cvc: {type: String,required: false,},
      InstructorId: {type: String, requried: true},
      InstructorfName: {type: String, requried: true},
      InstructorlName: {type: String, requried: true},
      cdescription: {type: String, requried: true},
      uploadAt:{type: String, requried: true},
      date: {type: String, requried: true},
      paymentPrice:{type: String, requried: true},
     
    }
 
  );
  
const InstructorPayment = mongoose.model("InstructorPayment",InstructorPaymentSchema);
module.exports = InstructorPayment; 