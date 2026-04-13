import{r as o,j as e}from"./index-BqAFCp1G.js";import{E as t}from"./EditableCodeBlock-BTRQ-U14.js";import"./index-DlA8mtx2.js";import"./braces-iTYwY2KK.js";import"./file-code-CAr2FrfU.js";import"./layout-list-DtPLdNuI.js";import"./play-CJzmY6wB.js";import"./type-CPbU9-ly.js";import"./refresh-cw-Du2h8_Si.js";import"./wand-sparkles-BGmg0nCA.js";import"./copy-BGUeFV3f.js";import"./download-BZTnZbA3.js";import"./eye-off-D5-mJsNT.js";import"./eye-CMjhfnF0.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
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
