import{r as a,j as e}from"./index-BXlhguQt.js";import{E as t}from"./EditableCodeBlock-BHKA4GgB.js";import"./index-DAzmlnHY.js";import"./braces-BulDhXKg.js";import"./file-code-DvrZGHOf.js";import"./layout-list-Cl2MPlEm.js";import"./play-Ch6qWl_k.js";import"./type-B7fVRfrN.js";import"./refresh-cw-C774EOhC.js";import"./wand-sparkles-DQE2mvpJ.js";import"./copy-ojBqBM7b.js";import"./download-B1njA82h.js";import"./eye-off-DugvWCj6.js";import"./eye-CFtYSo9m.js";class b extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
const student = {
  name: "Mounita",
  course: "Advanced Excel",
  batch: "Evening",
};

localStorage.setItem("studentProfile", JSON.stringify(student));

console.log("Saved to localStorage");`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Read object from localStorage
const data = localStorage.getItem("studentProfile");

if (data) {
  const studentObj = JSON.parse(data);
  console.log("Loaded student:", studentObj.name, "-", studentObj.course);
} else {
  console.log("No student profile found");
}`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Store array of objects
const batches = [
  { name: "Morning", trainer: "Sukanta Hui" },
  { name: "Weekend", trainer: "Tanusree Hui" },
];

localStorage.setItem("batches", JSON.stringify(batches));

const loaded = JSON.parse(localStorage.getItem("batches") || "[]");
loaded.forEach(function (b) {
  console.log(b.name + " - " + b.trainer);
});`}),e.jsx(t,{language:"javascript",initialCode:`// Example 4: Remove and clear
localStorage.removeItem("studentProfile");
localStorage.clear(); // removes all keys (use carefully)`})]})}}export{b as default};
