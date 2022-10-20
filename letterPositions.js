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

// assertArraysEqual FUNCTION

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual === expected)) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== '') {
      if (!Array.isArray(results[letter])) {
        results[letter] + [i];
      } else {
        results[letter].push(1);
      }
    }
  }
  return results;
};

// TEST CODE

assertArraysEqual(letterPositions("hello").e, [1]);