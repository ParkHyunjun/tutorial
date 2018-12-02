console.log('hello wolrd to ts');
// types
var myString;
var myNum;
var myBool;
var myVar;
/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/
var strArr;
var numArr;
var boolArr;
var strNumTuple;
var myVoid = undefined;
var myNull = null;
var myUndefined = null;
myString = "Hello World";
myString = "Hello World" + " " + "ts";
myString = "Hello World".slice(0, 3);
myNum = 11;
myBool = false;
myVar = false;
strArr = ['Hello', 'World'];
numArr = [1, 2, 3];
boolArr = [true, false];
strNumTuple = ['hello', 4];
console.log(myString + "," + myNum + "," + myBool + "," + myVar + "," + strArr + "," + numArr + "," + boolArr);
