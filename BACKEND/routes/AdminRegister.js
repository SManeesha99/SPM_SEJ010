const router =require('express').Router()
const adminCtrl = require('../controllers/AdminRegister.controller')

router.post('/register',adminCtrl.register)

module.exports = router