import{r as o,j as e}from"./index-Da242x_v.js";import{E as t}from"./EditableCodeBlock-BHnRxxmJ.js";import"./index-ChRqqHV5.js";import"./braces-Cbxczz1l.js";import"./file-code-D8UzdDLr.js";import"./layout-list-DEs8mqAW.js";import"./play-DlYZ_ALK.js";import"./type-DPcojwXo.js";import"./refresh-cw-mBC7aNYe.js";import"./wand-sparkles-03nEb6Dq.js";import"./copy-CqMdOgMJ.js";import"./download-1HFrR5oJ.js";import"./eye-off-mKmtyIK6.js";import"./eye-BLStUG20.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
