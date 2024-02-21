const sumAll = function(a, b) {
    if ((Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0)) {
        let lowNum = Math.min(a, b);
        let highNum = Math.max(a, b);
        let returnNum = 0;
        for (; lowNum <= highNum; lowNum++) {
            returnNum += lowNum;
        }
        return returnNum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
