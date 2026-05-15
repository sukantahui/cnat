import{r as o,j as e}from"./index-CRQVh4re.js";import{E as t}from"./EditableCodeBlock-By7tVRU-.js";import"./index-C9ustuPO.js";import"./braces-koYBCYVL.js";import"./file-code-CDWWe15K.js";import"./layout-list-B8Q7FCNK.js";import"./play-I4WOjbVK.js";import"./type-DPaMVfx8.js";import"./refresh-cw-DGCj3_No.js";import"./wand-sparkles-CStrf0ZC.js";import"./copy-Bmu3Bn8U.js";import"./download-DfwRCjzX.js";import"./eye-off-Dht_vehv.js";import"./eye-DF2o32X7.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
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
