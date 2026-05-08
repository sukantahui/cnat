import{r as o,j as e}from"./index-CNd73Haf.js";import{E as t}from"./EditableCodeBlock-5DbO4x_w.js";import"./index-C68hWScs.js";import"./braces-Cz3Z1Lm3.js";import"./file-code-D99pPLwx.js";import"./layout-list-jrwsTbkC.js";import"./play-k0XU6a0C.js";import"./type-l-7TR-1d.js";import"./refresh-cw-Cs1Cy281.js";import"./wand-sparkles-DX8ur9rV.js";import"./copy-Dqgrnt6d.js";import"./download-D0l-akX2.js";import"./eye-off-BFt-f9pX.js";import"./eye-CWJNugV0.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
