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
let yourInt;
let wrongPlace = 0;
let rightNumbers = [];

while (computerNumber !== yourInt) {
  yourInt = readlineSync.questionInt('Введите число');
  if (yourInt === computerNumber) {
    console.log("Вы угадали");
    return computerNumber
  }
  const arrInt = yourInt.split()
  for (let i = 0; i<arrInt.length; i++) {
    // индекс цифры с конца
    let indexCharacter = arrInt.length - i;
    // Есть ли первая цифра в числе комьютера
    let checkingNumber = computerNumber.indexOf(arrInt[i])
    if (checkingNumber !== -1) {
      //Правильное ли место занимает цифра
      if (computerNumber[indexCharacter] === arrInt[i]) {
        rightNumbers.push(arrInt[i])
      }
      else {
        wrongPlace++
      }
    }
  }
}


