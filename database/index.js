const mongoose = require('mongoose');
mongoose.connect('mongodb://listingdatabase/listings', {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost/listings', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('Connected to database')
})

module.exports = db;