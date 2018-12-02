console.log('hello wolrd to ts');

// types
let myString: string;
let myNum:number;
let myBool:boolean;
let myVar:any;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number]

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

myString = "Hello World";
myString = "Hello World"+" "+"ts";
myString = "Hello World".slice(0,3);
myNum = 11;
myBool = false;
myVar = false;

strArr = ['Hello', 'World'];
numArr = [1,2,3];
boolArr = [true,false];

strNumTuple = ['hello', 4];



console.log(`${myString},${myNum},${myBool},${myVar},${strArr},${numArr},${boolArr}`);
