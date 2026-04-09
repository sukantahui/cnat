import{r as t,j as e}from"./index-DLefW0Tp.js";import{E as o}from"./EditableCodeBlock-DBYVZE29.js";import"./index-Ck8vhGSy.js";import"./braces-DSBAqnLT.js";import"./file-code-DyHBv2VX.js";import"./layout-list-CIbLHTf3.js";import"./play-Bonc3cvQ.js";import"./type-Bom_9Shz.js";import"./refresh-cw-DfWESQEa.js";import"./wand-sparkles-DXykm3S4.js";import"./copy-Im6obCcV.js";import"./download-B1qWbheC.js";import"./eye-off-B1nx00rT.js";import"./eye-s8A1LQPP.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
