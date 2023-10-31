
const array = [1, 2, 3, 4, 5];
const firstElement = array[0];
const allElementsAreEqual = array.every(element => element === firstElement);

console.log(allElementsAreEqual);