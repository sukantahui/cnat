import{r as o,j as e}from"./index-YkKVfVEM.js";import{E as t}from"./EditableCodeBlock-Bb8nn4Xi.js";import"./index-gzZkhgxu.js";import"./braces-TvM0FylP.js";import"./createLucideIcon-Cim-rzMd.js";import"./file-code-DitFwktW.js";import"./layout-list-CEyAvgT5.js";import"./play-DEajiqWU.js";import"./type-YS4uKozr.js";import"./refresh-cw-Dxhotsjr.js";import"./minimize-2-Dy1dCTjQ.js";import"./wand-sparkles-DqpDcVN7.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./eye-off-BJzm0hT7.js";import"./eye-TpFMMSv4.js";class C extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 9 – Checking properties: in operator and hasOwnProperty()"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using the "in" operator
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
