
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.admin = function(req, res) {
  res.render('admin', { title: 'Admin' });
};