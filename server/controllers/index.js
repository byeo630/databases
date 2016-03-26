var models = require('../models');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT text FROM messages', function(err, result) {
        if (err) {
          console.log('Failed GET in controllers', err);
        } else {
          //serve result
          console.log('Successful GET in controllers index');
          models.messages.get(req, res);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('index controllers POST');
      console.log(models);
      var message = {text: 'hello'};
      db.query('INSERT INTO messages SET ?', message, function(err, result) {
        if (err) {
          console.log('This is the result from the controllers POST: ', result);
          console.log('Failed POST from the controllers index: ', err);
        } else {
          //serve result
          console.log('Successful POST from the controllers index: ', result);
          models.messages.post(req, res);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

