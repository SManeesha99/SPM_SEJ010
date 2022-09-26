const mongoose = require('mongoose');
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
    {
      firstname:{type: String, requried: true, trim: true},
      lastname:{type: String, requried: true, trim: true},
      email:{type: String, require:true, trim: true},
      password: {type: String,required: true}
    },
    {
      timestamps: true,
    }
  );

//   AdminSchema.method.generateAuthToken = function(){
//     const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {
//       expiresIn: "7d",
//     });
//     return token;
//   }
  
const Admin = mongoose.model("Admin",AdminSchema);

// const validate = (data)=>{
//   const schema = Joi.object({
//     name: Joi.string().required().label("Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
//   });
//   return schema.validate(data);
// }
module.exports = Admin; 