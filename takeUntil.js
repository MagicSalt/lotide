// assertArraysEqual FUNCTION

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual === expected)) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays FUNCTION

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
        if (!eqArrays(actual[i], expected[i])) {
          return false;
        }
      } else if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

// ACTUAL FUNCTION

const takeUntil = function(array, callback) {
  const returnArray = [];
  for (const item of array) {
    if (!callback(item)) {
      returnArray.push(item);
    } else {
      return returnArray;
    }
  }
};

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);