'use strict';

// Задание 1

let temperatureC = Number(prompt('Задайте температуру в градусах по Цельсию'));
alert('Температура в градусах по Фаренгейту: ' + ((9/5) * temperatureC + 32));

// Задание 2

let admin;
let name;

name = 'Василий';
admin = name;
console.log(admin);

// Задание 3

// 1) Складываются числа, получается число 10 + 10 = 20
// 2) складывается число и строка, получается строка 20 + "10" = "20" + "10" = "2010"
console.log(10 + 10 + "10"); 

// 1) складывается число и строка, получается строка 10 + "10" = "10" + "10" = "1010" 
// 2) складывается число и строка, получается строка "1010" + 10 = "1010" + "10" = "101010"
console.log(10 + "10" + 10); 

// +"10" преобразует строковое значение в числовое, в итоге складываем числа 10+10+10=30
console.log(10 + 10 + +"10");

// -"" преобразуется в число -0, 10 / -0 = -Infinity (минус бесконечность)
console.log(10 / -"");

// +"2,5" не может преобразовать значение в число, получеам нечисловое значение NaN, 10 / NaN = NaN
console.log(10 / +"2,5");

// Задание 4

/*
let mode = "normal";    // Правильно
let my_valu3 = 102;     // Правильно, но некорректно, не понятно назначение переменной
let 3my_value3 = "102"; // Неправильно. Имя переменной не должно начинаться с числа.
let __hello__ = "world";// Правильно, но название не соответствует содержимому
let $$$ = "money";      // Правильно, но некорректно, не понятно назначение переменной
let !0_world = true;    // Неправильно. Имена переменных могут состоять только из букв, цифр (0-9), символа доллара ($) и подчеркивания (_)
*/