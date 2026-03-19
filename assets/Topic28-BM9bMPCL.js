import{r as e,j as t}from"./index-BQdS2coH.js";import{E as o}from"./EditableCodeBlock-DRSjOVcP.js";import"./index-D2yM79AS.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./braces-K52Ky_HV.js";import"./file-code-BM1RMzw0.js";import"./layout-list-DeS6Frv6.js";import"./play-LnkqUnKT.js";import"./type-C3qLbx7F.js";import"./refresh-cw-bMDcp0Zn.js";import"./wand-sparkles-BDhxjDBx.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";import"./eye-off-CQ9veCYt.js";import"./eye-BDBktcqH.js";class f extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
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
// student2 --> base --> Object.prototype --> null`})]})}}export{f as default};
