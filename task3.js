function getText(val) {
    if(val > 10 && val < 20)
        return 2;
    var val_div = val % 10;
    if(val_div == 1)
        return 0;
    else if(val_div >= 2 && val_div <= 4)
        return 1;
    return 2;
}
var sec = Number(process.argv[2]) + Number(process.argv[3]);
var h = sec / 3600 ^ 0;
var m = (sec - h * 3600) / 60 ^ 0;
var s = sec - h * 3600 - m * 60;
var hour_text = [" час ", " часа ", " часов "];
var min_text  = [" минута ", " минуты ", " минут "];
var sec_text  = [" секунда", " секунды", " секунд"];
console.log((h?(h+hour_text[getText(h)]):'')+(m?(m+min_text[getText(m)]):'')+(s?(s+sec_text[getText(s)]):''));
