import{r as o,j as e}from"./index-Cufz2vn-.js";import{E as t}from"./EditableCodeBlock-B99UfEIr.js";import"./index-L8RqyWOn.js";import"./braces-Dv3kXLaG.js";import"./file-code-CsYY4xe_.js";import"./layout-list-ByRh-OfD.js";import"./play-BNyY933V.js";import"./type-B_IIOYum.js";import"./refresh-cw-CwXhGMdO.js";import"./wand-sparkles-Ctub8UI6.js";import"./copy-Cuij30dg.js";import"./download-D9I5RdLn.js";import"./eye-off-CosODb20.js";import"./eye-CO7PB0u-.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
