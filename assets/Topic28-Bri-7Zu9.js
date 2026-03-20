import{r as e,j as t}from"./index-CUXXvONC.js";import{E as o}from"./EditableCodeBlock-DbjIohnu.js";import"./index-CBpdwEID.js";import"./createLucideIcon-O_Er4fpW.js";import"./braces-B4AyVXmG.js";import"./file-code-BNZ84HOO.js";import"./layout-list-GoT0ASd9.js";import"./play-DNNbdgtV.js";import"./type-Bunlk4m9.js";import"./refresh-cw-BO9f_BLL.js";import"./wand-sparkles-C_tYuFMb.js";import"./copy-rP0aAxF9.js";import"./download-C-zK-a1m.js";import"./eye-off-DR1p6kU7.js";import"./eye-CH8Le7yy.js";class f extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
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
