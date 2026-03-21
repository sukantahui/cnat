import{r as o,j as e}from"./index-BQNsLvl4.js";import{E as t}from"./EditableCodeBlock-W6crZnX1.js";import"./index-Bf_FrdBe.js";import"./createLucideIcon-DfWMkJeo.js";import"./braces-DoP_KH8v.js";import"./file-code-Da2V0TW7.js";import"./layout-list-wnHrvZcu.js";import"./play-BGY4BZxw.js";import"./type-B3clx7CX.js";import"./refresh-cw-DeSTVkrw.js";import"./wand-sparkles-DJr-CXb3.js";import"./copy-ggF1ebug.js";import"./download-DAPiigzn.js";import"./eye-off-C-SnOcmU.js";import"./eye-Cp7rdNMW.js";class j extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
}`})]})}}export{j as default};
