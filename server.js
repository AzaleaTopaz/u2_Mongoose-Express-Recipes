const express = require('express');
const db = require('./db');
const CuisineController = require('./controllers/CuisineController')
const PORT = process.env.PORT || 3002;
const app = express();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/cuisines', CuisineController.getAllCuisines)