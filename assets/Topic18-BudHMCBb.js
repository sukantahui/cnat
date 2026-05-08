import{r as t,j as e}from"./index-CNd73Haf.js";import{E as o}from"./EditableCodeBlock-5DbO4x_w.js";import"./index-C68hWScs.js";import"./braces-Cz3Z1Lm3.js";import"./file-code-D99pPLwx.js";import"./layout-list-jrwsTbkC.js";import"./play-k0XU6a0C.js";import"./type-l-7TR-1d.js";import"./refresh-cw-Cs1Cy281.js";import"./wand-sparkles-DX8ur9rV.js";import"./copy-Dqgrnt6d.js";import"./download-D0l-akX2.js";import"./eye-off-BFt-f9pX.js";import"./eye-CWJNugV0.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
