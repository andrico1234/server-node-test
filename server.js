'use strict';
const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
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

app.get('/bad', (req, res) => {

    res.send({

        error: '404_BAD_REQUEST',
    })
});

app.listen(3000, () => {

    console.log('Server is up on port 3000');
});