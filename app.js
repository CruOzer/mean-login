const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 5000;

app.listen(post, () => {
    console.log('Server started on port ' + port);
});