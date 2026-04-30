import{r as o,j as e}from"./index-DdIeXD-l.js";import{E as t}from"./EditableCodeBlock-BAy3Nt_i.js";import"./index-BdoLMGZR.js";import"./braces-nhaegIUG.js";import"./file-code--W0N4Eit.js";import"./layout-list-Ckv48IVv.js";import"./play-D8Z08dyf.js";import"./type-DKKgNEdL.js";import"./refresh-cw-CG3J9k9V.js";import"./wand-sparkles-1ucm4P_f.js";import"./copy-CsH9Jtu6.js";import"./download-NywCF-VW.js";import"./eye-off-VC3tTGtH.js";import"./eye-DKQdLRA-.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
const student = {
  name: "Devangshu",
  course: "React with TypeScript",
};

student.batch = "Morning";
student["feesPaid"] = true;

console.log(student);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Updating existing properties
const student = {
  name: "Pranjali",
  course: "Tally with GST",
  batch: "Afternoon",
};

student.course = "Tally + Advanced Excel";
student.batch = "Evening";

console.log(student);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Deleting properties with delete
const teacher = {
  name: "Tanusree Hui",
  subject: "Accounts & Taxation",
  temporaryGuestFaculty: true,
};

console.log("Before delete:", teacher);

delete teacher.temporaryGuestFaculty;

console.log("After delete:", teacher);`})]})}}export{E as default};
