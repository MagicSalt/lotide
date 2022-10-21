// assertEqual FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION

const findKey = (object, callback) => {
  for (const key in object) {
    console.log(object[key]);
    if (callback(object[key])) {
      return key;
    }
  }
};

// TEST CODE

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(results, "noma");