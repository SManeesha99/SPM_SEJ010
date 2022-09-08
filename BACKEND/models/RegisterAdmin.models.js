const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
    {
      name:{type: String, requried: true, trim: true},
      email:{type: String, require:true, trim: true},
      password: {type: String,required: true}
    },
    {
      timestamps: true,
    }
  );
  
const Admin = mongoose.model("Admin",AdminSchema);
module.exports = Admin; 