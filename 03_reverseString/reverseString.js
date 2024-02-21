const reverseString = function(originalString) {
    const stringArray = [originalString.slice(0,1)];
    for (let i = 1; i < originalString.length; i++) {
        stringArray.push(originalString.slice(i, (i + 1)));
    }
    let arrayReversed = stringArray.toReversed();
    return arrayReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
