import{r as o,j as e}from"./index-wvAt8vmb.js";import{E as t}from"./EditableCodeBlock-6r1vjwD0.js";import"./index-l2GzpozC.js";import"./braces-B708gsEn.js";import"./file-code-DFKBVAqD.js";import"./layout-list-XJn3Fo4r.js";import"./play-DdYW9kso.js";import"./type-CpCJUiFu.js";import"./refresh-cw-XWoXFms7.js";import"./wand-sparkles-CSy20oXK.js";import"./copy-D0HGvqkI.js";import"./download-Cryk3QyC.js";import"./eye-off-BDmx55jF.js";import"./eye-DldtRLdS.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
