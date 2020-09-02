const express = require('express');

const app = express();

const port = 10000;

app.get('/', (req, res) => {
    res.send('qotd');
});

app.get('/version', (req, res) => {
    res.send('2.0.0');
});

app.get('/writtenin', (req, res) => {
    res.send('Node.js');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))