// TypeScript has a specific syntax for typing objects.
// Objects can be together like this
// const errorstudent: {age: number, school: string, grade: string} = {
//     age: 10,
//     school: "KNUST",
//     grade: 4
// }    // Displays Error

// const student: {age: number, school: string, grade: string} = {
//     age: 10,
//     school: "KNUST",
//     grade: "Kindagarten"
// }

// console.log(student)

// Or they can be seperated this way
type Student = {
    age: number
    school: string
    grade: string
}

// const isStudentError: Student = {
//     age: 100,
//     school: "Oxford",
//     grade: "None"
// } //Display Error

const isStudent: Student = {
    age: 100,
    school: "Oxford",
    grade: "None"
}

// isStudent.age = "18" Display Error Due to Type Inference
isStudent.age = 18
isStudent.school = "KNUST"

console.log(isStudent)