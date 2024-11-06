// Optional properties are properties that don't have to be defined in the object definition.
// const car: { type: string, mileage: number } = {
// Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;

// console.log(car)


// To solve this we use the "?" after the property to make is optional
// no error on optional property, remove it and see what happens
const car: { type: string, mileage?: number } = {
    type: "Toyota"
};

car.mileage = 2000;

console.log(car);