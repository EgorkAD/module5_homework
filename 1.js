let value = prompt('Введите значение:');
let number = +value;

if (typeof number === 'number' && !isNaN(number)) {
  if (number % 2 === 0) {
    console.log('Число чётное');
  } else {
    console.log('Число нечётное');
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}