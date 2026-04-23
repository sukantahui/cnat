import{r as a,j as e}from"./index-CEi3MejZ.js";import{E as t}from"./EditableCodeBlock-B9CEyPk-.js";import"./index-DGMSD45Y.js";import"./braces-BsqYHHds.js";import"./file-code-IbumbsCL.js";import"./layout-list-CmqX5CH8.js";import"./play-CmCCpFJ2.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./wand-sparkles-FsbK9ZnO.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";import"./eye-off-BWck3tUN.js";import"./eye-r6DttwNd.js";class b extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
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
