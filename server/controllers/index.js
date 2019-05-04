var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (error, result) {
        if (error) {
          throw error;
        } else {
          res.json(result);
        }
      });
    },
    post: function (req, res) {
      models.messages.post((req.body.message, req.body.username, req.body.roomname), function (error, result) {
        if (error) {
          throw error;
        } else {
          res.sendStatus(201);
        }
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function (error, result) {
        if (error) {
          throw error;
        } else {
          res.json(result);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, function (error, result) {
        if (error) {
          throw error;
        } else {
          res.sendStatus(201);
        }
      });
    }
  },

  // rooms: {
  //   get: function (req, res) {
  //     models.rooms.get(function (error, result) {
  //       if (error) {
  //         throw error;
  //       } else {
  //         res.json(result);
  //       }
  //     })
  //   },

  //   post: function (req, res) {
  //     models.rooms.post(req.body.roomname, function (error, result) {
  //       if (error) {
  //         throw error;
  //       } else {
  //         res.sendStatus(201);
  //       }
  //     })
  //   }
  // }
};

