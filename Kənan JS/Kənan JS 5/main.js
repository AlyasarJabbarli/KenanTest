let cars = ["Mercedes", "BMW", "Honda", "Porsche", "Maserati"];

let jn = cars.join("-");
console.log(jn);
let splt = jn.split("");
console.log(splt);

let ncl = cars.includes("BMW");
console.log(ncl);

let slc = cars.slice(0, 3);

console.log(slc);
console.log(cars);
let splc = cars.splice(2, 2, "Lamborghini");

console.log(splc);
console.log(cars);

let userName = "Kenan";
let userSurname = "Memmedli";
let userAge = 18;

let user2Name = "Anonim";
let user2Surname = "Anonymus";
let user2Age = 20;

let user = {
  name: "Kenan",
  surname: "Memmedli",
  age: 18,
  cars: ["Volkswagen", "Fiat", "Ferrari"],
  fullName: function () {
    return this.name + " " + this.surname;
  },
  relatives: [
    {
      name: "Memmed",
      position: "DayiOglu",
    },
    {
      name: "Ehmed",
      position: "BibiOglu",
    },
    {
      name: "Semmed",
      position: "EmiOglu",
    },
  ],
};

let user2 = {
  name: "Anonim",
  surname: "Anonymus",
  age: null,
};

// console.log(userName); X

console.log(user.name);
console.log(user.age);

console.log(user.cars[1]);

console.log(user.fullName());

console.log(user.relatives[0].name);

function getVoteCount(object) {
  return object.upVotes - object.downVotes;
}

console.log(getVoteCount({ upVotes: 13, downVotes: 0 }));
console.log(getVoteCount({ upVotes: 2, downVotes: 33 }));

let drinks = [
  {
    name: "Lemonade",
    price: 50,
  },
  {
    name: "Soda",
    price: 20,
  },
  {
    name: "Sprite",
    price: 60,
  },
];

const drinks1 = [
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}, 
	{name: 'peach', price: 23}
];

const sorted1 = [
	{name: 'peach', price: 23},
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}
];

const drinks2 = [
	{name: 'water', price: 120}, 
	{name: 'lime', price: 80}, 
	{name: 'peach', price: 90}
];

const sorted2 = [
	{name: 'lime', price: 80},
	{name: 'peach', price: 90}, 
	{name: 'water', price: 120}
];

function sortDrinkByPrice(drinks) {
  let srt = drinks.sort((a, b) => a.price - b.price);
  return srt;
}

console.log(sortDrinkByPrice(drinks));
console.log(sortDrinkByPrice(drinks1));
console.log(sortDrinkByPrice(sorted1));
console.log(sortDrinkByPrice(drinks2));
console.log(sortDrinkByPrice(sorted2));

