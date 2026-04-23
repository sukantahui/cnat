import{r as o,j as e}from"./index-CEi3MejZ.js";import{E as t}from"./EditableCodeBlock-B9CEyPk-.js";import"./index-DGMSD45Y.js";import"./braces-BsqYHHds.js";import"./file-code-IbumbsCL.js";import"./layout-list-CmqX5CH8.js";import"./play-CmCCpFJ2.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./wand-sparkles-FsbK9ZnO.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";import"./eye-off-BWck3tUN.js";import"./eye-r6DttwNd.js";class E extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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
