const http = require("q-io/http");

http
  .request("http://localhost:7000")
  .then((userId) => http.request(`http://localhost:7001/${userId}`))
  .then(console.log)
  .catch(console.error);
