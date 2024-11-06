// "any" is a type that disables type checking and effectively allows all types to be used

// Throws an error
// let age = 10
// age = "ten"
// console.log(age)

// Doesn't throw an error
let age: any = 10
age = "ten"
console.log(age)