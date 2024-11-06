// Index signatures can be used for objects without a defined list of properties.
// Index signatures like this one can also be expressed with utility types like Record<string, number>.
const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; // no error

nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap);