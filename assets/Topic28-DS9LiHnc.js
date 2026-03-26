import{r as e,j as t}from"./index-b7ec57y3.js";import{E as o}from"./EditableCodeBlock-CUU3m7bV.js";import"./index-YcsC-9l3.js";import"./createLucideIcon-rpwAtNd4.js";import"./braces-DaWynF8W.js";import"./file-code-BayAKhuW.js";import"./layout-list-DHPnG2KL.js";import"./play-iDwqm0pH.js";import"./type-BCGOc5XA.js";import"./refresh-cw-DOKtjFB2.js";import"./wand-sparkles-Dm8J8N6Z.js";import"./copy-Ds2YEQZf.js";import"./download-zjLbxNEf.js";import"./eye-off-C83yZDwu.js";import"./eye-Dx1fNgme.js";class f extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
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
