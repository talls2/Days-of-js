// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
try {
  let yearBorn = window.prompt("Enter birth year:");
  const actualYear = new Date();
  let actualAge = actualYear.getFullYear() - yearBorn;
  if (actualAge >= 18) {
    console.log(`You are old enough to drive`);
    window.alert(`You are old enough to drive`);
  } else {
    console.log(
      `You will need to wait ${(actualAge - 18) * -1} more years to drive`
    );
    window.alert(
      `You will need to wait ${(actualAge - 18) * -1} more years to drive`
    );
  }
} catch {
  console.log("see index.html to see an answer for this");
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
try {
  let myAge = window.prompt();
  let yourAge = window.prompt();

  if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`);
  }
  if (myAge == yourAge) {
    console.log(`We have the same age`);
  } else {
    console.log(`I am ${(myAge - yourAge) * -1} years younger than you`);
  }
} catch {}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

let a = 1;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else if (b > a) {
  console.log("a is less than b");
}

a > b ? console.log("a is greater than b") : console.log("a is less than b");

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const number = 4;
if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

// Exercises: Level 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

const classificador = function (nota) {
  nota >= 80 && nota <= 100
    ? console.log(`Your grade is A`)
    : nota >= 70 && nota <= 79
    ? console.log(`Your grade is B`)
    : nota >= 60 && nota <= 69
    ? console.log(`Your grade is C`)
    : nota >= 50 && nota <= 59
    ? console.log(`Your grade is D`)
    : nota >= 0 && nota <= 49
    ? console.log(`Your grade is F`)
    : console.log("invalid score, must be between 0 and 100");
};
classificador(65);
classificador(92);
classificador(35);

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//  September, October or November, the season is Autumn.
//  December, January or February, the season is Winter.
//  March, April or May, the season is Spring
//  June, July or August, the season is Summer

const seasonCheck = (month) => {
  month = month.toLowerCase();
  month = month.charAt(0).toUpperCase() + month.slice(1);
  month == "September" || month == "October" || month == "November"
    ? console.log("The season is Autumn")
    : month == "December" || month == "January" || month == "February"
    ? console.log("The season is Winter")
    : month == "March" || month == "April" || month == "May"
    ? console.log("The season is Spring")
    : month == "June" || month == "July" || month == "August"
    ? console.log("The season is Summer")
    : console.log("Invalid month");
};
seasonCheck("september");
seasonCheck("JULY");
seasonCheck("march");
seasonCheck("february");

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

const weekendOrWork = (day) => {
  day = day.toLowerCase();
  day = day.charAt(0).toUpperCase() + day.slice(1);
  day == "Monday" ||
  day == "Tuesday" ||
  day == "Wednesday" ||
  day == "Thursday" ||
  day == "Friday"
    ? console.log(`${day} is a working day`)
    : day == "Saturday" || day == "Sunday"
    ? console.log(`${day} is a weekend`)
    : console.log("Invalid day");
};
weekendOrWork("tuesday");
weekendOrWork("friday");
weekendOrWork("saturday");
weekendOrWork("sabado");

// Exercises: Level 3
// 1. Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// 2. Write a program which tells the number of days in a month, now consider leap year.

const daysOfMonth = function (month, leapYear) {
  let match = false;
  const monthDays = [
    ["january", 31],
    ["february", 28],
    ["march", 31],
    ["april", 30],
    ["may", 31],
    ["june", 30],
    ["july", 31],
    ["august", 31],
    ["september", 30],
    ["october", 31],
    ["november", 30],
    ["dezember", 31],
  ];
  leapYear === true ? (monthDays[1][1] = monthDays[1][1] + 1) : undefined;
  month = month.toLowerCase();
  for (let i = 0; i < monthDays.length; i++) {
    if (month == monthDays[i][0]) {
      match = true;
      console.log(`${month} has ${monthDays[i][1]}`);
      break;
    } else {
    }
  }
  if (!match) {
    return console.log(`This is not a valid month`);
  }
};
daysOfMonth("september");
daysOfMonth("NOVEMBER");
daysOfMonth("Jojo");
daysOfMonth("FEBRUARY", true);
daysOfMonth("FEBRUARY", false);
