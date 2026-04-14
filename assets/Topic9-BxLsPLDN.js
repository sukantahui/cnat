import{r as o,j as e}from"./index-Cufz2vn-.js";import{E as t}from"./EditableCodeBlock-B99UfEIr.js";import"./index-L8RqyWOn.js";import"./braces-Dv3kXLaG.js";import"./file-code-CsYY4xe_.js";import"./layout-list-ByRh-OfD.js";import"./play-BNyY933V.js";import"./type-B_IIOYum.js";import"./refresh-cw-CwXhGMdO.js";import"./wand-sparkles-Ctub8UI6.js";import"./copy-Cuij30dg.js";import"./download-D9I5RdLn.js";import"./eye-off-CosODb20.js";import"./eye-CO7PB0u-.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
