import{r as o,j as e}from"./index-2tOzkblz.js";import{E as t}from"./EditableCodeBlock-CU1q7wlK.js";import"./index-BNO_0XMv.js";import"./braces-BF58I9kY.js";import"./file-code-DBePoNRe.js";import"./layout-list-CquVXYkx.js";import"./play-PNWXmE5L.js";import"./type-Cfr7geYK.js";import"./refresh-cw-uClETiBf.js";import"./wand-sparkles-BJlyx_Dq.js";import"./copy-CbL44MIv.js";import"./download-BfzMDmZO.js";import"./eye-off-BqsY3cZ6.js";import"./eye-BTz061w4.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
