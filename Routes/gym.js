const express = require('express');
const router = express.Router();
const gymController = require('../Controllers/gym')

router.post('/register', gymController.register)
router.post('/login', gymController.login)
router.post('/forgotpassword/send-otp', gymController.sendOtp)
router.post('/forgotpassword/check-otp', gymController.checkOtp)
router.post('/forgotpassword/reset', gymController.resetPassword)

module.exports = router;