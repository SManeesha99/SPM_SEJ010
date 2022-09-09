const mongoose = require('mongoose');

const OffersSchema = new mongoose.Schema(
    {
      
      tittle: {type: String, requried: true},
      description: {type: String, requried: true},
      discount: {type: String, requried: true},
      closingDate: {type: String, requried: true}
    }

  );
  
// const Student = mongoose.model("Courses",CoursesSchema);

const Offers = mongoose.model("Offers",OffersSchema);
module.exports = Offers; 