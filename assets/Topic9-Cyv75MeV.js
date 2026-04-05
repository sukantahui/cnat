import{r as o,j as e}from"./index-BHC-ARLC.js";import{E as t}from"./EditableCodeBlock-CIvCYvLg.js";import"./index-ME8AnmeB.js";import"./braces-BQvFuFD9.js";import"./file-code-55V_qcat.js";import"./layout-list--tQkMoA1.js";import"./play-S6YlOQBD.js";import"./type-Nkw_JIR4.js";import"./refresh-cw-B3VDvcQ8.js";import"./wand-sparkles-By4oPjZ3.js";import"./copy-DNi4hkEF.js";import"./download-BuOPxyOv.js";import"./eye-off-xALAcrMX.js";import"./eye-DBhLFmsq.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
