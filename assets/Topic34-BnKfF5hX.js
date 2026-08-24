import{r as o,j as e}from"./index-DQGlkDD-.js";import{E as t}from"./EditableCodeBlock-Dul0rTuD.js";import"./index-B5Ou1maK.js";import"./braces-DgkICGBe.js";import"./createLucideIcon-DkPaqQ-z.js";import"./file-code-BwO1T2yj.js";import"./layout-list-BRQeVJ0A.js";import"./play-C4es742M.js";import"./type-CTZVU0g7.js";import"./refresh-cw-wfEx28Pg.js";import"./minimize-2-tRCtfalc.js";import"./wand-sparkles-CHXCoPE3.js";import"./copy-Ccnlqc-p.js";import"./download-CLfZxcrH.js";import"./eye-off-CtfkpLSn.js";import"./eye-DYTRtkpQ.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 34 – Storing and retrieving objects in LocalStorage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"(These examples work in the browser console, not in Node.js.)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Save object to localStorage
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
