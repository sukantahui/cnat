import{r as a,j as e}from"./index-wvAt8vmb.js";import{E as t}from"./EditableCodeBlock-6r1vjwD0.js";import"./index-l2GzpozC.js";import"./braces-B708gsEn.js";import"./file-code-DFKBVAqD.js";import"./layout-list-XJn3Fo4r.js";import"./play-DdYW9kso.js";import"./type-CpCJUiFu.js";import"./refresh-cw-XWoXFms7.js";import"./wand-sparkles-CSy20oXK.js";import"./copy-D0HGvqkI.js";import"./download-Cryk3QyC.js";import"./eye-off-BDmx55jF.js";import"./eye-DldtRLdS.js";class b extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
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
