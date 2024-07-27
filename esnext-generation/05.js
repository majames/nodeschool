module.exports = function* multiplier() {
  let count = 1;
  let mult = 1;

  while (true) {
    mult = yield count * (mult || 1);
    count++;
  }
};
