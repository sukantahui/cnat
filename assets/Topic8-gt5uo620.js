import{r as o,j as e}from"./index-CiucDjKk.js";import{E as t}from"./EditableCodeBlock-BYSSzxKJ.js";import"./index-CpCb3E_X.js";import"./braces-BQZVHMtl.js";import"./file-code-BnWMtMm-.js";import"./layout-list-DysuKicz.js";import"./play-B4TXEWqb.js";import"./type-COTgqaDv.js";import"./refresh-cw-V8JttSZQ.js";import"./wand-sparkles-NnSw4MJA.js";import"./copy-CGs2rQAh.js";import"./download-D8pjhHSm.js";import"./eye-off-Ln5aLgun.js";import"./eye-z1nKQA9f.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
