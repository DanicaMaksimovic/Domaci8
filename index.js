const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.set('view engite', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const recept = [
    {number: '1', recipe:'recept broj 1'},
    {number: '2', recipe:'recept broj 2'}
]

const appRecept = 'Recepti';

app.get('/', (req,res) =>{
    res.render('index', {recept, appRecept});
});

app.listen(PORT, () =>{
    console.log('Servis radi');
});