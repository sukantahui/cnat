import{r as o,j as e}from"./index-YkKVfVEM.js";import{E as t}from"./EditableCodeBlock-Bb8nn4Xi.js";import"./index-gzZkhgxu.js";import"./braces-TvM0FylP.js";import"./createLucideIcon-Cim-rzMd.js";import"./file-code-DitFwktW.js";import"./layout-list-CEyAvgT5.js";import"./play-DEajiqWU.js";import"./type-YS4uKozr.js";import"./refresh-cw-Dxhotsjr.js";import"./minimize-2-Dy1dCTjQ.js";import"./wand-sparkles-DqpDcVN7.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./eye-off-BJzm0hT7.js";import"./eye-TpFMMSv4.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
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
localStorage.clear(); // removes all keys (use carefully)`})]})}}export{v as default};
