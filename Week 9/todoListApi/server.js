const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost/Tododb');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    const routes = require('./api/routes/todoListRoutes');
    routes(app);

app.listen(port);
console.log('todo list RESTful API  Quang server started on: ' + port);