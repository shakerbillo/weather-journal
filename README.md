# Weather Journal Project

# Description

Asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App

# Table of Contents

1. Project Title
2. Description
3. Development Strategy
4. Built App Using 
5. Instructions 

# Development Strategy

1. Setting up project environment by installing Node from the terminal. Installed packages Express, Body-Parser, and Cors from the terminal and include them in your server.js file.
2. Added GET route that returns the projectData object in the server. Added POST  route that adds incoming data to projectData. Retrieved data from the server
3. Acquired API credentials from OpenWeatherMap website.
4. Wrote an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
5. Created an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
6. After successful retrieval of the weather data,chained another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
7. Finally, chained Promise that updates the UI dynamically 


4. Built App Using 
   1. Vanilla JS
   2. Express 
   3. CSS 
   4. NodeJS

5. Instructions
Coming soon :D