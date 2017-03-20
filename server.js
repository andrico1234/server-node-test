'use strict';
const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    res.render('home.hbs', {

        currentYear: new Date().getFullYear(),
        title: 'Welcome',
        welcomeMessage: 'Hello, this is a welcome message. Enjoy the express.js site'
    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs', {
        currentYear: new Date().getFullYear(),
        title: 'About Page'
    });
});

app.get('/bad', (req, res) => {

    res.send({

        error: '404_BAD_REQUEST',
    })
});

app.listen(3000, () => {

    console.log('Server is up on port 3000');
});