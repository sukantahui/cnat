import{r as o,j as e}from"./index-BV1ec7QU.js";import{E as t}from"./EditableCodeBlock-DKzWiRl8.js";import"./index-FAc0gMmj.js";import"./braces-hctkfZFQ.js";import"./file-code-De99tvSp.js";import"./layout-list-B9EBcVRh.js";import"./play-dfkZtFjp.js";import"./type-Doxm7eCO.js";import"./refresh-cw-DES3yxy7.js";import"./wand-sparkles-CAvweH_1.js";import"./copy-0c2DUKQV.js";import"./download-r_U-JfHh.js";import"./eye-off-CIjwHbUc.js";import"./eye-DgGc0zhY.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
const student = {
  name: "Susmita",
  course: "Python for Data Analysis",
  isPlaced: false,
};

console.log("name" in student);      // true
console.log("isPlaced" in student);  // true
console.log("age" in student);       // false`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Using hasOwnProperty()
const student = Object.create({ center: "Coder & AccoTax" });

student.name = "Kaustav";
student.course = "Java";

console.log(student.hasOwnProperty("name"));     // true
console.log(student.hasOwnProperty("center"));   // false (in prototype)
console.log("center" in student);                // true (own + prototype)`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Safe checks before accessing properties
const course = {
  title: "Full Stack Web Development",
  durationMonths: 6,
};

if (course.hasOwnProperty("title")) {
  console.log("Course title is:", course.title);
}

if (!("fees" in course)) {
  console.log("Fees property not defined yet.");
}`})]})}}export{y as default};
