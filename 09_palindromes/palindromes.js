const palindromes = function (string) {
    let forwardArray = string
        .toLowerCase()
        .split("")
        .filter((item) => (/[a-zA-Z]/.test(item) || /^-?\d+$/.test(item)));
    let backwardArray = forwardArray.slice().reverse();
    return (forwardArray.join("") === backwardArray.join(""));
};

// Do not edit below this line
module.exports = palindromes;