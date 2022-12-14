const { boolean } = require('joi');
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema(
    {
      // iusername:{type: String, requried: true},

      InstructorId: {type: String, requried: true},
      InstructorfName: {type: String, requried: true},
      InstructorlName: {type: String, requried: true},

      StudentId: {type: String, requried: true},
      OrderId: {type: String, requried: true},
      OrderedDate: {type: String, requried: true},
      isPayed:{type: Boolean},
      courseId: {type: String, requried: true},
      
      
      ctitle: {type: String, requried: true},
      cduration: {type: String, requried: true},
      cprice: {type: String, requried: true},
      cdescription: {type: String, requried: true},
      uploadAt:Date, 

      isTopCourseRequest: {type:Boolean},
      isTopCourseRequestApprove: {type:Boolean},

      // cvideo: {type: String}
      tittle: {type: String, requried: true},
      description: {type: String, requried: true},
      discount: {type: String, requried: true},
      closingDate: {type: String, requried: true}
    }

  );
  
// const Student = mongoose.model("Courses",CoursesSchema);

const Carts = mongoose.model("Cart",CartSchema);
module.exports = Carts; 