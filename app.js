const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors');

const app = express();

// Connect mongooose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch((err) => {
    console.log('MongoDB connection failure: ' + err);
  });


// Load Routes
const users = require('./routes/users');

// Cors Middleware
app.use(cors);

// Body Parser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 5000;


// Use Routes
app.use('/users', users);


app.listen(port, () => {
    console.log('Server started on port ' + port);
});