import{r as t,j as e}from"./index-CNNP-EED.js";import{E as o}from"./EditableCodeBlock-BIX_SGmv.js";import"./index-B_hKKDE8.js";import"./braces-QBjObA3O.js";import"./file-code-D8YGDSR0.js";import"./layout-list-CeTmCPSq.js";import"./play-DAKE_zJf.js";import"./type-BjJFPXAY.js";import"./refresh-cw-DrD0jpdY.js";import"./wand-sparkles-BlZq3NP9.js";import"./copy-BQOvbT5P.js";import"./download-COgPc9qQ.js";import"./eye-off-BSiLqLab.js";import"./eye-Q1EsGrCZ.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
