const express = require('express');
const chalk = require('chalk');

// use< $env:DEBUG='app';node app.js >command to run the debugger 
const debug = require('debug')('app');
const app = express();
const path = require('path');

// this is pulling the environmental variable from Nodemon
const PORT = process.env.PORT || 3000
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

// allows you to set variables indside the context of your application
// we are setting a variable 'views' and the path
app.set('views', './src/views')

// we are setting our view engine to ejs
// our express app is looking in src/views for templates associated with EJS
app.set('view engine', 'ejs')

// this will not show when express.static is used and it has a valid path
app.get('/',(req, res)=>{
    res.render('index', {title: 'Welcome to Globomantics', data: ['a', 'b', 'c']});
})

app.listen(PORT, ()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
});