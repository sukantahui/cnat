import{r as t,j as e}from"./index-BZ1-3x1c.js";import{E as o}from"./EditableCodeBlock-CKZO-IaZ.js";import"./index-DAcJ947v.js";import"./braces-ZDFjoAI2.js";import"./file-code-D4gRmL_O.js";import"./layout-list-Dn_aCmq2.js";import"./play-CsDulOQL.js";import"./type-kdgV3pfK.js";import"./refresh-cw-CkAsW6bT.js";import"./wand-sparkles-DS7jgEjp.js";import"./copy-DRd4XZHU.js";import"./download-B2rqWgWV.js";import"./eye-off-BQZr5nas.js";import"./eye-hnPwCMtS.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
