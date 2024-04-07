const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, nextValue) => {
    return acc + nextValue;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((acc, nextValue) => {
    return acc * nextValue;
  }, 1)
};

const power = function(a, b) {
  let c = 1;
  let i = 0;
  while (i < b) {
    c = a * c
    i++;
  }
  return c;
};

const factorial = function(num) {
  let factNum = 1;
  for (; num > 0; num--) {
    factNum *= num;
  }
  return factNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
