const express = require('express');
const router = express.Router();
const gymController = require('../Controllers/gym')
const auth = require('../Auth/auth')

router.post('/register', gymController.register)
router.post('/login', gymController.login)
router.post('/forgotpassword/send-otp', gymController.sendOtp)
router.post('/forgotpassword/check-otp', gymController.checkOtp)
router.post('/forgotpassword/reset', gymController.resetPassword)
router.post('/logout', gymController.logout);

////middleware
router.get('/checking', auth, gymController.checking)

module.exports = router;