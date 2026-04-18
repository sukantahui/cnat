import{r as o,j as e}from"./index-CTaFCVvl.js";import{E as t}from"./EditableCodeBlock-KOhOfWQC.js";import"./index-RG1_EAcX.js";import"./braces-DR1B3IWk.js";import"./file-code-DdaZ0WP2.js";import"./layout-list-BRs4SSFE.js";import"./play-rkdgOENq.js";import"./type-Wnld5au3.js";import"./refresh-cw-ClGJKkyE.js";import"./wand-sparkles-Dq-Tbn4Z.js";import"./copy-DY-fjKN5.js";import"./download-CVsa0i-2.js";import"./eye-off-DQCWcKuS.js";import"./eye-RMvPMGzV.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
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
