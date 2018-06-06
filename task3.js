function getText(val) {
    var val_div = val % 10;
    if(val_div == 1 && val != 11)
        return 0;
    else if(val_div >= 2 && val_div <= 4)
        return 1;
    else
        return 2;
}
var sec = Number(process.argv[2]) + Number(process.argv[3]);
var h = sec / 3600 ^ 0;
var m = (sec - h * 3600) / 60 ^ 0;
var s = sec - h * 3600 - m * 60;
var hour_text = [" час ", " часа ", " часов "];
var min_text  = [" минута ", " минуты ", " минут "];
var sec_text  = [" секунда", " секунды", " секунд"];
console.log((h?(h+hour_text[getText(h)]):'')+(m?(m+min_text[getText(m)]):'')+s+sec_text[getText(s)]);
