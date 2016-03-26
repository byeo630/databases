var db = require('../db');
var app = require('../app');

module.exports = {
  messages: {
    get: function (request, response) {
      db.query('SELECT text FROM messages', function(err, result) {
        if (err) {
          console.log('There was an error with your get in the models', err);
        } else {
          //serve result
          console.log('Successful GET from models index', result);
          return result;
        }
      });
    }, // a function which produces all the messages
    post: function () { 
      // sends data
      db.query('');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

