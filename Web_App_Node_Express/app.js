const express = require('express');
//chalk adds some color references to the console outputs
const chalk = require('chalk');
// use< $env:DEBUG='app';node app.js >command to run the debugger 
const debug = require('debug')('app');
//middleware for displaying console log outputs
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require('express-session');

// this is pulling the environmental variable from Nodemon
const PORT = process.env.PORT || 3000;
const app = express();

//our session router functionality is being pulled from sessionRouter.js
const sessionsRouter = require('./src/routers/sessionsRouter');
// pulling the database functionality from adminRouter.js
const adminRouter = require('./src/routers/adminRouter');
const cookieParser = require('cookie-parser');

// the order in which these are called matters
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser);
// the secret is what is used to encode the cookie
app.use(session({secret: 'globomantics'}));

// passport requires cookieParser and session in order to work
// passport.js is going to return a function
// the function will be executed here and app is being passed in
require('./src/config/passport.js')(app);

// allows you to set variables indside the context of your application
// we are setting a variable 'views' and the path
app.set('views', './src/views');

// we are setting our view engine to ejs
// our express app is looking in src/views for templates associated with EJS
app.set('view engine', 'ejs');

// this is going to hold all the code to deal with a session route
// it will link to sessions and handles all the sub-pages
app.use('/sessions', sessionsRouter);
// this will handles the database
app.use('/admin', adminRouter);


// this will not show when express.static is used and it has a valid path
app.get('/',(req, res)=>{
    res.render('index', {title: 'Welcome to Globomantics', data: ['a', 'b', 'c']});
})

app.listen(PORT, ()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
});