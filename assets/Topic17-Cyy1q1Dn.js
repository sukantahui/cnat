import{r as o,j as e}from"./index-b7ec57y3.js";import{E as t}from"./EditableCodeBlock-CUU3m7bV.js";import"./index-YcsC-9l3.js";import"./createLucideIcon-rpwAtNd4.js";import"./braces-DaWynF8W.js";import"./file-code-BayAKhuW.js";import"./layout-list-DHPnG2KL.js";import"./play-iDwqm0pH.js";import"./type-BCGOc5XA.js";import"./refresh-cw-DOKtjFB2.js";import"./wand-sparkles-Dm8J8N6Z.js";import"./copy-Ds2YEQZf.js";import"./download-zjLbxNEf.js";import"./eye-off-C83yZDwu.js";import"./eye-Dx1fNgme.js";class C extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
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
console.log(obj1 === obj3); // true (same reference)`})]})}}export{C as default};
