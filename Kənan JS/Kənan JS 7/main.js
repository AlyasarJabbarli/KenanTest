function makeTitle(word) {
  // console.log(word);

  let array = word.split(" ");
  let newArr = [];
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let newElem = element.replace(element[0], element[0].toUpperCase());
    newArr.push(newElem);
  }
  console.log(array, newArr);
  console.log(newArr.join(" "));
}
makeTitle("This is a title");
makeTitle("capitalize every word");
makeTitle("I Like Pizza");
makeTitle("PIZZA PIZZA PIZZA");

function allTruthy(array) {
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case false:
        return false;
      case "":
        return false;
      case 0:
        return false;
      case null:
        return false;
      case NaN:
        return false;
      case undefined:
        return false;
    }
  }

  return true
}

console.log(allTruthy([true, true, true]));
console.log(allTruthy([true, false, true]) );
console.log(allTruthy([5, 4, 3, 2, 1, 0]));
