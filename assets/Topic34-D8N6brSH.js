import{r as a,j as e}from"./index-CAWfB0WX.js";import{E as t}from"./EditableCodeBlock-CcMNS1KL.js";import"./index-uncorcit.js";import"./braces-CUM-PBNo.js";import"./file-code-BoxdIech.js";import"./layout-list-C0N63pq9.js";import"./play-Ps4HZc_E.js";import"./type-Cqxh80Ov.js";import"./refresh-cw-BsQtlftS.js";import"./wand-sparkles-jvHbFS0u.js";import"./copy-CfpCMbyO.js";import"./download-Cl4ot-Qj.js";import"./eye-off-BUSTRKze.js";import"./eye-Co30Kfdg.js";class b extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
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
