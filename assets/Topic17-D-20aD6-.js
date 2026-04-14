import{r as o,j as e}from"./index-Cufz2vn-.js";import{E as t}from"./EditableCodeBlock-B99UfEIr.js";import"./index-L8RqyWOn.js";import"./braces-Dv3kXLaG.js";import"./file-code-CsYY4xe_.js";import"./layout-list-ByRh-OfD.js";import"./play-BNyY933V.js";import"./type-B_IIOYum.js";import"./refresh-cw-CwXhGMdO.js";import"./wand-sparkles-Ctub8UI6.js";import"./copy-Cuij30dg.js";import"./download-D9I5RdLn.js";import"./eye-off-CosODb20.js";import"./eye-CO7PB0u-.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
const studentA = { name: "Ritaja", course: "Python" };
const studentB = studentA; // same reference

studentB.course = "JavaScript";

console.log("studentA:", studentA);
console.log("studentB:", studentB);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Passing object to a function (still reference)
function enrollInCourse(student, newCourse) {
  student.course = newCourse;
}

const student = { name: "Kaustav", course: "C" };
enrollInCourse(student, "Full Stack");

console.log(student); // changed by function`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Objects inside arrays share references too
const student = { name: "Susmita", course: "Excel" };
const arr = [student];

arr[0].course = "Advanced Excel";

console.log("student:", student);
console.log("arr[0]:", arr[0]);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 4: Comparing references
const obj1 = { name: "Pranjali" };
const obj2 = { name: "Pranjali" };
const obj3 = obj1;

console.log(obj1 === obj2); // false (different objects)
console.log(obj1 === obj3); // true (same reference)`})]})}}export{f as default};
