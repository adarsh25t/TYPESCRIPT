"use strict";
// type aliases
// literal type
let myName;
//myName = 'hellan'  error -> only add adarsh
let username;
username = "three";
//functions 
/*
    - void - means function did't return anything
*/
const sum = (a, b) => {
    return a + b;
};
const Mylog = (message) => {
    console.log(message);
};
Mylog("hello !");
Mylog(sum(10, 3));
const substration = function (a, b) {
    return a - b;
};
const mathAdd = (a, b) => {
    return a + b;
};
console.log(mathAdd(1, 4));
const mathDiv = (a, b) => {
    return a / b;
};
console.log(mathDiv(2, 5));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof (c) !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
const sumAll = (a, b, c = 1) => {
    return a + b + c;
};
console.log(addAll(1, 4, 5));
console.log(addAll(1, 4));
console.log(sumAll(1, 4));
// use of never type
const numberOrStrings = (value) => {
    if (typeof value === 'number')
        return 'number';
    if (typeof value === 'string')
        return 'string';
    return 'error';
};
