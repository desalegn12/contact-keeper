const express = require('express');
const router = express.Router();
//this why we need to updte data from the server

//this why we need to updte data from the servegh
//@route    POST api/users
//@desc     Register a user
//@access   public
router.post('/', (req, res) => {
    res.send('Regster a contacts');
});

module.exports = router;