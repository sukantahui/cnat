import{r as t,j as o}from"./index-BQdS2coH.js";import{E as e}from"./EditableCodeBlock-DRSjOVcP.js";import"./index-D2yM79AS.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./braces-K52Ky_HV.js";import"./file-code-BM1RMzw0.js";import"./layout-list-DeS6Frv6.js";import"./play-LnkqUnKT.js";import"./type-C3qLbx7F.js";import"./refresh-cw-bMDcp0Zn.js";import"./wand-sparkles-BDhxjDBx.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";import"./eye-off-CQ9veCYt.js";import"./eye-BDBktcqH.js";class y extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
const student = {
  name: "Mounita",
  course: "Advanced Excel",
};

const copy = { ...student };
copy.course = "Advanced Excel + GST";

console.log("Original:", student);
console.log("Copy:", copy);`}),o.jsx(e,{language:"javascript",initialCode:`// Example 2: Shallow copy with Object.assign()
const teacher = {
  name: "Sukanta Hui",
  subject: "Full Stack Development",
};

const clone = Object.assign({}, teacher);
clone.subject = "JavaScript + React";

console.log("Original:", teacher);
console.log("Clone:", clone);`}),o.jsx(e,{language:"javascript",initialCode:`// Example 3: Shallow copy issue with nested objects
const batch = {
  name: "Weekend Batch",
  mentor: { name: "Tanusree Hui", subject: "Accounts" },
};

const shallowCopy = { ...batch };

shallowCopy.mentor.subject = "GST";

console.log("Original batch:", batch);
console.log("Shallow copy:", shallowCopy);
// Both mentor.subject changed because nested object is still shared`})]})}}export{y as default};
