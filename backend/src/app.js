const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));


//routes
app.use(require('./routes/index'));

module.exports = app;