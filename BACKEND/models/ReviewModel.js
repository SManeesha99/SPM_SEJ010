const { boolean } = require('joi');
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const ReviewSchema = new mongoose.Schema(
    {
      // iusername:{type: String, requried: true},
      StudentId: {type: String, requried: true},
      StudentfName: {type: String, requried: true},
      StudentlName: {type: String, requried: true},
      InstructorId: {type: String, requried: true},
      InstructorfName: {type: String, requried: true},
      InstructorlName: {type: String, requried: true},
      CourseId: {type: String, requried: true},
      ctitle: {type: String, requried: true},
      reviewAt:Date,
      review: {type: String, requried: true}
      
    }

  );
  
// const Student = mongoose.model("Courses",CoursesSchema);

const Review = mongoose.model("Reviews",ReviewSchema);
module.exports = Review; 