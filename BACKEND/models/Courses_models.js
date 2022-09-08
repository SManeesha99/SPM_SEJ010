const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const CoursesSchema = new mongoose.Schema(
    {
      // iusername:{type: String, requried: true},
      ctitle: {type: String, requried: true},
      cduration: {type: String, requried: true},
      cprice: {type: String, requried: true},
      cdescription: {type: String, requried: true}
      // cvideo: {type: String}
    }

  );
  
// const Student = mongoose.model("Courses",CoursesSchema);

const Courses = mongoose.model("Courses",CoursesSchema);
module.exports = Courses; 