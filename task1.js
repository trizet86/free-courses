var n = Number(process.argv[2]);
var sum = 0;
while(n) {
    sum += n**Number(process.argv[3]);
    n--;
}
console.log(sum);
