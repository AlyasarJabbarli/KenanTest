let array = ["Mercedes", "BMW", "AUDI", "Nissan", "Toyota", "Honda", "Lexus"];

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// for(let  i = 0; i < array.length; i++){
//     let element = array[i]
//     console.log(element);
// }

for (let element of array) {
  console.log(element);
}

for (let index in array) {
  console.log(index);
}

array.forEach((elem) => console.log(elem));
array.map((elem) => console.log(elem));

let i = 10;
while (i < 10) {
  i++;
  console.log("Salam");
}

do {
  console.log("Do Salam");
} while (i > 10);

let user = {
  name: "John",
  surname: "Wick",
  age: 45,
  cars: ["Ford Mustang", "BMW", "AUDI", "Nissan", "Toyota", "Honda", "Lexus"],
};

console.log(user.length);

for (let index in user) {
  console.log(user[index]);
}

for (let element of Object.entries(user)) {
  console.log(element);
}
for (let element of Object.keys(user)) {
  console.log(element);
}

for (let element of Object.values(user)) {
  console.log(element);
}

function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number;i++ ) {
    newArray.push(i);
  }

  return newArray;
}

printArray(3);

function calculateExponent(n1, n2){
    for(let i = 1; i < n2; i++){
        n1 *= n2 
    }

    return n1
}


console.log(calculateExponent(5, 5) );