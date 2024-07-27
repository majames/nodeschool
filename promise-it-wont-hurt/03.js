const promise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("REJECTED!")), 300);
});

promise.then(undefined, (err) => console.log(err.message));
