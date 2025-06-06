const { MongoInvalidArgumentError } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 3
    },
  }, {
timestamps: true
  });

  const Users = mongoose.model('Users', usersSchema);

module.exports = Users;