import{r as t,j as e}from"./index-BV1ec7QU.js";import{E as o}from"./EditableCodeBlock-DKzWiRl8.js";import"./index-FAc0gMmj.js";import"./braces-hctkfZFQ.js";import"./file-code-De99tvSp.js";import"./layout-list-B9EBcVRh.js";import"./play-dfkZtFjp.js";import"./type-Doxm7eCO.js";import"./refresh-cw-DES3yxy7.js";import"./wand-sparkles-CAvweH_1.js";import"./copy-0c2DUKQV.js";import"./download-r_U-JfHh.js";import"./eye-off-CIjwHbUc.js";import"./eye-DgGc0zhY.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),e.jsx(o,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
