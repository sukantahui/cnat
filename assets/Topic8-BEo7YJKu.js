import{r as o,j as e}from"./index-CJBYzsBp.js";import{E as t}from"./EditableCodeBlock-BC1qnUEw.js";import"./index-ByEGIehy.js";import"./braces-Bgeru2ve.js";import"./file-code-DZKfSOtm.js";import"./layout-list-A_3SGHy-.js";import"./play-DCPHYFS9.js";import"./type-ClsGw9cN.js";import"./refresh-cw-BAdnjbmz.js";import"./wand-sparkles-BYNPfCi2.js";import"./copy-DSDSUY6l.js";import"./download-DgaztNaP.js";import"./eye-off-ur-dMHFg.js";import"./eye-BSVCgRXR.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
