const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'db', //service Name
   user: 'root',
   password: 'root',
   database: 'mydb'
});

connection.connect();

app.get('/', (req, res) => {
   res.send('Hello World with Node.js at the Google Cloud!!!');
})

app.listen(process.env.PORT || 3000, () => {
   console.log('Server running on port 3000');
});

// Nginx - proxy reverse

//nginx.conf - 

//Continuous Integration - git push origin main -> github action

// runs automated tests
// runs other things
// connect to cloud run - deploy