const mongoose = require('mongoose');

//Para start o banco 
//$ brew services start mongodb-community@4.4


const url = 'mongodb://localhost:27017/todo';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

module.exports = mongoose;
