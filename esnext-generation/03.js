module.exports = function generate(isEven) {
  let count = isEven ? 2 : 1;

  return {
    next(swap) {
      count -= swap ? 1 : 0;
      const result = { value: count };
      count += 2;
      return result;
    },
  };
};
