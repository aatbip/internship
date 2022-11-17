// const https = require("https");

// const start = Date.now();

// function doRequest() {
//   https
//     .request("https://www.google.com", (res) => {
//       res.on("data", () => {});

//       res.on("end", () => {
//         console.log(Date.now() - start);
//       });
//     })
//     .end();
// }

// doRequest();
// doRequest();
// doRequest();

//node has 4 thread pools by default.
//lib uv which provides multithreading

process.env.UV_THREADPOOL_SIZE = 1;

const crypto = require("crypto");

const start = Date.now();

crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});
