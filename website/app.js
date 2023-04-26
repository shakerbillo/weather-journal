/* Global Variables */
const zipCode = document.getElementById('zip');
const feels = document.getElementById('feelings');
const button = document.getElementById('generate');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const formInput = document.getElementById('form_id');

// New date instance
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

/* Function called by event listener */
const handleClick = (e) => {
	e.preventDefault();

	getAPIData(baseURL, zipCode.value, apiKey)
		.then((data) => {
			console.log('handle click', data);

			const info = {
				date: newDate,
				temp: Math.round(farToCelsius(data.main.temp)),
				content: feels.value,
			};

			postData('/add', info);
		})
		.then(() => {
			retrieveData(); // Update UI data
			formInput.reset(); // reset form input
		})
		.catch((err) => {
			console.log('error', err);
		});
};

// Event listener to add function to existing HTML DOM element
button.addEventListener('click', handleClick);

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=59560234cffa9f42730cd1362760e2a7&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

/* Function to GET Web API Data*/
const getAPIData = async (baseURL, zipCode, apiKey) => {
	const res = await fetch(`${baseURL}${zipCode}${apiKey}`);
	try {
		const data = await res.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log('error', err);
		// appropriately handle the error
	}
};

// convert Fahrenheit to Celcius
const farToCelsius = (temp) => {
	return (temp - 32) * (5 / 9);
};

/* Function to POST data */
const postData = async (path, data) => {
	console.log(path, data);
	const res = await fetch(path, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	try {
		const newData = await res.json();
		console.log('Your new data:', newData);
		return newData;
	} catch (err) {
		console.log('error:', err);
	}
};

/* Function to GET Project Data */
const retrieveData = async () => {
	const req = await fetch('/all');
	try {
		const allData = await req.json();
		console.log(allData);
		// Update UI dynamically
		date.innerHTML = `Date: ${allData.date}`;
		temp.innerHTML = `Temperature: ${allData.temp}  degree Celsius`;
		content.innerHTML = `I Feel: ${allData.content}`;
	} catch (err) {
		console.log('error', err);
	}
};
