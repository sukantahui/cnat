import{r as o,j as e}from"./index-D2oyZ1_5.js";import{E as t}from"./EditableCodeBlock-C7as2P9H.js";import"./index-D5TCWeEA.js";import"./braces-WZIYXDaQ.js";import"./file-code-1o3nobi9.js";import"./layout-list-B67Unsx-.js";import"./play-abl2IrEY.js";import"./type-H7d3bXn1.js";import"./refresh-cw-WPTBV80K.js";import"./wand-sparkles-jLNc7dpD.js";import"./copy-BCvCdePc.js";import"./download-DK6fs-E5.js";import"./eye-off-VLWNiJzP.js";import"./eye-DsKiv6FO.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
