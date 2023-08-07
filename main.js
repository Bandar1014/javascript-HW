// area of rectangle

let a=10;
let b=20;
let areaOfRectangle= a*b;
console.log(`The area of rectangle: ${areaOfRectangle}`);

console.log("\n");
console.log("\n");

// the tempreture converter

let celsius=48;
let fahrenheit=(celsius * (9 / 5)) + 32;
console.log(`${celsius}C is: ${fahrenheit}F `);
let fahrenheit1=118.4;
let celsius1=(fahrenheit1 - 32) * 5 / 9;
console.log(`${fahrenheit1}F is: ${celsius1}C `);

console.log("\n");
console.log("\n");

// hour converter 
let hour=2;
let seconds=hour*60*60;
console.log(`${hour} hour = ${seconds} sec`);

console.log("\n");
console.log("\n");

// leap year
let year=2000;
if(year % 4 == 0){
    if(year % 100 == 0 ){
        if(year % 400 == 0){
            console.log(` The year ${year} is leap year`)
        }else{
            console.log(` The year ${year} is not leap year`)
        }
    }else{
        console.log(` The year ${year} is leap year`)
    }
}else{
    console.log(` The year ${year} is not leap year`)
}

console.log("\n");
console.log("\n");

// number in range

let start=11;
let end =30;
let number= 15;
console.log(number<=30 && number >=11)



console.log("\n");
console.log("\n");

// factorial

let n=9;
let factorial=1
for(let i=n;i>=1;i--){
    factorial=factorial*i;
}
console.log(factorial)


