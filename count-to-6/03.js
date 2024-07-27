const strs = process.argv.slice(2);

console.log(
  `[${strs.join(",")}] becomes "${strs
    .map((str) => str[0])
    .reduce((acc, char) => acc + char, "")}"`
);
