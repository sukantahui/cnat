import{r as o,j as e}from"./index-DlQhRwac.js";import{E as t}from"./EditableCodeBlock-W93Wtayq.js";import"./index-Cwnu-Juo.js";import"./braces-Cs97IlMa.js";import"./file-code-BQhvRATS.js";import"./layout-list-BonHw52I.js";import"./play-CpwSfdJ1.js";import"./type-ClWXtHxZ.js";import"./refresh-cw-BFZI2NBH.js";import"./wand-sparkles-DZ1yTXD0.js";import"./copy-Dx2Xdz_j.js";import"./download-9mt5C_Kp.js";import"./eye-off-jIIH8s4K.js";import"./eye-Cs4vM6yN.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
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
