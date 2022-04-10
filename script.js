"use strict"

console.log('Я учу JS');
let ghay = 25;
//ВЫВОД в командную строку "я уч
ghay = ghay + 50;
console.log(ghay);

/*
let five = 1;
while (five < 6) {
    console.log(five);
    five++;
};
let ficus = 1;
do {
    console.log(ficus);
    ++ficus;
    if (ficus == 50) {
        console.log(`Фикус достиг ${ficus}см`)
        break
    };
} while (true);
let num = 0;
while (num < 3) {
    console.log(`Число: ${num}`);
    num++;
}

firstOne: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (size == 1) break firstOne;
    }
}
let fiveTwo = 1;
for (; fiveTwo < 6; fiveTwo++) {
    console.log(fiveTwo);
}
*/
function showBlock(Block) {
    if (Block) {
        console.log('Такой блок существует!')
    } else {
        console.log('Такого блока нет')
    }
}

let block;

function cheakBlock(blockId) {
    block = document.querySelector("." + blockId);
    showBlock(block);
}
let bodytop = "bodytop";
cheakBlock(bodytop);

/*
let number3;
function cheakNumber(number1, number2) {
number3 = number1 ** number2;
console.log(`${number1} в степени ${number2} ровно ${number3} `)

}
cheakNumber(2, 10)


function calcNumber(num1) {
num1++
while (true) {
    if (num1 % 2 == 0) {
        console.log(`Число ${num1} четное! Прибавляем 10`)
        num1 += 10;
    } else {
        console.log(`Число ${num1} НЕ четное! Вычитаем 5`)
        num1 -= 5;
    }
    if (num1 > 100) {
        console.log(`Ваше число в итоге равно: ${num1}`)
        break
    }
}
}
calcNumber(2)

function calcSumm(numOne, numTwo) {
if (numTwo === 1) {
    return numOne;
} else {
    console.log(`Сейчас ваше число равно: ${numOne}`);
    return numOne + calcSumm(numOne, numTwo - 1);
}
}
console.log(calcSumm(20, 3));
*/
/*------------------------------------Объекты-----------------------------------*/
let userInfo = {
    name: 'Вася',
    age: 30,
}

Object.assign(userInfo, { name: 'Лена' });

console.log(userInfo.name);

userInfo.name = 'Лена';

console.log(userInfo.name);

delete userInfo.name;

if ('name' in userInfo) {
    console.log(`Ключ name существует!`)
} else {
    console.log(`Ключ "name" НЕсуществует!`)
}

let fuck = Symbol('love')
let userPack = {
    [fuck]: "Некое значение"
}
console.log(userPack[fuck]);

function makeUserInfo(nameU, ageU, positionU, handsomeU) {
    return {
        name: nameU,
        age: ageU,
        position: positionU,
        handsome: handsomeU,
    };
};

let user = makeUserInfo("Albina", 18, "Не будет говорить", "У меня красивые глаза");

console.log(`Её зовут ${user.name}, ей ${user.age} лет и она ${user.position} и она оценивает свою красоту так: ${user.handsome}`);

/*------------------------------------Числа-----------------------------------*/
console.log(Math.max(10, 58, 39, -150, 0));

let gath = 58.858;

console.log(gath.toFixed(0));
gath = +gath;

console.log(Math.floor(gath))

let valur = "135.58px"
console.log(parseFloat(valur))


let vhgf = 58 + 'vlad';
if (isNaN(vhgf)) {
    console.log(`Результат выражения NaN`)
}
/*------------------------------------Строки-----------------------------------*/