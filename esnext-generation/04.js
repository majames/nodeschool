module.exports = function* generate(isEven) {
  // `yield` either odd or even numbers based on `isEven`
  let count = isEven ? 2 : 1;
  while (true) {
    yield count;
    count += 2;
  }
};
