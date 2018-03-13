const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


mongoose.connect('mongodb://localhost/shop');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(db) {
  console.log('were connected!');
});



fs.readdirSync('./models')
  .filter(file => path.extname(file) === '.js' && path.basename(file, '.js') !== 'index')
  .forEach(file => {
    let model = require(`./${file}`)(mongoose);
    module.exports[model.modelName] = model;
  });
