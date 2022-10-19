const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
};

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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);