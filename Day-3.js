// LEVEL 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "William";
let lastName = "Benett";
let country = "Brazil";
let city = "Anápolis";
let age = 22;
let isMarried = "No";
let year = 2000;

console.log(
  `
  firstName is a ${typeof firstName}
  lastName is a ${typeof lastName}
  country is a ${typeof country}
  city is a ${typeof city}
  age is a ${typeof age}
  isMarried is a ${typeof isMarried}
  year is a ${typeof year}
  `
);
// 2. Check if type of '10' is equal to 10
console.log(typeof "10" === typeof 10);
console.log("");

// 3. Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt("9.8") === 10);
console.log("");

// 4. Boolean value is either true or false.
//  i. Write three JavaScript statement which provide truthy value.
console.log("" == 0, 3 !== 2, true, 4 > 3);
console.log("");
//  ii. Write three JavaScript statement which provide falsy value.
console.log("3" === 3, undefined === false, false, 4 < 3);
console.log("");
// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

/* 1. 4 > 3 = true */ console.log(4 > 3);
/* 2. 4 >= 3 = true */ console.log(4 >= 3);
/* 3. 4 < 3 = false */ console.log(4 < 3);
/* 4. 4 <= 3 = false */ console.log(4 <= 3);
/* 5. 4 == 4 = true */ console.log(4 == 4);
/* 6. 4 === 4 = true */ console.log(4 === 4);
/* 7. 4 != 4 = false */ console.log(4 != 4);
/* 8. 4 !== 4 = false */ console.log(4 !== 4);
/* 9. 4 != '4' = false */ console.log(4 != "4");
/* 10. 4 == '4' = true */ console.log(4 == "4");
/* 11. 4 === '4' = false */ console.log(4 === "4");
console.log("");
// 12. Find the length of python and jargon and make a falsy comparison statement.
console.log("jargon".length > "python".length);
console.log("");
// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

/*    1. 4 > 3 && 10 < 12 = true */ console.log(4 > 3 && 10 < 12);
/*    2. 4 > 3 && 10 > 12 = false */ console.log(4 > 3 && 10 > 12);
/*    3. 4 > 3 || 10 < 12 = true */ console.log(4 > 3 || 10 < 12);
/*    4. 4 > 3 || 10 > 12 = true */ console.log(4 > 3 || 10 > 12);
/*    5. !(4 > 3) = false */ console.log(!(4 > 3));
/*    6. !(4 < 3) = true */ console.log(!(4 < 3));
/*    7. !(false) = true */ console.log(!false);
/*    8. !(4 > 3 && 10 < 12) = falsse */ console.log(!(4 > 3 && 10 < 12));
/*    9. !(4 > 3 && 10 > 12) = true */ console.log(!(4 > 3 && 10 > 12));
/*    10. !(4 === '4') = true */ console.log(!(4 === "4"));
/*    11. There is no 'on' in both dragon and python = true  */ console.log(
  "dragon".includes("on") === "python".includes("on")
);
console.log("");
// 7. Use the Date object to do the following activities
const now = new Date();
/*    1. What is the year today?  */ console.log(now.getFullYear());
/*    2. What is the month today as a number? */ console.log(
  now.getMonth() + 1
);
/*    3. What is the date today? */ console.log(now.getDate());
/*    4. What is the day today as a number? */ console.log(now.getDay());
/*    5. What is the hours now? */ console.log(now.getHours());
/*    6. What is the minutes now? */ console.log(now.getMinutes());
/*    7. Find out the numbers of seconds elapsed from January 1, 1970 to now. */ console.log(
  now.getTime()
);

// LEVEL 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
try {
  let base = window.prompt("Enter base:");
  let height = window.prompt("Enter height:");
  window.alert(`The area of the triangle is: ${0.5 * base * height}`);
  console.log(`The area of the triangle is: ${0.5 * base * height}`);
} catch {
  console.log("see index.html to see an answer for this");
}
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
try {
  let a = window.prompt("Enter side a:");
  let b = window.prompt("Enter side b:");
  let c = window.prompt("Enter side c:");
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  window.alert(`The perimeter of the triangle is: ${a + b + c}`);
  console.log(`The perimeter of the triangle is: ${a + b + c}`);
} catch {
  console.log("see index.html to see an answer for this");
}
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
try {
  let length = window.prompt("Enter length");
  let width = window.prompt("Enter width");
  a = parseInt(length);
  b = parseInt(width);
  window.alert(`The area of the rectangle is: ${length * width}`);
  console.log(`The area of the rectangle is: ${length * width}`);
  window.alert(`The perimeter of the rectangle is: ${2 * (length + width)}`);
  console.log(`The perimeter of the rectangle is: ${2 * (length + width)}`);
} catch {
  console.log("see index.html to see an answer for this");
}
// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
try {
  let radius = window.prompt("Enter radius:");
  let pi = Math.PI;
  window.alert(`The area of the circle is: ${pi * radius * radius}`);
  console.log(`The area of the circle is: ${pi * radius * radius}`);
  window.alert(`The circumference of the circle is: ${2 * pi * radius}`);
  console.log(`The circumference of the circle is: ${2 * pi * radius}`);
} catch {
  console.log("see index.html to see an answer for this");
}
// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
function equation(x) {
  return 2 * x - 2;
}
const slope = 2;
const xIntercept = 1; // since y = 2x - 2, when y = 0, x = 1
const yIntercept = -2; // when x = 0, y = -2
try {
  window.alert("The slope is: " + slope);
  console.log("The slope is: " + slope);
  window.alert("The x-intercept is: (" + xIntercept + ", 0)");
  console.log("The x-intercept is: (" + xIntercept + ", 0)");
  window.alert("The y-intercept is: (0, " + yIntercept + ")");
  console.log("The y-intercept is: (0, " + yIntercept + ")");
} catch {
  console.log("The slope is: " + slope);
  console.log("The x-intercept is: (" + xIntercept + ", 0)");
  console.log("The y-intercept is: (0, " + yIntercept + ")");
}

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(
  "The slope between (" +
    x1 +
    ", " +
    y1 +
    ") and (" +
    x2 +
    ", " +
    y2 +
    ") is: " +
    slope2
);

