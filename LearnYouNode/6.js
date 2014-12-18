var mymodule = require('./6+');
var a=process.argv[2], b=process.argv[3];
mymodule(a,b, function(err, results) {
					if (err) {
						 console.log('error')
						}
					results.forEach(function(item) {
									console.log(item)
									});	
					});
