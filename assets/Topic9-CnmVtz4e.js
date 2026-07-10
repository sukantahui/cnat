import{r as o,j as e}from"./index-DKhGj2r9.js";import{E as t}from"./EditableCodeBlock-Bw_3eVxT.js";import"./index-Db0j1cdf.js";import"./createLucideIcon-DZ4EMxs8.js";import"./braces-CEKIThwN.js";import"./file-code-BLnEmaT3.js";import"./layout-list-BuOBAyKA.js";import"./play-B4tVruhT.js";import"./type-CPkc_PUl.js";import"./refresh-cw-CKv6YgUv.js";import"./wand-sparkles-CsthY_-w.js";import"./copy-Bb5mh8KX.js";import"./download-6Kfgauek.js";import"./eye-off-C6upiu6S.js";import"./eye-CHNAHx-m.js";class j extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
