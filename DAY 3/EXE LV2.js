// 1.


// let base = parseFloat(prompt('enter the base of triangle'));

// let height = parseFloat(prompt('enter the height of triangle'));
// let areaOfTriangle = ((0.5) * base * height)  
// alert(`The area of the triangle is: ${areaOfTriangle}`)

// 2.
let sideA = parseFloat(prompt('enter the value of side a'));
let sideB = parseFloat(prompt('enter the value of side b'));
let sideC = parseFloat(prompt('enter the value of side c'));
let perimeterOfTriangle = (sideA + sideB + sideC)

alert(`Perimeter of the triangle is: ${perimeterOfTriangle}`)


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = parseFloat(prompt('enter the length of rectangle'));
let width = parseFloat(prompt('enter the width of rectangle'));

let areaOfRectangle = (length * width);
let perimeterOfRectangle = 2 * (length + width);
alert(`area of rectangle: ${areaOfRectangle}`);
alert(`perimeter of rectangle: ${perimeterOfRectangle}`);

 //4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let r = parseFloat(prompt('enter the radius of circle'));
let pi = 3.14
let areaOfCircle = (pi * Math.pow(r, 2));
let circumferenceOfCircle = (2 * pi * r);
alert(`area of circle: ${areaOfCircle}`);
alert(`circumference of circle: ${circumferenceOfCircle}`);


//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
 // x-intercept, when y = 0;
 let y = 0;
 let m1 = 2;
 let b = -2
 let xInt = (y - b) / m1;
 console.log(xInt);

//y-intercept, when x = 0;
let x = 0;
let yInt = (m1 * x) + b;


//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m2 = (y2 - y1) / (x2 - x1);
console.log(m); // 2
 

//7 
m1 === m2 ? console.log('yesss') : console.log('noooo');

//8.

//9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let numberHours = parseFloat(prompt('enter hours'));
let hourlyRate = parseFloat(prompt('enter rate'));
let weeklyEarning = numberHours * hourlyRate
alert(`Your weekly earning is ${weeklyEarning}`);


//10. If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = 'Filaeni';

name.length > 7 ? console.log('your name is long') : console.log('your name is short');


//11. Compare your first name length and your family name length and you should get this output.

let firstName = 'Victoria';
let lastName = 'Erikume';

firstName.length > lastName.length ? console.log('Your first name, Victoria is longer than your family name, Erikume') : console.log('Your family name, Erikume is longer than your first name, Victoria');

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge

let myAge = 98;
let yourAge = 30;

myAge > yourAge ? console.log(`I am ${myAge - yourAge} older than you`) : console.log(`You are ${yourAge - myAge} older than me`)

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthYear = parseFloat(prompt('enter your birth year'));
let presentYear = new Date().getFullYear();
let userAge = presentYear - birthYear;
let ageRequired = 18;
userAge >= 18 ? alert(`You are ${userAge}. You are old enough to drive`) : alert(`You are ${userAge}. You will be allowed to drive after ${ageRequired - userAge} years.`)

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let numberOfYears = parseFloat(prompt('enter number of years'));
let secondsInAYear = 365 * 24 * 60 * 60
let secondsLived = secondsInAYear * numberOfYears

alert(`You have lived ${secondsLived} seconds`)





//15. Create a human readable time format using the Date time object

let year = String(new Date().getFullYear());
let month = String(new Date().getMonth() + 1).padStart(2, '0');
let date = String(new Date().getDate()).padStart(2, '0');
let hours = String(new Date().getHours()).padStart(2, '0');
let minutes =  String(new Date().getMinutes()).padStart(2, '0');

let result1 = `${year}-${month}-${date}-${hours}:${minutes}`
console.log(result1);
let result2 = `${date}-${month}-${year}-${hours}:${minutes}`
console.log(result2);
let result3 = `${date}/${month}/${year}/${hours}:${minutes}`
console.log(result3);



















