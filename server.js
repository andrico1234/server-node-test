'use strict';
const express = require('express');
const hbs = require('hbs');
const fs = require('file-system');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use((req, res, next) => {

    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.originalUrl}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {

        if (err) {
            console.log('Unable to append log');
        }
    });
    next();
});

// app.use((req, res, next) => {
//
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {

    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {

    return text.toUpperCase();
});

app.get('/', (req, res) => {

    res.render('home.hbs', {

        title: 'Welcome',
        welcomeMessage: 'Hello, this is a welcome message. Enjoy the express.js site'
    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs', {
        title: 'About Page'
    });
});

app.get('/projects', (req, res) => {

    res.render('projects.hbs', {
        title: 'Project Page'
    });
});

app.get('/bad', (req, res) => {

    res.send({

        error: '404_BAD_REQUEST',
    })
});

app.listen(port, () => {

    console.log(`Server is up on port ${port}`);
});