import{r as e,j as t}from"./index-YkKVfVEM.js";import{E as o}from"./EditableCodeBlock-Bb8nn4Xi.js";import"./index-gzZkhgxu.js";import"./braces-TvM0FylP.js";import"./createLucideIcon-Cim-rzMd.js";import"./file-code-DitFwktW.js";import"./layout-list-CEyAvgT5.js";import"./play-DEajiqWU.js";import"./type-YS4uKozr.js";import"./refresh-cw-Dxhotsjr.js";import"./minimize-2-Dy1dCTjQ.js";import"./wand-sparkles-DqpDcVN7.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./eye-off-BJzm0hT7.js";import"./eye-TpFMMSv4.js";class h extends e.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 28 – Prototype and prototype chain (conceptual)"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Every object has a prototype
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
// student2 --> base --> Object.prototype --> null`})]})}}export{h as default};
