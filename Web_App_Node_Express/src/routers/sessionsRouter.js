const express = require('express');
// object for using the .json file with our sessions information
const sessions = require('../data/sessions.json');
const debug = require('debug')('app:sessionRouter');
const { MongoClient } = require('mongodb');
// defining our router object
const sessionsRouter = express.Router();

// this will route to the sessions (link Sessions)
sessionsRouter.route('/').get((req, res) => {

    // this is where the link for our database will go
    const url = 'mongodb+srv://dbUser:**************@globomanticsprac.vscmjbz.mongodb.net/?retryWrites=true&w=majority';
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

            const sessions = await db.collection('sessions').find().toArray();
            res.render ('sessions', {sessions});

        } catch (error) {
            // this will give the whole error
            debug(error.stack);
        }
        client.close();
    })();
});

// if there is a number parameter, this will route to that particular session
// /sessions/id#
sessionsRouter.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        res.render('session', {
            // we have our session object session.ejs will have the html format
            session: sessions[id],
        });
    });

// now we can use this file in app.js
module.exports = sessionsRouter;
