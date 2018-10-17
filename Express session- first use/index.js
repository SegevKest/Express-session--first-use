var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/account.html");
});


// The /bank post will redirect 
router.post('/bank', function(req, res, next) {
  var name=req.body.name;
  var sum=req.body.sum;
  req.session.name=name;
  req.session.sum=sum;
  res.send(`<h3><label>${req.session.name}'s</label> Amount : ${req.session.sum}</h3>
            <p><a href="/add">Add</a>|||<a href="/remove">Remove</a></p>`);

});

// the /add endpoint
router.get('/add', function(req, res, next) {
    var added=req.session.sum;
    req.session.sum=parseInt(added)+1;
    res.send(`<h3><label>${req.session.name}'s</label> Amount : ${req.session.sum}</h3>
    <p><a href="/add">Add</a>|||<a href="/remove">Remove</a></p>`);
});

// the /remove
router.get('/remove', function(req, res, next) {
  var removed=req.session.sum;
  req.session.sum= parseInt(removed)-1;
  res.send(`<h3><label>${req.session.name}'s</label> Amount : ${req.session.sum}</h3><p><a href="/add">Add</a>|||<a href="/remove">Remove</a></p>`);
});


module.exports = router;
