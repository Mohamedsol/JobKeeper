const express = require('express');
const router = express.Router();

// @route  GET api/jobsList
// @desc   Get all users jobsList 
// @access Private

router.get('/', (req, res) => {
    res.send('Get all jobs list');
});


// @route  POST api/jobsList
// @desc   Add new job 
// @access Private

router.post('/', (req, res) => {
    res.send('Add job');
});


// @route  PUT api/jobsList/:id
// @desc   Update job 
// @access Private

router.put('/:id', (req, res) => {
    res.send('Update job');
});

// @route  DELETE api/jobsList/:id
// @desc   DELETE job 
// @access Private

router.delete('/:id', (req, res) => {
    res.send('Delete job');  
});


module.exports= router;