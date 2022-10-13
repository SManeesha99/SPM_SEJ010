const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
      firstName:{type: String, requried: true, trim: true},
      lastName: {type: String, requried: true, trim: true},
      mobileNumber:{type: Number, requried: true,trim: true},
      field: {type: String, requried: true, trim: true},
      email:{type: String, requried: true,trim: true},
      password: {type: String,required: false,},
      status: {type: String},

      registerAt:Date,
      // userRoleStatus:{type: String, requried: true,trim: true},
      // accountStatus:{type: String, requried: true,trim: true},
    }
 
  );
  
const User = mongoose.model("User",UserSchema);
module.exports = User; 