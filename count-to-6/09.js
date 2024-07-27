module.exports = (str, n = str.length) => {
  return `${str}${"!".repeat(n)}`;
};
