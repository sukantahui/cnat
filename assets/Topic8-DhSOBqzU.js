import{r as o,j as e}from"./index-DjvKv1PW.js";import{E as t}from"./EditableCodeBlock-BlZlbjKz.js";import"./index-mK8ZHsz4.js";import"./braces-BlLLiYmy.js";import"./file-code-DSSEGoLv.js";import"./layout-list-CYZIKdtw.js";import"./play-BnSU7xNV.js";import"./type-BIKbBNNa.js";import"./refresh-cw-ivyghxCZ.js";import"./wand-sparkles-TALHM6O8.js";import"./copy-CLZJQYx-.js";import"./download-Do58wzLY.js";import"./eye-off-DACqBnbL.js";import"./eye-DhOQz1FO.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
