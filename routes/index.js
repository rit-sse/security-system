
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Alarm only' });
};

exports.admin = function(req, res) {
  res.render('admin', { title: 'Admin' });
};

exports.music = function(req, res){
  res.render('music', { title: 'Musical version' });
};
