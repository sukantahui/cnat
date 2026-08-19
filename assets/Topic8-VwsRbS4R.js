import{r as o,j as e}from"./index-DWohEkZn.js";import{E as t}from"./EditableCodeBlock-CrzCPJcr.js";import"./index-CEQXCTxS.js";import"./braces-JdF8JkjR.js";import"./createLucideIcon-C1O5LkBh.js";import"./file-code-Fl3OCYw3.js";import"./layout-list-CHnqrCXG.js";import"./play-B1-I8GqR.js";import"./type-BLbZSUQo.js";import"./refresh-cw-DKLgNQ1l.js";import"./minimize-2-RAOAenst.js";import"./wand-sparkles-DdP14k2W.js";import"./copy-CYTKJbf3.js";import"./download-DrWkJMSz.js";import"./eye-off-CeH8fnu0.js";import"./eye-MtmNCO_Y.js";class y extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 8 – Adding, updating and deleting object properties"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Adding new properties
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

console.log("After delete:", teacher);`})]})}}export{y as default};
