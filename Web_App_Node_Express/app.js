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

// this will not show when express.static is used 
app.get('/',(req, res)=>{
    res.send('Hello from my app!');
})

app.listen(PORT, ()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
});