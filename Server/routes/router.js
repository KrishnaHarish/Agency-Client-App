const express = require('express');
const router = express.Router();
const { create, visitor, agency, getClient, getAllClients, updateuser } = require('../controller/controller')
const { adminAuthinticate, Visitorlogin } = require('../middleware/authentication.js')

router.post('/visitor', visitor);
router.get('/agency', Visitorlogin, agency);
router.post('/create',  Visitorlogin, create);
router.post('/getClient', Visitorlogin, getClient);
router.get('/allClient', Visitorlogin, getAllClients);
router.put('/updateclient', adminAuthinticate, updateuser);

module.exports = router