const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
    {
      firstName:{type: String, requried: true, trim: true},
      lastName: {type: String, requried: true, trim: true},
      mobileNumber:{type: String, requried: true,trim: true},
      email:{type: String, requried: true,trim: true},
      password: {type: String,required: true}
    },
    {
      timestamps: true,
    }
  );
  
const Admin = mongoose.model("Admin",AdminSchema);
module.exports = Admin; 