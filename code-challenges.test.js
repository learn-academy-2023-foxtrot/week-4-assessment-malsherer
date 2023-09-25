// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe("colorShuffle", () => {
//   it("takes in an array and returns a new array with the first item removed and the remaining items shuffled", () => {
//     expect(colorShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
//     expect(colorShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//   })
// })

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: colorShuffle
// input: array of colors (strings)
// output: a new array missing the first value of the previous array and with  a remaining items in a new order
// process: .slice() method to remove first item of original array, .sort() method to reorder remaining items in new array, Math.Random indicates to .sort() to reorder array in random order 

// const colorShuffle = (array) => {
//   var newArr = array.slice([1])
//   return newArr.sort(() => Math.random())
// }


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// describe("voteCounter", () => {
//     it("takes in an object that contains upvotes and downvotes and returns an end tally of votes", () => {
//       expect(voteCounter(votes1)).toEqual(11)
//       expect(voteCounter(votes2)).toEqual(-31)
//     })
//   })

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: voteCounter
 // input: object containing numerical values of upvotes and downvotes
// output: numerical value indicating the total tally of votes (upvotes - downvotes)
// process: function will call on values within the object using dot notation and return the numerical result of upvotes - downvotes

// const voteCounter = (object) => {
//   return object.upVotes - object.downVotes
// }


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("consolidator", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
      expect(consolidator(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
  })

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Pseudo code: 
// function name: consolidator
// input: two arrays of strings
// output: one array of the same strings with no duplicates
// process: create Set object (stores unique values) of combined arrays, use spread operator to combine arrays

const consolidator = (array1, array2) => {
  var thirdArray = [...new Set([...array1, ...array2])]
  return thirdArray
}
