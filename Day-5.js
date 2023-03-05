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

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
