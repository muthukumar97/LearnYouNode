var fs = require('fs');
var a,b=0;
var filename = process.argv[2];
fs.readFile(filename, function(err, data) {
					a=String(data);
					for (char in a) {
					if(a[char]=='\n')
					b++;
						}
console.log(b);
});
