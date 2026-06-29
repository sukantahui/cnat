import{r as t,j as e}from"./index-BvEfGfTn.js";import{E as o}from"./EditableCodeBlock-CQi9RD2e.js";import"./index-Dp9HJN--.js";import"./braces-BTxk0DSh.js";import"./file-code-Dnm5Tlhr.js";import"./layout-list-JY6mx8-n.js";import"./play-DaOM0VkT.js";import"./type-CL8j6UEM.js";import"./refresh-cw-CqrLzdfO.js";import"./wand-sparkles-Cb-aYX2-.js";import"./copy-CTzV1kNf.js";import"./download-BS5IJyWv.js";import"./eye-off-CVFxbe8A.js";import"./eye-DLT6b8MZ.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
