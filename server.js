projectData = {};
const port = 5400;

// require express and cors
const path = require('path');
const express = require('express');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'website')));

// Cors for cross origin allowance
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('/website'));


const server = app.listen(port, listening);
function listening() {
    console.log('server is running!');
    console.log(`running on localhost: ${port}`);
};

//the GET route for the projectData object.
app.get('/projectData', function(req, res){
    res.send(projectData);
});

app.get('/hazem', function(req, res){
   res.sendFile(path.join(__dirname, '/website/index.html'));
});

//the POST route for the projectData object.
app.post('/projectData', (req, res) => {
    projectData = {
        temp: req.body.temp,
        date: req.body.date,
        informaion: req.body.information
    };
    projectData = req.body;
    res.send(projectData);
});