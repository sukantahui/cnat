import{r as e,j as t}from"./index-BvEfGfTn.js";import{E as o}from"./EditableCodeBlock-CQi9RD2e.js";import"./index-Dp9HJN--.js";import"./braces-BTxk0DSh.js";import"./file-code-Dnm5Tlhr.js";import"./layout-list-JY6mx8-n.js";import"./play-DaOM0VkT.js";import"./type-CL8j6UEM.js";import"./refresh-cw-CqrLzdfO.js";import"./wand-sparkles-Cb-aYX2-.js";import"./copy-CTzV1kNf.js";import"./download-BS5IJyWv.js";import"./eye-off-CVFxbe8A.js";import"./eye-DLT6b8MZ.js";class b extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
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
