let myName: String = "adarsh";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "hellan";
meaningOfLife = 10;
isLoading = false
album = 20


const sum = (a: number,b: number) => {
    return a + b
}
console.log(sum(2,1));

let postId: string | number;  // union type
let isActive: number | boolean;

let re: RegExp = /\w+/g
