// task 1//

let userName = prompt('Enter your Name')

const nameRegEx = new RegExp('^[A-Za-z]');

while(! nameRegEx.exec(userName)){
    userName = prompt('Enter a valid Name');
}

let userMail = prompt('enter your mail')

const emailRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

while(! emailRegEx.exec(userMail)){
    userMail = prompt('Enter a valid email');
}

let userPhone = prompt('Enter your phone number');

const phoneRegEx = new RegExp('^[0-9]{8}$')

while(! phoneRegEx.exec(userPhone)){
    userPhone = prompt('phone number should be at least 8 digits');
}

let userMobile = prompt('Enter your mobile number')

const mobileRegEx = new RegExp('^01[0125][0-9]{8}$')

while(! mobileRegEx.exec(userMobile)){
    userMobile = prompt('Enter a valid Mobile Number');
}

document.write(`<h1>Name : ${userName}</h1>`)
document.write(`<h1>email : ${userMail}</h1>`)
document.write(`<h1>Phone No. : ${userPhone}</h1>`)
document.write(`<h1>Mobile No. : ${userMobile}</h1>`)


// task 2// 

const arr = [];
const numRegEx = new RegExp('^[0-9]')
let num;
for(let i=1; i<=5; i++){
    num = prompt(`enter number No.${i}`);
    while(! numRegEx.exec(num)){
        num = prompt('enter a valid number')
    }
    arr.push(num);
}
document.write(`<p>your numbers : ${arr}</p>`);

document.write(`<p>Ascending Sorting : ${arr.sort(function(a,b){return a - b})}</p>`);
document.write(`<p>Descending Sorting : ${ arr.sort(function(a,b){return b - a})}</p>`);

// task 3 //
const pi = Math.PI;
let radius = prompt('Enter the value of a circle radius in order to calculate its area');

while(! numRegEx.exec(radius)){
    radius = prompt('please enter a valid value');
}

const area = pi * Math.pow(radius , 2);


alert("Total area of the circle is" + area);

let value2 = Number(prompt('Enter another value to calculate its square root'));

while(! numRegEx.exec(value2)){
    value2 =prompt('please enter a valid value');
}
alert('Result is : ' +  Math.sqrt(value2));

let angle = Number(prompt('Enter angle value in degrees'));

while(! numRegEx.exec(angle)){
    angle = prompt('please enter a valid value');    
}

const angleRes = Math.cos(angle).toFixed(4)
document.write(`<h2>The Result of cos${angle} is ${angleRes}</h2>`)


// Bouns Task // 

let userStr = prompt('enter your string');

const strArr = userStr?.split(' ')

const maxLen = Math.max(...strArr?.map((el)=> el.length));

document.write(`<h2>the Maxmium string is ${strArr?.find((el)=> el.length === maxLen)}</h2>`)




