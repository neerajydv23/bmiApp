var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/BMIcalc');

var userSchema = mongoose.Schema({
  name:String,
  weight: { type: Number, required: true, min: 0 },
  height: { type: Number, required: true, min: 0 },
  bmiResult:String,
}) 

module.exports = mongoose.model('user',userSchema);