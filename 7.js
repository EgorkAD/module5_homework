const array = [1, 2, 3, 4, 5, 0, null, 'a', '@'];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

array.forEach(element => {
  if (typeof element === 'number') {
    if (element === 0) {
      zeroCount++;
    } else if (element % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
});

console.log(Even count: ${evenCount});
console.log(Odd count: ${oddCount});
console.log(Zero count: ${zeroCount});

// в чем ошибка ? //