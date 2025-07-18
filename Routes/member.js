const express = require('express');
const router = express.Router();
const memberController = require('../Controllers/member')
const auth = require('../Auth/auth')

router.post('/add-member', auth, memberController.addMember)
router.get('/all-member', auth, memberController.getAllMembers)

router.get('/search-member', auth, memberController.searchMember)
router.get('/monthly-member', auth, memberController.monthlyJoinedMembers)
router.get('/within-3-days-expiring', auth, memberController.expiringWithin3Days)
router.get('/within-4-to-7-days-expiring', auth, memberController.expiringWithin4to7Days)
router.get('/expired-members', auth, memberController.expiredMembers)
router.get('/inactive-members', auth, memberController.inactiveMembers)

router.get('/member-details/:id', auth, memberController.getMemberDetails)
router.post('/change-status/:id', auth, memberController.changeMemberStatus)
router.put('/renew-member/:id', auth, memberController.renewMember)

module.exports = router;