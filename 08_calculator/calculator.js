const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return first - second;
};

const sum = function (nums) {
  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  return sum;
};

const multiply = function (nums) {
  let product = 1;
  for (num of nums) {
    product *= num;
  }
  return product;
};

const power = function (base, exponent) {
  return Math.pow(+base, +exponent);
};

const factorial = function (num) {
  let product = 1;
  while (num > 0) {
    product *= num;
    num--;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
