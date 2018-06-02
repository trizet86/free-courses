var n = Number(process.argv[1]);
var e = Number(process.argv[2]);
var sum = 0;
while(n) {
    sum += Math.pow(n,e);
    n--;
}
console.log(sum);
