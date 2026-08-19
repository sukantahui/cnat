import{r as o,j as e}from"./index-DWohEkZn.js";import{E as t}from"./EditableCodeBlock-CrzCPJcr.js";import"./index-CEQXCTxS.js";import"./braces-JdF8JkjR.js";import"./createLucideIcon-C1O5LkBh.js";import"./file-code-Fl3OCYw3.js";import"./layout-list-CHnqrCXG.js";import"./play-B1-I8GqR.js";import"./type-BLbZSUQo.js";import"./refresh-cw-DKLgNQ1l.js";import"./minimize-2-RAOAenst.js";import"./wand-sparkles-DdP14k2W.js";import"./copy-CYTKJbf3.js";import"./download-DrWkJMSz.js";import"./eye-off-CeH8fnu0.js";import"./eye-MtmNCO_Y.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 17 – Objects as reference types"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Two variables, same object reference
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
console.log(obj1 === obj3); // true (same reference)`})]})}}export{E as default};
