
//  Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05


let date = new Date();

let year = String(new Date().getFullYear()).substr(0, 3);
let month = String(new Date().getMonth() + 1).padStart(2, 0);
let day = String(new Date().getDate()).padStart(2, 0);
let hours = String(new Date().getHours()).padStart(2, 0);
let minutes = String(new Date().getMinutes()).padStart(2, 0);



let result = `${year}-${month}-${day} ${hours}:${minutes}`

console.log(result);