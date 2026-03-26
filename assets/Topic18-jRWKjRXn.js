import{r as t,j as e}from"./index-nd0Xa-ab.js";import{E as o}from"./EditableCodeBlock-CallMWXv.js";import"./index-CGY8MZgm.js";import"./braces-CmuvDsVd.js";import"./file-code-Ce3qRK9I.js";import"./layout-list-pRcTrgEK.js";import"./play-DB3kfkYa.js";import"./type-CKt7De8f.js";import"./refresh-cw-DR3WFbdt.js";import"./wand-sparkles-C8RXRKnG.js";import"./copy-DxjiEBv9.js";import"./download-DtkPSF8Q.js";import"./eye-off-GoiJ7jr5.js";import"./eye-lb2KaMq3.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
