var db = require('../db');
var app = require('../app');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT text FROM messages', function(err, result) {
        if (err) {
          console.log('There was an error with your get in the models', err);
          res.status(400);
        } else {
          //serve result
          console.log('Successful GET from models index', result);
          module.exports.users.get(req, res);
        }
      });
    }, // a function which produces all the messages
    post: function (req, res) { 
      var data = {
        text: req.body.text === null ? '...' : req.body.text,
        room: req.body.roomname === null ? 'unknown' : req.body.roomname
      };
      db.query('INSERT INTO messages ?', data, function(err, result) {
        if (err) {
          console.log('This is the result from the controllers POST: ', result);
          console.log('Failed POST from the controllers index: ', err);
          res.status(400);
        } else {
          //serve result
          console.log('THIS IS THE REQ BODY: ', req.body);
          console.log('This is the models index result: ', result);
          module.exports.users.post(req, res);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.query('SELECT name FROM users', function(err, result) {
        if (err) {
          console.log('There was an error with your user GET in the models', err);
          res.status(400);
        } else {
          //serve result
          console.log('Successful GET from models index', result);
          res.status(200).send(result);
        }
      });
    },
    post: function (req, res) {
      var data = {
        name: req.body.username === null ? 'Anonymous' : req.body.username
      };
      db.query('INSERT INTO users SET ?', data, function(err, result) {
        if (err) {
          console.log('This is the result from the controllers POST: ', result);
          console.log('Failed POST from the controllers index: ', err);
          res.status(400);
        } else {
          //serve result
          console.log('THIS IS THE USERNAME POST DATA: ', data);
          res.send(result);          
        }
      });
    }
  }
};

