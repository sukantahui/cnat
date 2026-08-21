import{r as o,j as e}from"./index-DCfh6IuU.js";import{E as t}from"./EditableCodeBlock-DKgsNvCS.js";import"./index-BdMIyi3U.js";import"./braces-CJluQm80.js";import"./createLucideIcon-JrHpk1sJ.js";import"./file-code-CnNuUJDx.js";import"./layout-list-CRL7bmJ6.js";import"./play-DUoF7fvh.js";import"./type-CWtCwXrW.js";import"./refresh-cw-DbpJU27z.js";import"./minimize-2-Dt9IO6SX.js";import"./wand-sparkles-DH0hT6aL.js";import"./copy-vxMnYODG.js";import"./download-CmPUNbCV.js";import"./eye-off-C4c4AayT.js";import"./eye-LnBEFR8Z.js";class C extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
}`})]})}}export{C as default};
