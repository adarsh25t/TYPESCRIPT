
let stringArr = ["car","bus","bike"]; // string array
let language = ["javascript",1254,"node js"]; // string and number array
let mixedArr = ["hello",true,1243]; // mixed array ( any type )

// stringArr[0] = 1 error only support string
stringArr.push('condition');

let test = []  // any type array
let bands: string[] = [];  // string array
//bands.push(1) error
bands.push("oohoo");

// Tuple
let myTuple: [string,boolean,number] = ['hello',false,908] // define specific values ( more than 3 values not working )

// object

let object: object
object = []
console.log( typeof(object));  // object

let expamleObject = {
    prop1:'hello',
    prop2:290
}
// expamleObject.prop1 = 0 // only 
expamleObject.prop1 = 'new one'
console.log(expamleObject);

/*
    define the object
 */

type objectTemplate = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

interface objectTemplate2 {
    name: string,
    active?: boolean,
}

/*
    - miss any key the object is not working
    let object1: objectTemplate = {
        name:'hellan',
        albums: ['helooi',890]
    }
    eg: miss  active key its not working

    ? - is the optional key ( if the ? there then the key is optional)
    if the value is optional return values also add the ?
    eg: object.name?.toLocaleLowerCase()
*/

let object1: objectTemplate = {
    name:'Hellan',
    active: false,
    albums: ['helooi',890]
}

let object2: objectTemplate = {
    name:'hellan',
    active: false,
    albums: ['helooi',890]
}

const getObjectFunction = (object: objectTemplate) => {
    return `hello ${object.name?.toLocaleLowerCase()}`
}
console.log(getObjectFunction(object1));
