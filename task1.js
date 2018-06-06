var n = Number(process.argv[2]);
var e = Number(process.argv[3]);
var sum = 0;
while(n) {
    sum += Math.pow(n,e);
    n--;
}
console.log(sum);
