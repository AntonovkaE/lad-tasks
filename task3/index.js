// Например загаданное число: 56478 предположение игрока: 52976

// ответ: совпавших цифр не на своих местах - 1 (6), цифр на своих местах - 2 (5 и 7)

// игра ведется до окончания количества ходов либо до отгадывания
const readlineSync = require('readline-sync');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const computerNumber = getRandomInt(999999)
console.log(computerNumber)
const computerNumbers = Array.from(String(computerNumber), Number)

readlineSync.setDefaultOptions({limit: [/\D/]})
let yourInt = -1;
let wrongPlace = [];
let rightNumbers = [];

while (computerNumber !== yourInt) {
  yourInt = readlineSync.questionInt('Введите число');
  if (yourInt === computerNumber) {
    console.log("Вы угадали");
    return computerNumber
  }

  const arrInt =  Array.from(String(yourInt), Number);
  let wrongPlace = [];
  let rightNumbers = [];
  for (let i = (arrInt.length - 1); i<=0; i--) {

    // индекс цифры с конца
    let indexCharacter = computerNumbers.length - 1
    // Есть ли первая цифра в числе комьютера
    let checkingNumber = computerNumbers.indexOf(arrInt[i])
    console.log(`проверим ${checkingNumber}`)
    debugger;
    if (checkingNumber !== -1) {
      //Правильное ли место занимает цифра
      if (computerNumbers[indexCharacter] === arrInt[i]) {
        rightNumbers.push(arrInt[i])
      }
      else {
        wrongPlace.push((arrInt[i]))
      }
    }
    indexCharacter--;
  }

  console.log(`совпавших цифр не на своих местах - ${wrongPlace.length} (${wrongPlace.join(',')}), цифр на своих местах - ${rightNumbers.length} (${rightNumbers.join(',')})`)
}


