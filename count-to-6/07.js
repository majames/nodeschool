module.exports = (...args) => {
  return args.reduce((sum, val) => sum + val, 0) / args.length;
};
