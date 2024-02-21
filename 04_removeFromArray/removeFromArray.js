// *improved solution
// create empty array (returnArray)
// if theArgs does not appear in array, add to returnArray
// return returnArray

const removeFromArray = function(originalArray, ...theArgs) { // ... makes remaining parameters into an array
    let returnArray = [];
    for (values of originalArray) { // for (values of genericArray) repeats the following for all values within the array. Values can be used to reference the array item
        if(theArgs.indexOf(values) == -1) { // .indexOf searches array for the value. False = -1
            returnArray.push(values);
        }
    }
    return returnArray;
}





/* // Original solution

const removeFromArray = function() {
    let functionArray = Array.from(arguments); // Allows you to know how many arguments may be passed
    let mainArray = functionArray[0]; // Separates original array from new
    let removeArray = functionArray.slice(1); // Separates arguments from original array

    for (element of removeArray) {
        if (mainArray.indexOf(element) !== -1) { // If condition ignores non-present values. index.Of defaults to -1 if false
            do { // Do statement allows statement to loop in case multiple of same value need to be removed
                mainArray.splice(mainArray.indexOf(element), 1);
            } while (mainArray.indexOf(element) !== -1)
        } 
    }
    return mainArray;
}

*/

// Do not edit below this line
module.exports = removeFromArray;
