const express = require('express');
const router = express.Router();
//this why we need to updte data from the server
//@route    POST api/contacts
//@desc     get all user contacts
//@access   private
router.get('/', (req, res) => {
    res.send('get all contacts');
});
//this why we need to updte data from the server
//@route    POST api/contacts
//@desc     add new contact
//@access   private
router.post('/', (req, res) => {
    res.send('login user');
});
//this why we need to updte data from the server
//@route    put api/contacts
//@desc     update contacts
//@access   private
router.put('/id', (req, res) => {
    res.send('Update contacts');
});
//this why we need to updte data from the server
//@route    POST api/users
//@desc     Register a user
//@access   private
router.delete('/:id', (req, res) => {
    res.send('Delet contacts');
});


module.exports = router;