var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.query('SELECT * FROM messages', function(error, result) {
        callback(error, result);
      });
    },

    // a function which can be used to insert a message into the database
    post: function (values, callback) {
      db.query('INSERT INTO messages (text, userid, roomname) VALUES (?, (select id from users where username = ? limit 1), ?)', values, function(error, result) {
        callback(error, result);
      });
    }
  },

  users: {
    get: function (callback) {
      db.query('SELECT * FROM users', function(error, result) {
        callback(error, result);
      });
    },
    // a function which can be used to insert a message into the database
    post: function (values, callback) {
      db.query('INSERT INTO users (username) VALUES (?)', values, function(error, result) {
        callback(error, result);
      });
    }
  }
};

