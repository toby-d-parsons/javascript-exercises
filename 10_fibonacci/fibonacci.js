const fibonacci = function(pos) {
    if (pos < 0 ) {
        return "OOPS";
    } else {
        let arr = [0, 1];
        for (i = 0; i <= pos; i++) {
            let fibNum = arr[i] + arr[i+1];
            arr.push(fibNum);
        }
        return arr[pos];    
    }
};


// Do not edit below this line
module.exports = fibonacci;