// 7. Compare the slope of above two questions.
console.log(slope === slope2);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// Define the equation as a function
function equation(x) {
  return x * x + 6 * x + 9;
}

// Calculate the value of y for x = 0, 1, 2, 3, 4
const xValues = [0, 1, 2, 3, 4];
for (let i = 0; i < xValues.length; i++) {
  const x = xValues[i];
  const y = equation(x);
  console.log("For x = " + x + ", y = " + y);
}
const a = 1;
const b = 6;
const c = 9;
const discriminant = b * b - 4 * a * c;
if (discriminant >= 0) {
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log("The x values where y = 0 are: " + x1 + ", " + x2);
} else {
  console.log("There are no real roots, y never equals 0.");
}

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
try {
  let hours = window.prompt("Enter hours:");
  let rateHour = window.prompt("Enter rate per hour:");
  console.log(`the payment is: ${hours * rateHour}`);
  window.alert(`the payment is: ${hours * rateHour}`);
} catch {
  console.log("see index.html to see an answer for this");
}
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
try {
  let name = window.prompt("enter your name");
  if (name.length > 7) {
    console.log("your name is long");
    window.alert("your name is long");
  } else {
    console.log("your name is short");
    window.alert("your name is short");
  }
} catch {
  console.log("see index.html to see an answer for this");
}
// 11. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

try {
  let firstName = window.prompt("Enter your first name");
  let lastName = window.prompt("Enter your last name");
  if (firstName > lastName) {
    console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    );
    window.alert(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    );
  } else {
    console.log(
      `Your first name ${firstName} is equal or shorter than your family name, ${lastName} `
    );
    window.alert(
      `Your first name ${firstName} is equal or shorter than your family name, ${lastName} `
    );
  }
} catch {
  console.log("see index.html to see an answer for this");
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

let myAge = 22;
let yourAge = 30;

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} years older than you`);
}
if (myAge == yourAge) {
  console.log(`We have the same age`);
} else {
  console.log(`I am ${(myAge - yourAge) * -1} years younger than you`);
}

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
try {
  let yearBorn = window.prompt("Enter birth year:");
  const actualYear = new Date();
  let actualAge = actualYear.getFullYear() - yearBorn;
  if (actualAge >= 18) {
    console.log(`You are ${actualAge}. You are old enough to drive`);
    window.alert(`You are ${actualAge}. You are old enough to drive`);
  } else {
    console.log(
      `You are ${actualAge}. You will be allowed to drive after ${
        (actualAge - 18) * -1
      } years`
    );
    window.alert(
      `You are ${actualAge}. You will be allowed to drive after ${
        (actualAge - 18) * -1
      } years`
    );
  }
} catch {
  console.log("see index.html to see an answer for this");
}

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
try {
  let yearsLived = window.prompt("Enter number of years you live:");
  let actualYear = new Date();
  let yearBorn = actualYear.getFullYear() - yearsLived;
  yearBorn = yearBorn.toString();
  const birthdate = new Date(`${yearBorn}-01-01T00:00:00Z`);
  const now = new Date();
  const secondsLived = (now.getTime() - birthdate.getTime()) / 1000;
  console.log(`You lived ${secondsLived} seconds`);
  window.alert(`You lived ${secondsLived} seconds`);
} catch {
  console.log("see index.html to see an answer for this");
}

// 15. Create a human readable time format using the Date time object
const today = new Date();
console.log(
  `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`
);
console.log(
  `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
);
console.log(
  `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
);
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// LEVEL 3

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYYY-MM-DD HH:mm eg. 2020-01-02 07:05
console.log(
  `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`
);
