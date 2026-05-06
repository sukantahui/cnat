import{r as o,j as e}from"./index-BZ1-3x1c.js";import{E as t}from"./EditableCodeBlock-CKZO-IaZ.js";import"./index-DAcJ947v.js";import"./braces-ZDFjoAI2.js";import"./file-code-D4gRmL_O.js";import"./layout-list-Dn_aCmq2.js";import"./play-CsDulOQL.js";import"./type-kdgV3pfK.js";import"./refresh-cw-CkAsW6bT.js";import"./wand-sparkles-DS7jgEjp.js";import"./copy-DRd4XZHU.js";import"./download-B2rqWgWV.js";import"./eye-off-BQZr5nas.js";import"./eye-hnPwCMtS.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
