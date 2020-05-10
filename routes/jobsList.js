const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');

const User = require('../models/User');
const jobsList = require('../models/JobsList')

// @route  GET api/jobsList
// @desc   Get all users jobsList 
// @access Private

router.get('/', auth, async (req, res) => {
    try {
        const jobsLists = await jobsList.find({ user: req.user.id }).sort({ date: -1});
        res.json(jobsLists);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});


// @route  POST api/jobsList
// @desc   Add new job 
// @access Private

router.post(
    '/',
    [
      auth,
      [
        check('jobTitle', 'Job title is required')
          .not()
          .isEmpty(),
        check('companyName', 'Company name is required')
          .not()
          .isEmpty(),  
      ],
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
  
      const {jobTitle, companyName, city, status} = req.body;
  
      try {
        const newJob = new jobsList({
            jobTitle,
            companyName,
            city,
            status,
            user: req.user.id,
        });
  
        const jobPost = await newJob.save();
  
        res.json(jobPost);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    },
  );


// @route  PUT api/jobsList/:id
// @desc   Update job 
// @access Private

router.put('/:id', auth, async (req, res) => {
    const {jobTitle, companyName, city, status} = req.body;

  
    // Build job object
    const jobFields = {};
    if (jobTitle) jobFields.jobTitle = jobTitle;
    if (companyName) jobFields.companyName = companyName;
    if (city) jobFields.city = city;
    if (status) jobFields.status = status;
  
    try {
      let job = await jobsList.findById(req.params.id);
  
      if (!job) return res.status(404).json({msg: 'job list not found'});
  
      // Make sure user owns jobs
      if (job.user.toString() !== req.user.id) {
        return res.status(401).json({msg: 'Not authorized'});
      }
  
      job = await jobsList.findByIdAndUpdate(
        req.params.id,
        {$set: jobFields},
        {new: true},
      );
  
      res.json(job);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  });

// @route  DELETE api/jobsList/:id
// @desc   DELETE job 
// @access Private

router.delete('/:id', auth, async (req, res) => {

    try {
        let job = await jobsList.findById(req.params.id);
    
        if (!job) return res.status(404).json({msg: 'job list not found'});
    
        // Make sure user owns jobs
        if (job.user.toString() !== req.user.id) {
          return res.status(401).json({msg: 'Not authorized'});
        }
    
        await jobsList.findByIdAndRemove(req.params.id);
    
        res.json({ msg: 'Job removed'});
      } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
      } 
});


module.exports= router;