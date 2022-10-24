// ACTUAL FUNCTION

const middle = function(array) {
  let returnArray = [];
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
};

module.exports = middle;