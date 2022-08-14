const readlineSync = require('readline-sync');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const computerNumber = getRandomInt(999999)
console.log(computerNumber)
const computerNumbers = Array.from(String(computerNumber), Number)

readlineSync.setDefaultOptions({limit: [/\D/]})
let yourInt = -1;

while (computerNumber !== yourInt) {
  yourInt = readlineSync.questionInt('Введите число');
  if (yourInt === computerNumber) {
    console.log(`Вы угадали число - ${yourInt}`);
    return computerNumber
  }
  const arrInt =  Array.from(String(yourInt), Number);
  let wrongPlace = [];
  let rightNumbers = [];
  for (let i = 0; i<arrInt.length; i++) {
    // индекс цифры компьютера
    let isCharinComputerNumb = (computerNumbers.indexOf(arrInt[i])) === -1 ? false : true;
    let indexCharacter = computerNumbers.length + i - arrInt.length;
    if (isCharinComputerNumb) {
      //Правильное ли место занимает цифра
      if (computerNumbers[indexCharacter] === arrInt[i]) {
        rightNumbers.push(arrInt[i])
      }
      else {
        wrongPlace.push((arrInt[i]))
      }
    }
  }
  console.log(`совпавших цифр не на своих местах - ${wrongPlace.length} (${wrongPlace.join(',')}), цифр на своих местах - ${rightNumbers.length} (${rightNumbers.join(',')})`)
}


