let wiseQuote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
console.log(wiseQuote);

     2.
let motherTheresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(motherTheresaQuote);

      3.
let strN = '10'
let num = 10
console.log(typeof(strN) == typeof(num)); // returns false

console.log(typeof(+strN) == typeof(num)); // returns true
      4.
let strNum = '9.8';
let num2 = 10;
let strNumInt = parseFloat(strNum);
console.log(strNumInt == num2); // false
let newNum = Math.round(strNum);
console.log(newNum == num2); // true
      5.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on'));
console.log(word2.includes('on'));
      6.
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon'));
      7.
console.log(Math.floor(Math.random() * 100));
      8.
console.log(Math.floor(Math.random() * (100 - 50) + 50));
      9.
console.log(Math.floor(Math.random() * (255)));
      10.
let text = 'javascript';
console.log(text.length);
let index = Math.floor(Math.random() * 10);
console.log(text[index]);

let numbers = `'1 1 1 1 1'\n'2 1 2 4 8'\n'3 1 3 9 27'\n'4 1 4 16 64'\n'5 1 5 25 125'`;
console.log(numbers);











