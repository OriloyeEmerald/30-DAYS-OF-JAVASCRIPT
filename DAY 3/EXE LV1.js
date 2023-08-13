
const firstName = 'Emerald'
const lastName =  'Oriloye'
const country  =  'Zambia'
const city = 'Lithuso'
const age = 28
const isMarried = false
const year = 2096

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

let num1 = 10
let str1 = '10';
console.log(typeof(str1) === typeof(num1)); //false

let num2 = '9.8';
let newNum2 = parseInt(num2);
console.log(newNum2 == num1); // false

const name = 'James';
const num3 = 911
const loveFood = true;

const anon = '';
const empty = null;
const likeBook = false;

console.log(4 > 3);
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let str2 = 'python'.length
let str3 = 'jargon'.length

console.log(str2 > str3);

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true


let str4 = 'python'
let str5 = 'dragon'
console.log(!(str4.includes('on') && str5.includes('on')) ? 'true' : 'false'); //false


let date = new Date();
console.log(date);
let presYear = date.getFullYear(); //2023
console.log(presYear);
let presMonth = date.getMonth()  + 1
console.log(presMonth);
let presDate = date.getDate() + 1; //7
console.log(presDate);
let presDay = date.getDay() + 1; //1
console.log(presDay);
let presHour = date.getHours(); //16
console.log(presHour);
let presMinutes = date.getMinutes(); //3
console.log(presMinutes);
let presDateSec = date.getSeconds(); //3
console.log(presDateSec);

let date2 = new Date('January 1, 1970')
console.log(date2);
var numberOfSeconds =  date - date2;
console.log(numberOfSeconds); 











