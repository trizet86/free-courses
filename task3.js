function getText(val) {
    var val_div = val % 10;
    if(val_div == 1)
        return 0;
    else if( (val < 10 || val > 20) && (val_div >= 2 && val_div <= 3) )
        return 1;
    else
        return 2;
} 

var sec = Number(process.argv[1]) + Number(process.argv[2]);
var h = sec / 3600 ^ 0;
var m = (sec - h * 3600) / 60 ^ 0;
var s = sec - h * 3600 - m * 60;

var hour_text = ["час", "часа", "часов"];
var min_text  = ["минута", "минуты", "минут"];
var sec_text  = ["секунда", "секунды", "секунд"];
console.log(h + ' ' + hour_text[getText(h)] + ' ' + m + ' ' + min_text[getText(m)] + ' ' + s + ' ' + sec_text[getText(s)]);
