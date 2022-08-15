const readlineSync = require('readline-sync');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const computerNumber = getRndInteger(100, 999999)
console.log(computerNumber)
const computerNumbers = Array.from(String(computerNumber), Number)

let yourInt = -1;12

while (computerNumber !== yourInt) {
    yourInt = readlineSync.questionInt('Введите число');
    if (yourInt === computerNumber) {
        console.log(`Вы угадали! Число - ${ yourInt }`);
        return computerNumber
    }
    const arrInt = Array.from(String(yourInt), Number);
    let wrongPlace = [];
    let rightNumbers = [];
    for (let i = 0; i < arrInt.length; i++) {
        // индекс цифры компьютера
        let isCharInComputerNumb = (computerNumbers.indexOf(arrInt[i])) === -1 ? false : true;
        // Пересчет индекса циры компьютера, если количество цифр в числах отличается
        let indexCharacter = computerNumbers.length + i - arrInt.length;
        if (isCharInComputerNumb) {
            //Правильное ли место занимает цифра
            if (computerNumbers[indexCharacter] === arrInt[i]) {
                rightNumbers.push(arrInt[i])
            } else {
                wrongPlace.push((arrInt[i]))
            }
        }
    }
    console.log(`совпавших цифр не на своих местах - ${ wrongPlace.length } (${ wrongPlace.join(',') }), цифр на своих местах - ${ rightNumbers.length } (${ rightNumbers.join(',') })`)
}


