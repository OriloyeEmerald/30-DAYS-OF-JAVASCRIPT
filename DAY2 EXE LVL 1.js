     1.
const challenge = '30 Days Of JavaScript';
     2.
console.log(challenge);
     3.
console.log(challenge.length);
     4.
let upperCase = challenge.toUpperCase();
console.log(upperCase);
     5.
let lowerCase = challenge.toLowerCase();
console.log(lowerCase);
     6.
let firstWord = challenge.substr(0, 2);
console.log(firstWord);
     7.
let DaysOf = challenge.substring(3, 10);
console.log(DaysOf);
     8.
let includeScript = challenge.includes('Script');
console.log(includeScript);
     9.
let strSplit1 = challenge.split(',');
console.log(strSplit1);
     10.
let strSplit2 = challenge.split(' ');
console.log(strSplit2);
     11.
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let strArr = str.split(',');
console.log(strArr);
     12.
let replaceText = challenge.replace('JavaScript', 'Python');
console.log(replaceText);
     13.
let index = challenge.charAt(15);
console.log(index);
     14.
let code = challenge.charCodeAt('J');
console.log(code);
     15.
let firstOcc = challenge.indexOf('a');
console.log(firstOcc);
     16.
let lastOcc = challenge.lastIndexOf('a');
console.log(lastOcc);
     17.
let because = 'You cannot end a sentence with because because because is a conjunction'
let becauseIndex = because.indexOf('because');
console.log(becauseIndex);
     18.
let becauseLastIndex = because.lastIndexOf('because');
console.log(becauseLastIndex);
     19.
let searchIndex = because.search('because');
console.log(searchIndex);
     20.
let text =  ' 30 Days Of JavaScript '
let trimText = text.trim();
console.log(trimText);
     21.
let strVal1 = challenge.startsWith('30')
console.log(strVal1);
     22.
let strVal2 = challenge.endsWith('JavaScript')
console.log(strVal2);
     23.
let valMatch = challenge.match(/a/g, 'a')
console.log(valMatch);
     24.
let str1 = '30 Days Of';
let str2  = ' Javascript'
console.log(str1.concat(str2));
     25.
let repeatStr = challenge.repeat(2);
console.log(repeatStr);

































