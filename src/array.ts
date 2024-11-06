// TypeScript has a specific syntax for typing arrays.
// const names = []
// names.push("Cay")
// names.push(8)

// console.log(names)

// When type safety is added an error appears when a different type is pushed to the array
const names: string[] = []
names.push("Cay")
names.push(8)

console.log(names)

// Type Inference
// TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; // inferred to type number[]

numbers.push(4); // no error

// comment line below out to see the successful assignment 
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(numbers);

let head: number = numbers[0]; // no error

console.log(head);