// let rand = Math.floor(Math.random() * 20) + 1;
// console.log(rand);

// let x = 1
// let y = 5
// let z = 10

// let min = Math.min(y, x, z)
// console.log(min);
// let max = Math.max(x, y, z)
// console.log(max);


// let greet = 'Hello World!'


// console.log(greet.replace("l", "r"));


// let a  = 30
// let b  = 30

// if(a > b){
//     console.log('bigger one');
// }else if(a < b){
//     console.log('smaller one');
// }else{
//     console.log('equal one');
// }


let a = 20
let b = 50
let c = 10

if(a > b && c > b){
    console.log('B smaller one');
}else if (a < b && a < c){
    console.log('A smaller one');
}else if (c < b && c < a){
    console.log('C smaller one');
}

if(a > b || a > c){
    console.log(a);
}else if (a < b || a < c){
    console.log(b);
}


let tr = a > b ? "A bigger" : b > a  ? 'B bigger' : 'Equal'

