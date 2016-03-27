var models = require('../models');
var db = require('../db');
var h = require('../helpers');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT text FROM messages', function(err, result) {
        if (err) {
          console.log('Failed GET in controllers', err);
          res.sendStatus(400);
        } else {
          //serve result
          console.log('Successful GET in controllers index');
          models.messages.get(req, res);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('index controllers POST');
      // var message = { method: 'POST',
      //   uri: 'http://127.0.0.1:3000/classes/messages',
      //   json: {
      //     username: 'Valjean',
      //     message: 'In mercy\'s name, three days is all I need.',
      //     roomname: 'Hello'
      //   }
      // };

      // db.query('INSERT INTO messages SET ?', function(err, result) {
      //   if (err) {
      //     console.log('Failed POST in controllers: ', err);
      //   } else {
      //     console.log('Passing POST from controllers index to models index');
      //     models.messages.post(req, res);
      //   }
      // });

      models.messages.post(req, res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.query('SELECT name FROM users', function(err, result) {
        if (err) {
          console.log('Failed GET in controllers', err);
          res.sendStatus(400);
        } else {
          //serve result
          console.log('Successful GET in controllers index');
          models.users.get(req, res);
        }
      });
    },
    post: function (req, res) {
      console.log('index controllers POST');
      // var message = { method: 'POST',
      //   uri: 'http://127.0.0.1:3000/classes/messages',
      //   json: {
      //     username: 'Valjean',
      //     message: 'In mercy\'s name, three days is all I need.',
      //     roomname: 'Hello'
      //   }
      // };
      models.users.post(req, res);
    }
  }
};

