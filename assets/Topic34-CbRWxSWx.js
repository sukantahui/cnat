import{r as o,j as e}from"./index-NACEEa8w.js";import{E as t}from"./EditableCodeBlock-DhbzGAxA.js";import"./index-OTxvoXyo.js";import"./createLucideIcon-DogKn5wF.js";import"./braces-DZ5e4LUG.js";import"./file-code-CJcKJH9Y.js";import"./layout-list-CM3wcDMC.js";import"./play-BGixpdkC.js";import"./type-BkuZTd3u.js";import"./refresh-cw-BRGNrlHt.js";import"./wand-sparkles-BrK6n-20.js";import"./copy-B-noeKSe.js";import"./download-DnQYd8bi.js";import"./eye-off-HKTYvvuy.js";import"./eye-D6FrJ2rq.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
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
localStorage.clear(); // removes all keys (use carefully)`})]})}}export{f as default};
