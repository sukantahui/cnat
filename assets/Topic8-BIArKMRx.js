import{r as o,j as e}from"./index-COd1BgDP.js";import{E as t}from"./EditableCodeBlock-DDnNgAGW.js";import"./index-C6PolHK9.js";import"./braces-CBYgV3Zs.js";import"./file-code-CL2zX7Xy.js";import"./layout-list-CuGgqLN_.js";import"./play-jI2NV5Sw.js";import"./type-DzEAaeRI.js";import"./refresh-cw-CkNx_mLp.js";import"./wand-sparkles-7p46q3hG.js";import"./copy-CkJm4ude.js";import"./download-XOywrey6.js";import"./eye-off-sWV9Qimf.js";import"./eye-D4RF8Ay-.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
