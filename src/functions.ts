// Return Type

// No type safety assigned
function getTime() {
    return new Date();
}
console.log(getTime())           

// Type safety assigned
// The `: number` below specifies that this function returns a number
function getTimeAsNumber(): number {
    return new Date().getTime();
}   // Returns error if method does not represent a number result
console.log(getTimeAsNumber())

// Void return type
// The type void can be used to inddicate a function doesn't return any value
function displayHello(): void {
    console.log("Hello!")
}
displayHello()

// Type safety with parameters
function multiply(a: number, b: number) {
    return a * b
}
