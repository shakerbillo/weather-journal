// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express(); // instance of express app


  
/* Dependencies */


/* Middleware*/

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse json format to string format

// Cors for cross origin allowance

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Port setup
const port = 5000;
// Spin up the server

const listening = () => {
	// console.log(server);
	console.log('Server listening on port ' + port);
};
const server = app.listen(port, listening);
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'
const getFunc = (req, res) => {
	res.send(projectData);
};
app.get('/all', getFunc);

// Post Route
const postRoute = (req, res) => {
	projectData = {
		temp: req.body.temp,
		date: req.body.date,
		content: req.body.content
	}
	res.send(projectData);
	console.log(`Received response: ${res.status}`);
};
app.post('/add', postRoute);


