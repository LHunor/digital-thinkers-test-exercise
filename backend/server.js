const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Backend for digital thinkers test exercise.');
});

app.use(cors());

app.use('/api/menus', require('./src/routes/menu.js'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});