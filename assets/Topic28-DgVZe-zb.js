import{r as e,j as t}from"./index-COd1BgDP.js";import{E as o}from"./EditableCodeBlock-DDnNgAGW.js";import"./index-C6PolHK9.js";import"./braces-CBYgV3Zs.js";import"./file-code-CL2zX7Xy.js";import"./layout-list-CuGgqLN_.js";import"./play-jI2NV5Sw.js";import"./type-DzEAaeRI.js";import"./refresh-cw-CkNx_mLp.js";import"./wand-sparkles-7p46q3hG.js";import"./copy-CkJm4ude.js";import"./download-XOywrey6.js";import"./eye-off-sWV9Qimf.js";import"./eye-D4RF8Ay-.js";class b extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
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
