var express = require('express');
var router = express.Router();
const User = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/calculate', async (req, res) => {
  try {
    const { name, weight, height } = req.body;
    const bmiValue = (weight / (height * height)) * 703;

    let bmiResult;
    if (bmiValue < 18.5) {
      bmiResult = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      bmiResult = 'Normal weight';
    } else {
      bmiResult = 'Overweight';
    }

    const user = new User({ name, weight, height, bmiResult });
    await user.save();

    res.render('result', { name, bmiResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
