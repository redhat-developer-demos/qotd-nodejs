const express = require('express');

const app = express();

const port = 10000;


quotes = [];

q = { "id":"0", "quotation":"It is not only what you do, but also the attitude you bring to it that makes you a success.","author":"Don Schenck"};
quotes.push(q);
q = { "id":"1", "quotation":"Knowledge is power.","author":"Francis Bacon"};
quotes.push(q);
q = { "id":"2", "quotation":"Life is really simple, but we insist on making it complicated.","author":"Confucius"};
quotes.push(q);
q = { "id":"3", "quotation":"This above all, to thine own self be true.","author":"William Shakespeare"};
quotes.push(q);
q = { "id":"4", "quotation":"Never complain. Never explain.","author":"Katharine Hepburn"};
quotes.push(q);
q = { "id":"5", "quotation":"Do be do be dooo.","author":"Frank Sinatra"};
quotes.push(q);


app.get('/', (req, res) => {
    res.send('qotd');
});

app.get('/version', (req, res) => {
    res.send('2.0.0');
});

app.get('/writtenin', (req, res) => {
    res.send('Node.js');
});

app.get('/quotes', (req, res) => {
    res.send(quotes);
});

app.get('/quotes/random', (req, res) => {
    const id = Math.floor(Math.random() * 5);
    res.send(quotes[id]);
});

app.get('/quotes/:id', (req, res) => {
    const id = req.params.id;
    res.send(quotes[id]);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))