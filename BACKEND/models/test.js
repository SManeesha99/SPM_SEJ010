const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const TestSchema = new mongoose.Schema(
    {
      firstName:{type: String, requried: true, trim: true},
      lastName: {type: String, requried: true, trim: true},
      mobileNumber:{type: Number, requried: true,trim: true},
      field: {type: String, requried: true, trim: true},
      email:{type: String, requried: true,trim: true},
      password: {type: String,required: false,}
      // userRoleStatus:{type: String, requried: true,trim: true},
      // accountStatus:{type: String, requried: true,trim: true},
    }
 
  );
  
const Test = mongoose.model("Test",TestSchema);
module.exports = Test; 