import{r as o,j as e}from"./index-Ofv5BQah.js";import{E as t}from"./EditableCodeBlock-BooQLP_-.js";import"./index-D36xJsVZ.js";import"./braces-By7M1Gf_.js";import"./file-code-8pJVigLi.js";import"./layout-list-CPzIh9-w.js";import"./play-CTTz1uQm.js";import"./type-BS4-Nv9e.js";import"./refresh-cw-Dc_FYhXA.js";import"./wand-sparkles-Clz0lJ4T.js";import"./copy-CvjPxglF.js";import"./download-BK3b5Z3K.js";import"./eye-off-DAXY-jPY.js";import"./eye-D1L16zRR.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
