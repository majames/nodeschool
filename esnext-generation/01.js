// ./node_modules/.bin/esnext-generation verify ./esnext-generation/01.js

module.exports = function makeCounter(someObj) {
  let count = 0;

  someObj.next = function () {
    if (count >= 10) {
      return { value: count, done: true };
    }

    count++;
    return { value: count, done: false };
  };
};
