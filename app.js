const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

app.use(express.static('static_files'));

app.listen(8000);

dbURI = 'mongodb+srv://tom123:Graphic4@mynewcluster.coxgo.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {

    })
    .catch((err) => console.log(err));


// Routes

app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/buy', (req, res) => {
    res.render('buy.ejs');
});

app.get('/sell', (req, res) => {
    res.render('sell.ejs');
});


// Other handlers


app.use((req, res) => {
    res.status(404).render('404.ejs');
});