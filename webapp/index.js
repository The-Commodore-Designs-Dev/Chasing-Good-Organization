const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});