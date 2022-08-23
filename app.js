const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home' , blogs });
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.render('about', { title: 'About' });
});


app.use((req, res) => {
    res.render('404', { title: '404' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });