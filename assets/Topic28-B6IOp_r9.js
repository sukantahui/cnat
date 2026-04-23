import{r as e,j as t}from"./index-29x6CIxg.js";import{E as o}from"./EditableCodeBlock-BwSJC4Iq.js";import"./index-C9bfmqVU.js";import"./braces-vDm8NKs9.js";import"./file-code-CA9Wnnsl.js";import"./layout-list-CW4VLJGk.js";import"./play-CXfWgowW.js";import"./type-CUvrbdtJ.js";import"./refresh-cw-DkCi0I10.js";import"./wand-sparkles-C_FtQZFz.js";import"./copy-slB2T7Ka.js";import"./download-BQPfbLQ1.js";import"./eye-off-xoXN48Nq.js";import"./eye-IbEK5vHC.js";class b extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
const student = {
  name: "Susmita",
  course: "Python",
};

console.log(Object.getPrototypeOf(student)); // prototype object`}),t.jsx(o,{language:"javascript",initialCode:`// Example 2: Constructor function prototype
function Student(name) {
  this.name = name;
}

console.log(Student.prototype); // prototype of all Student instances

const s1 = new Student("Ritaja");
console.log(Object.getPrototypeOf(s1) === Student.prototype); // true`}),t.jsx(o,{language:"javascript",initialCode:`// Example 3: Prototype chain lookup
const base = { center: "Coder & AccoTax" };
const student2 = Object.create(base); // prototype is base
student2.name = "Kaustav";

console.log(student2.name);    // own property
console.log(student2.center);  // found in prototype
console.log(student2.toString); // found further up in Object.prototype`}),t.jsx(o,{language:"javascript",initialCode:`// Example 4: Visualising the chain (conceptual comments)
// student2 --> base --> Object.prototype --> null`})]})}}export{b as default};
