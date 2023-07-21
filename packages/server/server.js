require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// Note to frontend: if useing fetch to get the routes then fetch
// needs the flag `credentials: 'include'` option

// Note to backend: the backend needs Access-Control-Allow-Credentials set to true
// This is set in the CORS options.

// Custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// build in middleware to handle urlencoded form data
// content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// built in middleware for json
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// serve static files
app.use(express.static(path.join(__dirname, '/public')));

// routes
app.use('/v1/api', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/upload', require('./routes/api/fileupload'));

// Routes that are protected
app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users'));
app.use('/submissions', require('./routes/api/submissions'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }else if (req.accepts('json')) {
        res.json({error: "404 Not Found"});
    } else {
        res.type('txt').send("404 Not Found");
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Server connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
