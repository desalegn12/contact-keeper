const express = require('express');
const router = express.Router();
//this why we need to updtee server
//@route    POST api/auth
//@desc     get loged in user
//@access   private
router.get('/', (req, res) => {
    res.send('Get loged in user');
});
//this why we need to updte data from the server
//@route    POST api/auth
//@desc     get login user
//@access   public
router.post('/', (req, res) => {
    res.send('login user');
});

module.exports = router;