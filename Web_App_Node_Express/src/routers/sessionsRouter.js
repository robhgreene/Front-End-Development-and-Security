const express = require('express');
// object for using the .json file with our sessions information
const sessions = require('../data/sessions.json');
// defining our router object
const sessionsRouter = express.Router();

// this will route to the sessions (link Sessions)
sessionsRouter.route('/')
    .get((req, res) => {
        // use .render here for the index.ejs file and the object we want to render
        // when we render sessions, we have a sessions object to work with
        res.render('sessions', {
            sessions,
        });
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