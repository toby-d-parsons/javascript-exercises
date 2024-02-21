const repeatString = function(string, num) {
    let stringNew = "";
    for (i = 1; i <= num; i++) {
        stringNew += string;
    }
    if (num < 0) {
        stringNew = "ERROR";
    }
    return stringNew;
}

// Do not edit below this line
module.exports = repeatString;
