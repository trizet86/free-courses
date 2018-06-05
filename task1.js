function getPow(num, step)
{
    if(step <= 0)
        return 1;
    var pow = num;
    while(--step)
        pow *= num;
    return pow;
}
var n = Number(process.argv[2]);
var e = Number(process.argv[3]);
var sum = 0;
while(n) {
    sum += getPow(n,e);
    n--;
}
console.log(sum);
