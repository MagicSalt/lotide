const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('returns ["Lighthouse", "Labs"] for ["Yo Yo","Lighthouse", "Labs"]', () => {
    const inputArray = ['Yo Yo', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(inputArray), ['Lighthouse', 'Labs']);
  });
  
  it('returns ["Darren", "Lin"] for ["My", "name", "is", "Darren", "Lin"]', () => {
    const inputArray = ["My", "name", "is", "Darren", "Lin"];
    assert.deepEqual(tail(inputArray), ['name', 'is', 'Darren', 'Lin']);
  });
  
  it('returns [2, 3, 4] for [1, 2, 3, 4]', () => {
    const inputArray = [1, 2, 3, 4];
    assert.deepEqual(tail(inputArray), [2, 3, 4]);
  });

});