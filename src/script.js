const out = document.querySelector("#passwd");
const len = document.querySelector("#len");
const str = document.querySelector("#strength");


function start(){
    out.innerHTML = generatePassword(len.value , parseInt(str.options[str.options.selectedIndex].value));
    out.value = generatePassword(len.value , parseInt(str.options[str.options.selectedIndex].value));
}


function generatePassword(length, strength) {
    var retVal = "";
    switch(strength){
        case 1:{
            var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
        }
        case 2:{
            var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#][$£%&()=?^{}*";
            break;
        }
    }


    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
}
