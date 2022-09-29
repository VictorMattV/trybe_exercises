const express = require('express');
const activities = require('./data/activities');

const app = express();

app.get('/myActivities/:id', (req,res) => {
    const result = activities.find(({id}) => id === Number(req.params.id));
    res.status(200).json(result);
});

app.get('/myActivities', (_req,res) => {
    res.status(200).json(activities);
});

app.get('/filter/myActivities', (req,res) => {
    const { status } = req.query;

    let filterActivities = activities;
    
    if (status) {
        filterActivities = activities.filter((item) => item.status === status);
    }

    res.status(200).json({ activities: filterActivities });
});



module.exports = app;
