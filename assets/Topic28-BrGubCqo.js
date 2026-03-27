import{r as e,j as t}from"./index-CRiz6zY8.js";import{E as o}from"./EditableCodeBlock-BI4b1YUa.js";import"./index-BdWfQfdw.js";import"./braces-Bb-PbtvI.js";import"./file-code-C3NGmQnN.js";import"./layout-list-40k1H24I.js";import"./play-DYY1utPs.js";import"./type-Byiw2pIS.js";import"./refresh-cw-jY4OSlco.js";import"./wand-sparkles-C4B53b2y.js";import"./copy-BknYEKcl.js";import"./download-tHUdtA5g.js";import"./eye-off-CUnZm4af.js";import"./eye-D94467VC.js";class b extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
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
