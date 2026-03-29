import{r as t,j as e}from"./index-Mgs-acYB.js";import{E as o}from"./EditableCodeBlock--1I2A4Uu.js";import"./index-BCpw-Wgv.js";import"./braces-BZWwN2sF.js";import"./file-code-CuOgUEMJ.js";import"./layout-list-7A-cTGVe.js";import"./play-ByAZUIab.js";import"./type-BHcgHjyI.js";import"./refresh-cw-C-deRjEY.js";import"./wand-sparkles-DCpN6EcM.js";import"./copy-CPVRjwAa.js";import"./download-DH71BTay.js";import"./eye-off-B8c0xK-q.js";import"./eye-DTS7I7-4.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
const student = {
  name: "Mounita",
  course: "Advanced Excel",
};

const copy = { ...student };
copy.course = "Advanced Excel + GST";

console.log("Original:", student);
console.log("Copy:", copy);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 2: Shallow copy with Object.assign()
const teacher = {
  name: "Sukanta Hui",
  subject: "Full Stack Development",
};

const clone = Object.assign({}, teacher);
clone.subject = "JavaScript + React";

console.log("Original:", teacher);
console.log("Clone:", clone);`}),e.jsx(o,{language:"javascript",initialCode:`// Example 3: Shallow copy issue with nested objects
const batch = {
  name: "Weekend Batch",
  mentor: { name: "Tanusree Hui", subject: "Accounts" },
};

const shallowCopy = { ...batch };

shallowCopy.mentor.subject = "GST";

console.log("Original batch:", batch);
console.log("Shallow copy:", shallowCopy);
// Both mentor.subject changed because nested object is still shared`})]})}}export{x as default};
