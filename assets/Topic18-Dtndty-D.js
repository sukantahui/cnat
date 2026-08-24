import{r as t,j as o}from"./index-DQGlkDD-.js";import{E as e}from"./EditableCodeBlock-Dul0rTuD.js";import"./index-B5Ou1maK.js";import"./braces-DgkICGBe.js";import"./createLucideIcon-DkPaqQ-z.js";import"./file-code-BwO1T2yj.js";import"./layout-list-BRQeVJ0A.js";import"./play-C4es742M.js";import"./type-CTZVU0g7.js";import"./refresh-cw-wfEx28Pg.js";import"./minimize-2-tRCtfalc.js";import"./wand-sparkles-CHXCoPE3.js";import"./copy-Ccnlqc-p.js";import"./download-CLfZxcrH.js";import"./eye-off-CtfkpLSn.js";import"./eye-DYTRtkpQ.js";class w extends t.Component{render(){return o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-xl font-semibold",children:"Topic 18 – Shallow copy: spread operator and Object.assign()"}),o.jsx(e,{language:"javascript",initialCode:`// Example 1: Shallow copy with spread (...)
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
// Both mentor.subject changed because nested object is still shared`})]})}}export{w as default};
