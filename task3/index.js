const readlineSync = require('readline-sync');

const heroHealth = readlineSync.question('Ваше начальное здоровье? ');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function checkMonsterHealth (health) {
    if (health < 0) {
        console.log("Монстр мертв")
        return ("Вы выиграли")
    }
}

function decreaseCooldown (obj) {
    for (key in obj) {
        if (obj[key] > 0) {
            obj[key] --
        }
    }
}

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

function checkHeroHealth (health) {
    if (health < 0) {
        console.log("Game over")
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
    moves_cooldown: {
        0: 0,
        1: 0,
        2: 0
    }
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
        1: 0,
        2: 0,
        4: 0
    },
}

const moves = [hero.moves[0].name, hero.moves[1].name, hero.moves[2].name, hero.moves[3].name]

checkHeroHealth(heroState.health)

while (heroState.health > 0 && monsterState.health > 0) {
    // Выбор хода
    let randomStep = monster.moves[getRandomInt(monster.moves.length)];
    while (monsterState.moves_cooldown[randomStep] > 0) {
        randomStep = monster.moves[getRandomInt(monster.moves.length)];
    }
    console.log(`ход противника - ${randomStep.name}`)
    decreaseCooldown(monsterState.moves_cooldown)

    let movesChoice = readlineSync.keyInSelect(moves, 'Ваш ход?');
    console.log(`Вы выбрали - ${moves[movesChoice]}`)
    while (heroState.moves_cooldown[movesChoice] > 0) {
        console.log("Ход недоступен")
        movesChoice = readlineSync.keyInSelect(moves, 'Выберите новый ход?');
        console.log(`Вы выбрали - ${moves[movesChoice]}`)
    }
    decreaseCooldown(heroState.moves_cooldown)

    heroState.moves_cooldown[movesChoice] = hero.moves[movesChoice].cooldown


    const magicDmgHero = checkMagicDmg(randomStep.magicDmg, hero.moves[movesChoice].magicArmorPercents)
    const physicDmgHero = checkPhysicDmg(randomStep.physicalDmg, hero.moves[movesChoice].physicArmorPercents)

    heroState.health = heroState.health - magicDmgHero - physicDmgHero

    const magicDmgMonster = checkMagicDmg(hero.moves[movesChoice].magicDmg, randomStep.magicArmorPercents)
    const physicDmgMonster = checkPhysicDmg(hero.moves[movesChoice].physicalDmg, randomStep.physicArmorPercents)


    monsterState.health = monsterState.health - magicDmgMonster - physicDmgMonster
    checkHeroHealth(heroState.health)
    checkMonsterHealth(monsterState.health)

    console.log(`Ваше здоровье ${heroState.health}, здоровье монстра - ${monsterState.health}`)
}





