const express = require('express');
const router = express.Router();
//this why we need to updte data from the server
//@route    POST api/users
//@desc     Register a user
//@access   private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});
//this why we need to updte data from the server
//@route    POST api/users
//@desc     Register a user
//@access   private
router.post('/', (req, res) => {
    res.send('Get all contacts');
});
//this why we need to updte data from the server
//@route    POST api/users
//@desc     Register a user
//@access   private
router.put('/:id', (req, res) => {
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