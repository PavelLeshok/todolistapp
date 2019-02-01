const express = require('express');
const Task = require('../models/Task');
const router = express.Router();


router.get('/', async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
});

router.post('/', async (req, res) => {
    const {title, text, priority, completed, date} = req.body;
    const taskData = {
        title,
        text,
        priority,
        completed,
        date
    };
    console.log(req.body)
    console.log(taskData);
    const task = new Task(taskData);
    await task.save();
    res.status(201).json(task);
});

router.put('/', async (req, res) => {
    const {title, text, priority, completed} = req.body;
    console.log(req.body._id)
    await Task.update({_id: req.body._id}, {$set:{title, text, priority, completed}}) 
    res.status(200).json(req.body)
});

router.delete('/', async (req, res) => {
    console.log(req.body[0]._id)
   await Task.remove({_id: req.body[0]._id});
   res.status(200).json(req.body.title)
});


module.exports = router;