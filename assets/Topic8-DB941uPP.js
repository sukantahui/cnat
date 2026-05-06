import{r as o,j as e}from"./index-CA8TNF9q.js";import{E as t}from"./EditableCodeBlock-D19ZyosX.js";import"./index-C4QWIY9d.js";import"./braces-DLulIgEJ.js";import"./file-code-D-G6C0cs.js";import"./layout-list-Bkf0ewxw.js";import"./play-Q15FUXyc.js";import"./type-Cv5vcz8o.js";import"./refresh-cw-DG8SgGrE.js";import"./wand-sparkles--Ul1pC_O.js";import"./copy-BjPaPwc6.js";import"./download-DfUNGLMk.js";import"./eye-off-bTjZ_r81.js";import"./eye-DHELtmKC.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
