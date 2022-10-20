// assertEqual FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION

const findKeyByValue = function(searchObject, keySearch){
  for (const key of Object.keys(searchObject)) {
    if (searchObject[key] === keySearch) {
      return key;
    }
  }
};

// TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);