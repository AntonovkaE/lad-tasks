const readlineSync = require('readline-sync');

const heroHealth = readlineSync.question('Ваше начальное здоровье? ');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function checkHealth (health) {
    if (health) {
        console.log("game over")
        return ("Вы проиграли")
    }
}

const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0,     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3,
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
}

const monsterState = {
    health: monster.maxHealth,
    move_1_cooldown: 0,
    move_2_cooldown: 3,
    move_3_cooldown: 2,
}

const hero = {moves: [
    {
        "name": "Удар боевым кадилом",
        "physicalDmg": 2,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 50,
        "cooldown": 0
    },
    {
        "name": "Вертушка левой пяткой",
        "physicalDmg": 4,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 4
    },
    {
        "name": "Каноничный фаербол",
        "physicalDmg": 0,
        "magicDmg": 5,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 3
    },
    {
        "name": "Магический блок",
        "physicalDmg": 0,
        "magicDmg": 0,
        "physicArmorPercents": 100,
        "magicArmorPercents": 100,
        "cooldown": 4
    },
]}

const heroState = {
    health: heroHealth,
    moves_cooldown: {
        0: 0,
        1: 4,
        2: 3,
        4: 4
    },
}

checkHealth(heroState.health)


// Выбор хода
const randomStep = monster.moves[getRandomInt(monster.moves.length)];
console.log(`ход противника - ${randomStep.name}`)

const moves = [hero.moves[0].name, hero.moves[1].name, hero.moves[2].name, hero.moves[3].name]
const movesChoice = readlineSync.keyInSelect(moves, 'Ваш ход?');
console.log(`Вы выбрали - ${moves[movesChoice]}`)


const checkDmg = (dmg, armor) => {
    return (dmg*(1 - armor/100))
}

const checkPhysicDmg = (dmg, armor) => {
    console.log(`ущерб физический здоровью -  ${checkDmg(dmg, armor)}`)
    return checkDmg(dmg, armor)
}

const checkMagicDmg = (dmg, armor) => {
    console.log(`ущерб магический здоровью -  ${checkDmg(dmg, armor)}`)
    return checkDmg(dmg, armor)
}

const magicDmgHero = checkMagicDmg(randomStep.magicDmg, hero.moves[movesChoice].magicArmorPercents)
const physicDmgHero = checkPhysicDmg(randomStep.physicalDmg, hero.moves[movesChoice].physicArmorPercents)

hero.state.health = heroState.health - magicDmgHero - physicDmgHero


checkHealth(heroState.health)



