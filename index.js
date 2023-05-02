const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4545;
const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Helloooooooooo')
})


app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(port);
})