var l = process.argv.length;
var a;
a = 0;
for( var i = 2; i < l; i++)
{
	a = a + Number(process.argv[i]);
}
console.log(a);
