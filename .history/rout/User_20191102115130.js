const express = require('express');
const router = express.Router();
//this why we need to updte data from the server

//this why we need to updte data from the server
//@route    POST api/users
//@desc     Register a user
//@access   private
router.post('/', (req, res) => {
    res.send('Regster all contacts');
});

module.exports = router;