const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
    {
      firstName:{type: String, requried: true, trim: true},
      lastName: {type: String, requried: true, trim: true},
      mobileNumber:{type: Number, requried: true,trim: true},
      Field: {type: String, requried: true, trim: true},
      email:{type: String, requried: true,trim: true},
      password: {type: String,required: false,},
      userRoleStatus:{type: String, requried: true,trim: true},
      accountStatus:{type: String, requried: true,trim: true},
    },
    {
      timestamps: true,
    }
  );
  
const Student = mongoose.model("Student",StudentSchema);
module.exports = Student; 