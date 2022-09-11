const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema(
    {
      categoryTitle: {type: String, requried: true},
      categoryDescription: {type: String, requried: true}
    }

  );
  
// const Student = mongoose.model("Courses",CoursesSchema);

const Category = mongoose.model("Category",CategorySchema);
module.exports = Category; 