const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gymBackend')
  .then(() =>
    console.log("MongoDB compass database gymBackend sucussfully connected"))
  .catch(err => { console.log(err) });