// TEST/ASSERTION FUNCTIONS
const eqArrays = function (actual, expected) {
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
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual === expected)) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
}

// ACTUAL FUNCTION

const middle = function(array) {
  let returnArray = []
  let midIndex = 0;

  if (array.length <= 2) {
    return returnArray;
  } else if (array.length % 2 === 0) {
    midIndex = Math.floor(array.length / 2);
    returnArray.push(array[midIndex]);
  } else {
    midIndex = Math.floor((array.length - 1) / 2);
    for (let i = midIndex; i <= midIndex + 1; i++) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}