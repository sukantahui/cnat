import{r as o,j as e}from"./index-BZ1-3x1c.js";import{E as t}from"./EditableCodeBlock-CKZO-IaZ.js";import"./index-DAcJ947v.js";import"./braces-ZDFjoAI2.js";import"./file-code-D4gRmL_O.js";import"./layout-list-Dn_aCmq2.js";import"./play-CsDulOQL.js";import"./type-kdgV3pfK.js";import"./refresh-cw-CkAsW6bT.js";import"./wand-sparkles-DS7jgEjp.js";import"./copy-DRd4XZHU.js";import"./download-B2rqWgWV.js";import"./eye-off-BQZr5nas.js";import"./eye-hnPwCMtS.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
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
