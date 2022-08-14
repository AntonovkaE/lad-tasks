// Например загаданное число: 56478 предположение игрока: 52976

// ответ: совпавших цифр не на своих местах - 1 (6), цифр на своих местах - 2 (5 и 7)

// игра ведется до окончания количества ходов либо до отгадывания
const readlineSync = require('readline-sync');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const computerNumber = getRandomInt(999999)
console.log(computerNumber)

readlineSync.setDefaultOptions({limit: [/\D/]})
let numInt = readlineSync.questionInt('Введите число')
console.log(numInt)
