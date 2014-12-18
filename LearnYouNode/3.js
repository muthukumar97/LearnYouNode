var fs = require('fs');
var a,b=0;
a=String(fs.readFileSync(process.argv[2]));
for (char in a) {
if(a[char]=='\n')
b++;
}
console.log(b);
