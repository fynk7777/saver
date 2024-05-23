const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let savedUrls = [];

app.post('/save-url', (req, res) => {
    const url = req.body.url;
    console.log('URL received:', url);  // デバッグログ
    savedUrls.push(url);
    console.log('Current saved URLs:', savedUrls);  // デバッグログ
    res.send('URL saved successfully!');
});

app.get('/get-urls', (req, res) => {
    console.log('Returning saved URLs:', savedUrls);  // デバッグログ
    res.json(savedUrls);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/test', (req, res) => {
    res.send('Test endpoint is working!');
});
