// 1. Declare an empty array;
const empty = [];

// 2. Declare an array with more than 5 number of elements
const moreItems = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of your array
console.log(moreItems.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(
  moreItems[0],
  moreItems[Math.floor(moreItems.length / 2)],
  moreItems[moreItems.length - 1]
);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [2, true, "queijo", moreItems, null, undefined];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

// 10. Print out each company
for (i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// 11. Change each company name to uppercase one by one and print them out
for (i = 0; i < itCompanies.length; i++) {
  let itCompaniesUpperCase = itCompanies[i].toUpperCase();
  console.log(itCompaniesUpperCase);
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`
);

// 13. Check if a certain company exists in the itCompanies array. If it exist re turn the company else return a company is not found
if(itCompanies.includes('Amazon')){
  console.log('Amazon')
}
else{
  console.log('Company is not found')
}

// 14. Filter out companies which have more than one 'o' without the filter method


// 15. Sort the array using sort() method
console.log(itCompanies.sort())

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse())

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length ))

// 19. Slice out the middle IT company or companies from the array
if (itCompanies.length % 2 == 0){
  console.log(itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2))
}
else {
  console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), itCompanies.length / 2 + 1))
}

// 20. Remove the first IT company from the array
console.log(itCompanies.shift())

// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1))

// 22. Remove the last IT company from the array
console.log(itCompanies.pop())

// 23. Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.lengths))

//Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
require(webTechs)
require(countries)

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const Allergic = true
if (shoppingCart.includes('Meat')){

}
else{
  shoppingCart.unshift('Meat')
}
if (shoppingCart.includes('Sugar')){

}
else{
  shoppingCart.unshift('Sugar')
}

function isHoney(value){
  return value == "Honey"
}

if(Allergic == true && shoppingCart.includes('Honey')){
  shoppingCart.filter(isHoney)
}
else {

}

