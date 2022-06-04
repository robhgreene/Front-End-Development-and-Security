const express = require('express');
// we can debug this file as well
const debug = require('debug')('app:adminRouter');
// we are pulling the MongoClient piece from mongodb directly
const { MongoClient } = require('mongodb');
// this is the data that we want to create in our Mongo BD
const sessions = require('../data/sessions.json');

const adminRouter = express.Router();

// adminRouter still broken. link for potential fix: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
adminRouter.route('/').get((req, res)=>{
    // this is where the link for our database will go
    const url = 'mongodb+srv://dbUser:fBDv9FaCR1HnDXsF@globomanticsprac.vscmjbz.mongodb.net/?retryWrites=true&w=majority';
    // this is the name of our database
    const dbName = 'globomantics';
    // how to connect to the database
    // we are creating an environment that allows MongoBD to run in an async fashion
    (async function mongo(){
        // creating a client
        let client;
        try {
            // we don't need a promise, it's just to wait to connent to the url
            client = await MongoClient.connect(url);
            debug('Connected to the Mongo DB.');

            // this is our database object
            const db = client.db(dbName);

            const response = await db.collection('sessions').insertMany(sessions);
            res.json (response);

        } catch (error) {
            // this will give the whole error
            debug(error.stack);
        }
        client.close();
    })();
});

module.exports = adminRouter;