const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  res.render('logged', {username: req.user.displayName, image: req.user.photos});
  
});


router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;