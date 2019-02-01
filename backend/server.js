const express = require('express');
const mongoose = require('mongoose');
const todoListRoute = require('./routes/todolistroute');
const keys = require('./keys');
const cors = require('cors');
var bodyParser = require('body-parser');
const path = require('path');



const publicPath = path.join(__dirname, 'public');
mongoose.connect(keys.mongoURI)
    .then(() => console.log(`MongoDB connected`))
    .catch(err => console.error(err));


const app = express();
app.use(express.static(publicPath));
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/task', todoListRoute);


app.listen(keys.PORT, () => console.log(`App listen on port ${keys.PORT}`));