import{r as t,j as e}from"./index-DlQhRwac.js";import{E as o}from"./EditableCodeBlock-W93Wtayq.js";import"./index-Cwnu-Juo.js";import"./braces-Cs97IlMa.js";import"./file-code-BQhvRATS.js";import"./layout-list-BonHw52I.js";import"./play-CpwSfdJ1.js";import"./type-ClWXtHxZ.js";import"./refresh-cw-BFZI2NBH.js";import"./wand-sparkles-DZ1yTXD0.js";import"./copy-Dx2Xdz_j.js";import"./download-9mt5C_Kp.js";import"./eye-off-jIIH8s4K.js";import"./eye-Cs4vM6yN.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
