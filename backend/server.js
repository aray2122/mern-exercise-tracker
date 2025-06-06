const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mern_exercise_tracker')
.then(() => console.log('Connected to MongoDB (localhost)'))
.catch((err) => console.error('MongoDB connection error:', err));


//import the files from the routes folder
//these files will contain the endpoints for the exercises and users
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users'); 
//use the imported files as middleware for the app
//this will allow the app to handle requests to the endpoints defined in the imported files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 