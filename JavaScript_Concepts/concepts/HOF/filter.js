// const CITIES = [
//   {
//     name: "Kathmandu",
//     rating: 1,
//   },
//   {
//     name: "Pokhara",
//     rating: 3,
//   },
//   {
//     name: "Biratnagar",
//     rating: 4,
//   },
//   {
//     name: "Dharan",
//     rating: 4,
//   },
//   {
//     name: "Birgunj",
//     rating: 3,
//   },
// ];

// let ratingHigherThanThree = CITIES.filter((city) => city.rating >= 3);
// console.log(ratingHigherThanThree);

function processThis(message, callback) {
  console.log("Running function first with message: " + message);

  if (typeof callback == "function") callback();

  console.log("ananta");
}

processThis("Hello World", function callFunction() {
  console.log("This is a callback function.");
});
