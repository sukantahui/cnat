import{r as o,j as e}from"./index-BUy46d85.js";import{E as t}from"./EditableCodeBlock-BU_9eRKt.js";import"./index-Wffsjc5d.js";import"./braces-Dh0in3Jg.js";import"./file-code-nrMSEUaW.js";import"./layout-list-COxRGkdF.js";import"./play-BZ6-0TUg.js";import"./type-DOScrZC9.js";import"./refresh-cw-D03e4WEg.js";import"./wand-sparkles-yHNiji4L.js";import"./copy-BHqStXkB.js";import"./download-pP2P7k24.js";import"./eye-off-DuajroIQ.js";import"./eye-DYvhylzj.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
