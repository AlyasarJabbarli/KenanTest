// function sayHello(name){
//     return 'Salam' + name
// }


// let sayHello = function(name){
//     return 'Salam' + name
// }

// sayHello()

// let sayHello = (name) => "Salam" + name


let car1 = 'Mercedes'
let car2 = 'BMW'
let car3 = 'Toyota'
let car4 = 'Lexus'
let car5 = 'Ferrari'

let array = ['Mercedes', 'BMW', 'Toyota', 'Lexus', 'Ferrari', 'Audi']

console.log(array);
console.log(array.length);
console.log(array[1]);
console.log(array[array.length-1]);

array.push('Fiat')
console.log(array);
array.unshift('Volvo')
console.log(array);
array.pop()
console.log(array);
array.shift()
console.log(array);


let numbers = [1, 5, 2, 8, 9, 3, 7, 4]

let kicikdenBoyuke = numbers.sort((a, b) => a - b)
let boyukdenKiciye = numbers.sort((a, b) => b - a)
console.log(kicikdenBoyuke);
console.log(boyukdenKiciye);

let filter = numbers.filter((num) => num > 5)
console.log(filter);

let fnd = array.find(f => f === 'BMW')
console.log(fnd);
let fndnd = array.findIndex(f => f === 'Porsche')
console.log(fndnd);
let fruits = ['apple', 'orange', 'GRAPE']
let cnct = numbers.concat(array, fruits)

console.log(cnct);


let jn = array.join("-")
console.log(jn);

let splt = jn.split("-")
console.log(splt);
