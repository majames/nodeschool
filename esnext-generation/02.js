module.exports = function filterForNumbers(iterable) {
  const nums = [];
  for (const val of iterable) {
    if (typeof val === "number") {
      nums.push(val);
    }
  }

  return nums;
};
