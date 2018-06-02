var str = process.argv[1];
var k = Number(process.argv[2]);
var res = "";
for (cnt=0; cnt < str.length; cnt++)
{
    if(str[cnt] > 'А' && str[cnt] < 'я')
        res += str[cnt];
    else
        res += String.fromCharCode(str.charCodeAt(cnt) + k);
}
console.log(res);
