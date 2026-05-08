import{r as o,j as e}from"./index-DaJZPAzN.js";import{E as t}from"./EditableCodeBlock-DPY6mffP.js";import"./index-BNRMmMjw.js";import"./braces-BlnKo9xV.js";import"./file-code-DVrGLACy.js";import"./layout-list-DEPOVFNL.js";import"./play-_VBtPl4R.js";import"./type-B8EDvMMZ.js";import"./refresh-cw-CqFIfL8c.js";import"./wand-sparkles-AgK1WDy3.js";import"./copy-Q2INuC-O.js";import"./download-CQzh5qwM.js";import"./eye-off-C4T7emjA.js";import"./eye-BWQFOqkh.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
