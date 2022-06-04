const express = require('express');
//chalk adds some color references to the console outputs
const chalk = require('chalk');
// use< $env:DEBUG='app';node app.js >command to run the debugger 
const debug = require('debug')('app');
//middleware for displaying console log outputs
const morgan = require('morgan');
const path = require('path');

// this is pulling the environmental variable from Nodemon
const PORT = process.env.PORT || 3000;
const app = express();

//our session router functionality is being pulled from sessionRouter.js
const sessionsRouter = require('./src/routers/sessionsRouter');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

// allows you to set variables indside the context of your application
// we are setting a variable 'views' and the path
app.set('views', './src/views');

// we are setting our view engine to ejs
// our express app is looking in src/views for templates associated with EJS
app.set('view engine', 'ejs');

// this is going to hold all the code to deal with a session route
// it will link to sessions and handles all the sub-pages
app.use('/sessions', sessionsRouter);


// this will not show when express.static is used and it has a valid path
app.get('/',(req, res)=>{
    res.render('index', {title: 'Welcome to Globomantics', data: ['a', 'b', 'c']});
})

app.listen(PORT, ()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
});