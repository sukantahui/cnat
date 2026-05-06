import{r as o,j as e}from"./index-BnfAr6UH.js";import{E as t}from"./EditableCodeBlock-CJAD9-yV.js";import"./index-BOJ7CUHh.js";import"./braces-CNDkIFm0.js";import"./file-code-2-2TDWSW.js";import"./layout-list-BzviaWtA.js";import"./play-Ckwl6zud.js";import"./type-Df_QG4NN.js";import"./refresh-cw-DP2gjNNw.js";import"./wand-sparkles-BegAdJAm.js";import"./copy-Cqsw3qgy.js";import"./download-DLZRmf4V.js";import"./eye-off-CnAXOkhW.js";import"./eye-DwZEsWI3.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
