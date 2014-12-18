module.exports = function(d, ext, callback) {
					var fs = require('fs');
					var path = require('path');
					ext = '.' + ext;
					fs.readdir(d, function(err, list) {
									if (err) {console.log('eeeeeeeeeeeeee');
										  return callback(err);
										 }
									var results = [];	
									list.forEach(function(item) {
												if (path.extname(item) === ext) {
															results.push(item);
																}
												    });
									callback(null, results);
									});
					};
