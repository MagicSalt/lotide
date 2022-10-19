// assertEqual FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const results = {};
  for (const characters of string) {
    if (characters !== '') {
      if (results[characters]) {
        results[characters] += 1;
      } else {
        results[characters] = 1;
      }
    }
  }
  return results;
}

const checkString = 'lighthouse in the house';
const result1 = countLetters(checkString);

// TEST CODE

assertEqual(result1["l"], 1); // should pass
assertEqual(result1["i"], 2); // should pass
assertEqual(result1["g"], 3); // should fail