const CITIES = [
  {
    name: "Kathmandu",
    rating: 1,
  },
  {
    name: "Pokhara",
    rating: 3,
  },
  {
    name: "Biratnagar",
    rating: 2,
  },
  {
    name: "Dharan",
    rating: 4,
  },
  {
    name: "Birgunj",
    rating: 3,
  },
];

// let requiredCity = [];
// let citiesHigherThanThree = CITIES.map((city) => {
//   if (city.rating >= 3) {
//     requiredCity.push(city);
//   }
// });

// console.log(citiesHigherThanThree);
// console.log(requiredCity);

let main = document.querySelector(".main");

CITIES.map((city) => {
  const cityName = document.createElement("p");
  if (city.rating >= 3) {
    main.appendChild(cityName);
    cityName.innerHTML = `${city.name}`;
  }
});
