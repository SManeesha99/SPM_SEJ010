let UserRegstration = require('../models/UserRegstration.models');

export const getInstructor = async (req, res, next) => {
    const instructor = await UserRegstration.find({state:"Instructor"});
    res.send(instructor);
}

