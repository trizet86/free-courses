var str = process.argv[2];
var k = Number(process.argv[3]);
var eng = "abcdefghijklmnopqrstuvwxyz";
var res = "";
for (cnt=0; cnt < str.length; cnt++)
{
    var pos = eng.indexOf(str[cnt].toLowerCase());
    if(pos != -1)
        res += (str[cnt].toLowerCase() == str[cnt]) ? eng[(pos + k) % eng.length] : (eng[(pos + k) % eng.length]).toUpperCase();
    else
        res += str[cnt];
}
console.log(res);
