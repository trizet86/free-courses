var n = Number(process.argv[2]);
var e = Number(process.argv[3]);
var sum = 0;
while(n) {
    sum += n**e;
    n--;
}
console.log(sum);
