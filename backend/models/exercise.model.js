const { MongoInvalidArgumentError } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    duration: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true, default: Date.now }
    }, {
  }, {
timestamps: true
  });

  const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

//once Schemas are created, we create endpoints after creating a "routes" folder for the APIS 
//so that server can handle CRUD operations (create, read, update, delete) for the exercises and users
//we will use the "express" package to create the endpoints and the "mongoose" package to interact with the MongoDB database