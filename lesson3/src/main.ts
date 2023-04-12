// type aliases

type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type object1 = {
    name: string,
    age: number,
    blog: stringOrNumberArray
}

type userid = stringOrNumber

// literal type
let myName : "adarsh"
//myName = 'hellan'  error -> only add adarsh

let username : 'one' | 'two' | 'three'
username = "three"

//functions 

/*
    - void - means function did't return anything
*/

const sum = (a: number,b: number) : number => {
    return a + b
}

const Mylog = (message: any) : void => {
    console.log(message);
}

Mylog("hello !")
Mylog(sum(10,3))

const substration = function (a: number,b: number): number {
    return a - b
}
// create function type 
type mathFunction = (a: number,b: number) => number

interface mathInFunction{
    (a: number,b: number) : number
}

const mathAdd: mathFunction = (a,b) => {
    return a + b
}
console.log(mathAdd(1,4));



const mathDiv: mathInFunction = (a,b) => {
    return a /b
}

console.log(mathDiv(2,5));


// optional parameters
const addAll = (a: number,b: number,c?: number) : number => {
    if (typeof(c) !== 'undefined') {
        return a + b + c
    }
    else {
        return a + b
    }
}

const sumAll = (a: number,b: number,c: number = 1) : number => {
    return a + b + c
}

console.log(addAll(1,4,5));
console.log(addAll(1,4));
console.log(sumAll(1,4));



// use of never type
const numberOrStrings = (value: number | string): string =>{
    if (typeof value === 'number') return 'number'
    if (typeof value === 'string') return 'string'
    return 'error'
} 