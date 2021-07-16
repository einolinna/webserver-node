const express = require('express');
const hbs = require('hbs');
const app = express()
require('dotenv').config();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home',{
    titulo: "Curso de NodeJS",
    nombre: "Eino Linna"

  });

})

app.get('/elements', (req, res) => {
  res.render('elements',{
    titulo: "Curso de NodeJS",
    nombre: "Eino Linna"

  });

})



app.get('/generic', (req, res) => {
  res.render('generic',{

    titulo: "Curso de NodeJS",
    nombre: "Eino Linna"

  });

})

app.get('*', (req, res) => {
  res.sendFile('404 Not Found | Error');



})


app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto: ${port}`)
})
