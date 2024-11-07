// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays
type StudentName = string;
type StudentAge = number;
type StudentCourse = string;

type Students = {
    name: StudentName,
    age: StudentAge,
    course: StudentCourse 
};

const studentName: StudentName = "Cay"
const studentAge: StudentAge = 20
const studentCourse: StudentCourse = "CS Major"
const student: Students = {
    name: studentName,
    age: studentAge,
    course: studentCourse
}

console.log(student)