import{r as o,j as e}from"./index-BQNsLvl4.js";import{E as t}from"./EditableCodeBlock-W6crZnX1.js";import"./index-Bf_FrdBe.js";import"./createLucideIcon-DfWMkJeo.js";import"./braces-DoP_KH8v.js";import"./file-code-Da2V0TW7.js";import"./layout-list-wnHrvZcu.js";import"./play-BGY4BZxw.js";import"./type-B3clx7CX.js";import"./refresh-cw-DeSTVkrw.js";import"./wand-sparkles-DJr-CXb3.js";import"./copy-ggF1ebug.js";import"./download-DAPiigzn.js";import"./eye-off-C-SnOcmU.js";import"./eye-Cp7rdNMW.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
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
