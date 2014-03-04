
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'FAYE LI SI FI', description: 'is pretty cool' })
}